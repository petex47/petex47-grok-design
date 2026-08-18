(function () {
  const vault = window.PETEX47_VAULT;
  const notes = vault.notes;
  const byTitle = new Map(notes.map((n) => [n.title, n]));
  const byPath = new Map(notes.map((n) => [n.path, n]));

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function parseWikiTargets(markdown) {
    const titles = [];
    const re = /\[\[([^\]|#]+)(?:\|([^\]]+))?\]\]/g;
    let m;
    while ((m = re.exec(markdown))) titles.push(m[1].trim());
    return titles;
  }

  function outgoing(note) {
    return parseWikiTargets(note.markdown)
      .map((title) => byTitle.get(title))
      .filter(Boolean);
  }

  function backlinksTo(note) {
    return notes.filter((n) => n.title !== note.title && parseWikiTargets(n.markdown).includes(note.title));
  }

  function noteHref(note) {
    return "#/" + encodeURI(note.path);
  }

  function inlineFormat(raw) {
    let s = escapeHtml(raw);
    s = s.replace(/\[\[([^\]|#]+)(?:\|([^\]]+))?\]\]/g, (_, title, alias) => {
      const t = title.trim();
      const label = (alias || title).trim();
      const note = byTitle.get(t);
      if (!note) return `<span class="wiki is-unresolved">${escapeHtml(label)}</span>`;
      return `<a class="wiki" href="${noteHref(note)}">${escapeHtml(label)}</a>`;
    });
    s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
      const safe = escapeHtml(href);
      const external = /^(https?:|mailto:)/i.test(href);
      const extra = external ? ' target="_blank" rel="noopener noreferrer"' : "";
      return `<a href="${safe}"${extra}>${escapeHtml(label)}</a>`;
    });
    s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    s = s.replace(/(^|[^*])\*([^*]+)\*(?!\*)/g, "$1<em>$2</em>");
    s = s.replace(/`([^`]+)`/g, "<code>$1</code>");
    return s;
  }

  function renderMarkdown(markdown) {
    const lines = markdown.replace(/\r\n/g, "\n").split("\n");
    const html = [];
    let i = 0;

    const flushList = (items, ordered) => {
      if (!items.length) return;
      const tag = ordered ? "ol" : "ul";
      html.push(`<${tag}>${items.map((item) => `<li>${inlineFormat(item)}</li>`).join("")}</${tag}>`);
      items.length = 0;
    };

    const ul = [];
    const ol = [];

    while (i < lines.length) {
      const line = lines[i];
      if (!line.trim()) {
        flushList(ul, false);
        flushList(ol, true);
        i += 1;
        continue;
      }
      if (/^##\s+/.test(line)) {
        flushList(ul, false);
        flushList(ol, true);
        html.push(`<h2>${inlineFormat(line.replace(/^##\s+/, ""))}</h2>`);
        i += 1;
        continue;
      }
      if (/^###\s+/.test(line)) {
        flushList(ul, false);
        flushList(ol, true);
        html.push(`<h3>${inlineFormat(line.replace(/^###\s+/, ""))}</h3>`);
        i += 1;
        continue;
      }
      if (/^[-*]\s+/.test(line)) {
        flushList(ol, true);
        ul.push(line.replace(/^[-*]\s+/, ""));
        i += 1;
        continue;
      }
      if (/^\d+\.\s+/.test(line)) {
        flushList(ul, false);
        ol.push(line.replace(/^\d+\.\s+/, ""));
        i += 1;
        continue;
      }
      flushList(ul, false);
      flushList(ol, true);
      const para = [line];
      i += 1;
      while (i < lines.length && lines[i].trim() && !/^#{2,3}\s+/.test(lines[i]) && !/^[-*]\s+/.test(lines[i]) && !/^\d+\.\s+/.test(lines[i])) {
        para.push(lines[i]);
        i += 1;
      }
      html.push(`<p>${inlineFormat(para.join(" "))}</p>`);
    }
    flushList(ul, false);
    flushList(ol, true);
    return html.join("");
  }

  function currentPath() {
    const hash = decodeURI(location.hash.replace(/^#\/?/, "")).replace(/\/$/, "");
    return hash || vault.home;
  }

  function folders() {
    const map = new Map();
    for (const n of notes) {
      if (!n.folder) continue;
      if (!map.has(n.folder)) map.set(n.folder, []);
      map.get(n.folder).push(n);
    }
    for (const list of map.values()) list.sort((a, b) => a.title.localeCompare(b.title));
    return [...map.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  }

  const rootNotes = notes.filter((n) => !n.folder).sort((a, b) => {
    if (a.title === vault.home) return -1;
    if (b.title === vault.home) return 1;
    return a.title.localeCompare(b.title);
  });

  const openFolders = new Set(folders().map(([name]) => name));
  let query = "";

  function matchesQuery(note) {
    if (!query) return true;
    const q = query.toLowerCase();
    return note.title.toLowerCase().includes(q) || note.markdown.toLowerCase().includes(q);
  }

  function row(note, activePath) {
    const active = note.path === activePath ? " is-active" : "";
    return `<a class="tree-row${active}" href="${noteHref(note)}">${escapeHtml(note.title)}</a>`;
  }

  function renderTree(activePath) {
    const q = query.trim();
    let html = "";

    for (const note of rootNotes) {
      if (q && !matchesQuery(note)) continue;
      html += row(note, activePath);
    }

    for (const [name, children] of folders()) {
      const visible = q ? children.filter(matchesQuery) : children;
      if (q && !visible.length) continue;
      const isOpen = q || openFolders.has(name);
      html += `<div class="tree-folder${isOpen ? " is-open" : ""}" data-folder="${escapeHtml(name)}">`;
      html += `<button type="button" class="tree-row" data-toggle-folder="${escapeHtml(name)}"><svg class="chev" viewBox="0 0 10 10" aria-hidden="true"><path fill="currentColor" d="M2 3.5 5 7.5 8 3.5z"/></svg>${escapeHtml(name)}</button>`;
      html += `<div class="tree-children"${isOpen ? "" : " hidden"}>`;
      html += visible.map((n) => row(n, activePath)).join("");
      html += `</div></div>`;
    }
    return html;
  }

  function renderSidebar(activePath) {
    document.getElementById("sidebar").innerHTML = `
      <div class="sidebar-head">
        <a class="vault-name" href="${noteHref(byTitle.get(vault.home))}">
          <span class="vault-mark">p</span>
          ${escapeHtml(vault.name)}
        </a>
        <input class="search" type="search" placeholder="Search" value="${escapeHtml(query)}" aria-label="Search notes" />
      </div>
      <nav class="tree" aria-label="Files">${renderTree(activePath)}</nav>
      <div class="sidebar-foot">
        <a href="../index.html">← editorial site</a>
      </div>
    `;
  }

  function renderNote(note) {
    const links = backlinksTo(note);
    const crumb = note.folder
      ? `<p class="crumb"><a href="${noteHref(byTitle.get(vault.home))}">${escapeHtml(vault.name)}</a> / ${escapeHtml(note.folder)}</p>`
      : `<p class="crumb"><a href="${noteHref(byTitle.get(vault.home))}">${escapeHtml(vault.name)}</a></p>`;

    const mentionList = links.length
      ? `<ul>${links.map((n) => `<li><a href="${noteHref(n)}">${escapeHtml(n.title)}</a></li>`).join("")}</ul>`
      : `<p class="missing">No linked mentions yet.</p>`;

    document.getElementById("pane").innerHTML = `
      ${crumb}
      <h1 class="note-title">${escapeHtml(note.title)}</h1>
      <div class="note-body">${renderMarkdown(note.markdown)}</div>
      <section class="backlinks">
        <h2>Linked mentions</h2>
        ${mentionList}
      </section>
    `;
    document.title = `${note.title} — ${vault.name}`;
  }

  function renderMissing(path) {
    document.getElementById("pane").innerHTML = `
      <p class="crumb">${escapeHtml(vault.name)}</p>
      <h1 class="note-title">Note not found</h1>
      <div class="note-body">
        <p class="missing">Nothing at <code>${escapeHtml(path)}</code>.</p>
        <p><a class="wiki" href="${noteHref(byTitle.get(vault.home))}">Back to ${escapeHtml(vault.home)}</a></p>
      </div>
    `;
    document.title = `Note not found — ${vault.name}`;
  }

  function closeMobile() {
    document.getElementById("sidebar").classList.remove("is-open");
    const backdrop = document.querySelector(".backdrop");
    backdrop.classList.remove("is-open");
    backdrop.hidden = true;
    document.querySelector(".menu-btn").textContent = "Menu";
  }

  function render() {
    const path = currentPath();
    const note = byPath.get(path) || byTitle.get(path);
    renderSidebar(note ? note.path : path);
    if (note) renderNote(note);
    else renderMissing(path);
  }

  window.addEventListener("hashchange", () => {
    closeMobile();
    render();
  });

  document.addEventListener("input", (e) => {
    if (!e.target.classList.contains("search")) return;
    query = e.target.value;
    const path = currentPath();
    const note = byPath.get(path) || byTitle.get(path);
    document.querySelector(".tree").innerHTML = renderTree(note ? note.path : path);
  });

  document.addEventListener("click", (e) => {
    const toggle = e.target.closest("[data-toggle-folder]");
    if (toggle) {
      const name = toggle.getAttribute("data-toggle-folder");
      if (openFolders.has(name)) openFolders.delete(name);
      else openFolders.add(name);
      const path = currentPath();
      const note = byPath.get(path) || byTitle.get(path);
      document.querySelector(".tree").innerHTML = renderTree(note ? note.path : path);
    }
  });

  const menuBtn = document.querySelector(".menu-btn");
  const backdrop = document.querySelector(".backdrop");
  menuBtn.addEventListener("click", () => {
    const sidebar = document.getElementById("sidebar");
    const open = !sidebar.classList.contains("is-open");
    sidebar.classList.toggle("is-open", open);
    backdrop.classList.toggle("is-open", open);
    backdrop.hidden = !open;
    menuBtn.textContent = open ? "Close" : "Menu";
  });
  backdrop.addEventListener("click", closeMobile);

  window.PETEX47_V2 = {
    byTitle,
    byPath,
    outgoing,
    backlinksTo,
    parseWikiTargets,
    renderMarkdown,
    currentPath,
  };

  if (!location.hash) location.hash = "#/" + encodeURI(vault.home);
  else render();
})();
