/**
 * Mock Obsidian vault for /v2.
 * Each note has a path (folder/title), title, optional folder, and markdown body.
 * Wiki links use [[Note Title]] and are resolved at runtime.
 */
window.PETEX47_VAULT = {
  name: "petex47",
  home: "Pete Quinones IV",
  notes: [
    {
      path: "Pete Quinones IV",
      title: "Pete Quinones IV",
      folder: null,
      markdown: `Former line cook building businesses, building endurance, and documenting the process from San Antonio, Texas.

I spent more than 12 years working in kitchens. Long shifts, hot lines, prep lists, and dinner rushes taught me how to stay calm, move fast, and keep showing up when I'm tired.

Eventually I stopped waiting for the perfect time and started building my own thing.

## Now

- Growing [[Kaizen Fuel Kitchen]]
- Building [[The Kaizen Tribe]]
- Writing [[Letters from The Kaizen Tribe]]
- Shipping [[Train. Fuel. Build. — 56-Day Sprint]]
- Training for endurance — [[Races]] and [[The Endurance Project]]

## In this vault

This is a Publish-style view of the same work that lives on the [editorial site](../index.html).

- [[About]] — the longer story
- Projects — [[Kaizen Fuel Kitchen]], [[Kaizen Deep Work]], [[petex47.com]]
- Notes — field notes on showing up, kitchens, and shipping
- Log — [[Timeline]] and [[Races]]
- [[Contact]] — send a message
`,
    },
    {
      path: "About",
      title: "About",
      folder: null,
      markdown: `Christ follower. Line cook for twelve years. Now full-time founder of [[Kaizen Fuel Kitchen]] in San Antonio, Texas.

The through-line is [[The compounding power of just showing up|showing up]] — in the kitchen, on the run, and in the work.

## Train. Fuel. Build.

That's the operating system. Train the body. Fuel with intention. Build the thing you keep talking about. See [[Train. Fuel. Build. — 56-Day Sprint]] and [[Letters from The Kaizen Tribe]].

## The line

Twelve years on other people's lines taught me mise en place, ownership of the station, and calm when the tickets stack. Those lessons are in [[What the kitchen taught me about building]].

## The bet

[[Kaizen Fuel Kitchen]] started as smoked chicken for friends who trained hard. It became a performance meal prep company. [[The Kaizen Tribe]] is the community around it — internet friends trying to become harder to kill.

The longer about page lives on [Letters from The Kaizen Tribe](https://letters.thekaizentribe.co/about).
`,
    },
    {
      path: "Contact",
      title: "Contact",
      folder: null,
      markdown: `Got something in the works? Send a message and tell me what you're building — a site, a brand, or an idea that's still taking shape.

## Start the conversation

[pete@thekaizentribe.co](mailto:pete@thekaizentribe.co)

## For updates

- [X](https://x.com/petex47)
- [Instagram](https://www.instagram.com/petex47/)

## For work

Email is the best first step. I care about [[Kaizen Fuel Kitchen]], [[The Kaizen Tribe]], and anything that helps people train, fuel, and build.
`,
    },
    {
      path: "Projects/Kaizen Fuel Kitchen",
      title: "Kaizen Fuel Kitchen",
      folder: "Projects",
      markdown: `Performance meal prep · San Antonio.

High-protein, real-food weekly meals for athletes, runners, lifters, and busy people. The food has to be good — that's the floor. The real product is the system: clean labels, consistent portions, predictable timing.

See [[Meal prep is a system, not a service]].

Site: [kaizenfuelkitchen.com](https://kaizenfuelkitchen.com)

Related: [[The Kaizen Tribe]], [[Letters from The Kaizen Tribe]], [[Timeline]]
`,
    },
    {
      path: "Projects/The Kaizen Tribe",
      title: "The Kaizen Tribe",
      folder: "Projects",
      markdown: `Internet friends trying to become harder to kill — custom clothes, resources, newsletters, and community.

The idea is simple: you are who you hunt with. Builders, athletes, and creators committed to getting 1% better every day.

Site: [thekaizentribe.co](https://thekaizentribe.co)

Related: [[Kaizen Fuel Kitchen]], [[Letters from The Kaizen Tribe]], [[Train. Fuel. Build. — 56-Day Sprint]]
`,
    },
    {
      path: "Projects/Letters from The Kaizen Tribe",
      title: "Letters from The Kaizen Tribe",
      folder: "Projects",
      markdown: `A weekly field note documenting the journey from line cook to disciplined founder — building [[Kaizen Fuel Kitchen]] + fueling athletes.

Read / subscribe: [letters.thekaizentribe.co](https://letters.thekaizentribe.co)

Related: [[The Kaizen Tribe]], [[Building AI apps with Lovable]]
`,
    },
    {
      path: "Projects/Train. Fuel. Build. — 56-Day Sprint",
      title: "Train. Fuel. Build. — 56-Day Sprint",
      folder: "Projects",
      markdown: `A streak tracker for people who actually want to change. BETA.

Train the body. Fuel with intention. Build the work. 56 days of keeping the promises you make to yourself.

Site: [trainfuelbuild.com](https://trainfuelbuild.com)

Related: [[The Endurance Project]], [[Races]], [[The compounding power of just showing up]]
`,
    },
    {
      path: "Projects/Kaizen Deep Work",
      title: "Kaizen Deep Work",
      folder: "Projects",
      markdown: `A minimal focus timer for deep work.

Built to protect blocks of attention while shipping [[Kaizen Fuel Kitchen]] and the rest of the stack.

Site: [kaizendeepwork.com](https://kaizendeepwork.com)

Related: [[Building AI apps with Lovable]], [[petex47.com]]
`,
    },
    {
      path: "Projects/The Endurance Project",
      title: "The Endurance Project",
      folder: "Projects",
      markdown: `Running, endurance training, and the daily miles.

The story of rebuilding health and training for endurance races — less highlight reel, more honest lessons on discipline. Log is in [[Races]]. The streak tool is [[Train. Fuel. Build. — 56-Day Sprint]].

Strava: [profile](https://www.strava.com/athletes/106481123)
`,
    },
    {
      path: "Projects/petex47.com",
      title: "petex47.com",
      folder: "Projects",
      markdown: `This site — a living archive of the work.

The main homepage is the editorial layout. This \`/v2\` view is an [Obsidian Publish](https://obsidian.md/publish)-style vault of the same material: projects, notes, and log.

- Editorial home: [index](../index.html)
- This vault: [[Pete Quinones IV]]
`,
    },
    {
      path: "Notes/The compounding power of just showing up",
      title: "The compounding power of just showing up",
      folder: "Notes",
      markdown: `July 2026

Most days won't feel remarkable. The training session where nothing clicks. The morning where the prep list feels twice as long. The build session where the code fights you.

But the streak matters more than any single day. Twelve years on the line taught me that. You clock in, you set up your station, you push through the rush. Not because it's inspiring — because it's the job.

The endurance engine, [[Kaizen Fuel Kitchen]], the apps — they're all built the same way. One boring, unglamorous rep at a time.

See also: [[Train. Fuel. Build. — 56-Day Sprint]], [[What the kitchen taught me about building]]
`,
    },
    {
      path: "Notes/What the kitchen taught me about building",
      title: "What the kitchen taught me about building",
      folder: "Notes",
      markdown: `June 2026

Mise en place. Everything in its place, before service starts. Founders call it planning. Cooks call it survival.

Ownership of the station. If your corner of the line is wrong, the whole plate is wrong. Nobody's coming to save you.

Calm under pressure. When the tickets are stacked ten deep and the printer won't stop, panicking costs you seconds you don't have. Same in a business.

That's the spine of [[Kaizen Fuel Kitchen]] and [[About]].
`,
    },
    {
      path: "Notes/Meal prep is a system, not a service",
      title: "Meal prep is a system, not a service",
      folder: "Notes",
      markdown: `May 2026

When I started [[Kaizen Fuel Kitchen]], I thought I was selling food. I was actually selling a system that removes decisions from someone's week.

The food has to be good — that's the floor. But the real product is the container: clean labels, consistent portions, predictable timing, honest ingredients.

Every improvement to the system compounds. Every shortcut costs trust.
`,
    },
    {
      path: "Notes/Building AI apps with Lovable",
      title: "Building AI apps with Lovable",
      folder: "Notes",
      markdown: `April 2026

I'm not a professional engineer. I'm a cook who learned to ship.

Lovable collapses the distance between the idea in my head and the thing running on the internet. That means I get to test ideas the same week I have them, and the ones that survive get more of my time.

The bar isn't "is this a perfect app". The bar is "does it solve the actual problem I have this week".

That's how [[Kaizen Deep Work]], [[Train. Fuel. Build. — 56-Day Sprint]], and [[petex47.com]] got out the door.
`,
    },
    {
      path: "Log/Timeline",
      title: "Timeline",
      folder: "Log",
      markdown: `Work and projects, in the order they happened.

## 2026

- **petex47.com** — a living archive. See [[petex47.com]].
- **56-Day Kaizen Sprint** — train, eat with intention, build. [[Train. Fuel. Build. — 56-Day Sprint]]
- **[[The Kaizen Tribe]]** — you are who you hunt with.
- **[[The Endurance Project]]** — daily miles, honest training.
- **[[Letters from The Kaizen Tribe]]** — weekly field notes.

## 2025

- Full-time founder of [[Kaizen Fuel Kitchen]].
- San Antonio Marathon (DNF — Mile 20). Logged on [[Races]].

## 2024

- KFK becomes a performance food company in San Antonio.
- First customers sharing meals at home.
- San Antonio Rock N Roll Marathon.

## 2023

- The first idea: a name, a logo on paper, smoked chicken for friends who trained hard.
- Austin Half marathon.

## 2013 – 2025

Twelve years on the line. Urgency, preparation, ownership, repetition. Still using every one of those lessons — [[What the kitchen taught me about building]].
`,
    },
    {
      path: "Log/Races",
      title: "Races",
      folder: "Log",
      markdown: `A running log of the races I've finished — and the ones I'm training for next. Part of [[The Endurance Project]].

## Half-marathons

- San Antonio Rock n Roll Half marathon 2022 (2:28:15)
- Austin Half marathon 2023 (2:13:02)
- Wildflower Trail Half marathon (3:08:50)

## Full marathons

- San Antonio Rock N Roll 2024 (6:41:44)
- San Antonio Marathon 2025 (DNF — Mile 20)

## Upcoming

- San Antonio Marathon 2026 (December 6th)
- Outlast San Antonio 2026 (December 12th, 2026)
- Ironman 70.3 Dallas-Little Elm 2027 (March 14th, 2027)
`,
    },
  ],
};
