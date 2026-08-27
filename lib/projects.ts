export type Category =
  | "hardware"
  | "software"
  | "games"
  | "study"
  | "research"
  | "security";

export const categories: { id: Category; label: string }[] = [
  { id: "hardware", label: "Hardware" },
  { id: "software", label: "Software" },
  { id: "games", label: "Games" },
  { id: "study", label: "Study tools" },
  { id: "research", label: "Research" },
  { id: "security", label: "Security studio" },
];

export type Project = {
  slug: string
  title: string
  lede: string
  year: string
  category: Category
  stack: string[]
  featured?: boolean
  images: { src: string; alt: string }[]
  live?: string
  repo?: string
  intro: string[]
  method: string[]
  demo: string[]
  conclusion: string[]
};

export const projects: Project[] = [
  {
    slug: "haptic-glove",
    title: "Haptic glove for AR escape rooms",
    lede: "Vision Pro fingertip collisions, three ESP32 nodes, and a glove that can pin, buzz, and change temperature.",
    year: "2023–24",
    category: "hardware",
    featured: true,
    stack: ["ESP32", "Unity", "Apple Vision Pro", "UDP", "P20 pin-array", "TEC"],
    images: [
      { src: "/projects/glove-prototype.jpg", alt: "Glove prototype worn during a mixed-reality test" },
      { src: "/projects/glove-prototype-1.jpg", alt: "Second view of the haptic glove hardware" },
      { src: "/projects/glove-prototype-2.jpg", alt: "Glove hardware on the bench" },
      { src: "/projects/glove-poster.png", alt: "Research poster for the haptic glove project" },
      { src: "/projects/glove-left.png", alt: "Left-hand module diagram" },
      { src: "/projects/glove-right.png", alt: "Right-hand module diagram" },
    ],
    intro: [
      "Undergraduate thesis at De La Salle University (ESCA-1-2324-C2, AY 2023–24) with Patricia Guerrero, advised by Dr. Alexander Co Abad: Development of a Wearable Haptic Glove for Augmented Reality-Enhanced Escape Rooms.",
      "The problem is blunt. A room-scale AR prop has a collider and a mesh, and nothing for the skin. We wanted force, a pin-array, vibration, and heat or cold on the hands, timed to an escape-room beat, while Apple Vision Pro did the tracking.",
    ],
    method: [
      "Unity XR Hands places collision spheres on tracked fingertips. On enter or exit with objects tagged Solid, Obstacle, or hands, C# scripts send a single ASCII byte over UDP port 1234. Hit spheres turn red. Thumb and index drive 4×4 P20 pin maps; middle, ring, and pinky fire vibration channels; the left glove maps five coin motors.",
      "Three ESP32-WROOM-32 nodes sit on Wi-Fi as STA, each listening with AsyncUDP. The right glove shift-outs two P20 16-pin cells and talks UART onward to a Titan board for PWM vibrate strings. The left glove holds five fingertip coin motors. A third node reads an LM35 and drives a TEC through an L298N (heat and cool as opposite H-bridge directions). An earlier Bluetooth SPP path exists in the firmware history; the Vision Pro loop is UDP.",
      "The scene is a small AR furniture set: cabinet, drawer, switch, toy horse, a cold-distance cube that turns blue inside half a metre. A later Unity project in this workspace, VR Playground, is the same escape-room idea with no wearable stack — poster, keypad, safe, key, socket, confetti. Blink on a FireBeetle 2 is later ESP32 bring-up, not this protocol.",
    ],
    demo: [
      "Flash the three boards, join them to the same LAN as the headset machine, run the Unity/AVP player. You see black gloves, a dorsal DevKit, fingertip actuators, and a waist bag of wiring. In the headset, furniture collisions flash the spheres; pins rise, motors buzz, the TEC ramps.",
      "The folders still hold the evidence: P20 self-test clips, two-cell collisions in Vision Pro, third-person walk-arounds, ESCA presentation video, serial logs of room-to-cold and room-to-hot, and plots at 10 / 100 / 300 Hz. There is no written user-test codebook in the tree — the recordings are lab demos, not a scored study.",
    ],
    conclusion: [
      "The loop closed: collision in the HMD, sensation on the hand, thermal ramps you can plot. What did not: two overlapping LAN address schemes in firmware versus Unity; left-hand enter and exit sending the same byte; flex and MPU sketches never in the Unity path; ESP-NOW recommended on the poster and never built; jumper wire where the poster wanted solder.",
      "Takeaway: an end-to-end wearable haptics prototype — custom actuator protocol, multi-node Wi-Fi, XR collision maps — not a product.",
    ],
  },
  {
    slug: "usyd-mastery",
    title: "Usyd Mastery",
    lede: "Five bilingual course hubs: study guides, mind maps, Canvas knowledge graphs, quizzes, and SM-2 flashcards. Open index.html.",
    year: "2026",
    category: "study",
    featured: true,
    stack: ["HTML", "CSS", "JavaScript", "Canvas 2D", "KaTeX", "LM Studio"],
    repo: "https://github.com/ChinaHarry23/Usyd-Mastery",
    images: [{ src: "/projects/usyd-mastery.png", alt: "Usyd Mastery course portal" }],
    intro: [
      "The master’s courses did not ship a single place to actually study them. Usyd Mastery is a static portal for University of Sydney CS: no framework, no build, localStorage for everything that persists, optional chat to a local LM Studio server.",
      "The root page is five hubs for S1 2026: COMP5270, COMP5046, COMP5318, COMP9001, and COMP9123. English and Chinese throughout. A service worker caches the shell as a PWA.",
    ],
    method: [
      "Each hub follows the same spine: a homepage with Mission Control, chapter pages for study / math / mind map, then tools. Shared engines cover progress, SM-2 flashcards (Again / Hard / Good / Easy, EF floor 1.3), quiz practice and exam with a missed-question stack, a force-directed Canvas knowledge graph, and a dashboard that weights mastery across study, math, quizzes, and cards.",
      "Chat is page-text-as-context, with file attach and a vision-model slot, allowed only against a local-host list. Math is KaTeX. There is no FSRS here — that lives in LearnPDF. COMP5270 is the densest hub (12 chapters, 200 quiz items, 120 cards, 127 graph nodes). COMP9001 is still catching up: chapter 1 is a full lab; later chapters were scaffold before local 9001 files were merged back in.",
    ],
    demo: [
      "python3 -m http.server in the project folder, then open the portal. Pick a course, walk a chapter, open the quiz hub or flashcards, drag the knowledge graph. Toggle 中文. Chat only lights up if LM Studio is on localhost:1234.",
      "This site does not iframe the whole tree — it is hundreds of megabytes of course HTML. The screenshot is the command centre; the live artefact is the local server.",
    ],
    conclusion: [
      "The honest product is five bilingual static hubs with SM-2, quizzes, and graphs — not a SPA and not a hosted LMS. COMP9123 is in the portal; older README copy that listed four courses is stale.",
      "Limits: 9001 is uneven, chat depends on a local model, and course PDFs stay on disk under university rules.",
    ],
  },
  {
    slug: "aisle",
    title: "Aisle",
    lede: "A founder desk for weekly catalogue: four agent seats, a human in the loop, and a state machine that can fail a banned claim on purpose.",
    year: "2026",
    category: "software",
    featured: true,
    stack: ["Next.js", "React", "Zustand", "local LLMs"],
    images: [{ src: "/projects/aisle.png", alt: "Aisle founder desk overview" }],
    intro: [
      "Aisle is a Next.js desk for a one-person retail marketing company — seed brand Lane & Co. You write a brief. Four seats (trend, creative, compliance, media) plus a founder log move a campaign through research, posters, a revision loop, channels, and a schedule.",
      "It looks like an ads platform. It is a local campaign simulator with a real HITL state machine. ELEC5620 is the course context; the string does not appear in the repo.",
    ],
    method: [
      "Zustand persist key aisle-draft-v2. No database. Agent slots: Trend Analyser, Image Generation, Compliance Checker, Media Manager. The model catalogue lists Local, OpenAI, Anthropic, and Cursor; only the local OpenAI-compatible endpoint actually fetches. Cloud adapters throw a not-wired error and fall through to stubs.",
      "The engine does not parse model JSON into the campaign. After a backend note it runs TypeScript: buildResearch, makeCreatives, reviewCreatives, adapt. v1 copy is written to hit banned terms; v2 is the cleaned rewrite. Compliance is string match on brand.bannedTerms, then revise / escalate / pass. One automatic creative retry, then the founder. Publish numbers are formulae, not ad-network data.",
    ],
    demo: [
      "npm run dev, open localhost:3000. Overview is the founder desk: awaiting-you, agents running, scheduled, synthetic impressions. Watch a live agent run creates a Trail Parka brief and launches the bench.",
      "Walk a campaign: brief, research, studio, compliance, channels, log. Seed data includes a published campus parka and a Week 34 stone-fruit catalogue that still needs judgement. Themes: Simple, Desk, Dev.",
    ],
    conclusion: [
      "Show the banned-claim loop, not a claim that GPT is filling the catalogue. The interesting design is human approval, cost visible before a local call, and compliance that can send work back.",
      "Limits: image/video providers are stubs, metrics are synthetic, and persistence is the browser.",
    ],
  },
  {
    slug: "treehub",
    title: "TreeHub",
    lede: "A local-first MVP of GitHub for ideas: trees, a genome graph, and a gardener that is honest about being mock.",
    year: "2026",
    category: "software",
    featured: true,
    stack: ["Next.js", "React Flow", "Zustand", "TanStack Query"],
    repo: "https://github.com/ChinaHarry23/Idea-graden",
    images: [{ src: "/projects/treehub.png", alt: "TreeHub idea canvas" }],
    intro: [
      "TreeHub is a clickable prototype: plant an idea, grow it as a tree, watch vines between related work. The README calls it polished, not production-ready. GitHub still uses the first-edition name Idea-graden.",
      "The UI problem is making a knowledge graph feel like a garden instead of a whiteboard — stages from seed through fruit, a genome fingerprint, bounties, a forest view.",
    ],
    method: [
      "Next.js 16, React Flow, Framer Motion, Zustand persisted as treehub-forest and treehub-auth. Planting a seed writes a real tree into that store. Genome fields are typed (purpose, domain, problems, technologies, maturity 0–100). Relatedness is a hardcoded edge list, not embeddings. Search expands a synonym table, then substring-scores titles.",
      "The AI Gardener typewrites canned markdown for sixteen action types. Auth buttons set a mock user. That is the product honesty: the graph interactions are real; the intelligence is staged.",
    ],
    demo: [
      "npm run dev. Guest through /auth. Open the AI Tutor for Children tree, the DNA viewer against the dyslexia-speech neighbour, the forest vines, Explore with robot doctor, Health Check typewriter, then plant a seed and refresh — it is still there.",
    ],
    conclusion: [
      "A local-first UX of a collaborative idea graph. Do not claim semantic search or a live gardener. Do claim a complete clickable forest that survives reload.",
    ],
  },
  {
    slug: "cloverpit",
    title: "CloverPit 2D",
    lede: "A complete Pygame fan prototype: 5×3 slots, ATM deadlines, thirty charms, a macOS DMG, and a class leaderboard.",
    year: "2026",
    category: "games",
    featured: true,
    stack: ["Python", "Pygame", "Docker", "PyInstaller"],
    repo: "https://github.com/ChinaHarry23/9001-final-project",
    images: [
      { src: "/projects/cloverpit-slots.png", alt: "CloverPit slot machine art" },
      { src: "/projects/cloverpit-atm.png", alt: "CloverPit ATM art" },
      { src: "/projects/cloverpit-store.png", alt: "CloverPit charm shop art" },
    ],
    intro: [
      "COMP9001 final: a 2D fan prototype inspired by CloverPit, not affiliated with Panik Arcade, Future Friends Games, or the official release. Four rooms — slot machine, ATM, store, door — at 1240×820 and 60 fps, with original bitmap art.",
      "An earlier pygame sketch existed in a lab folder. That copy is gone. This tree is the one with tests, packaging, and a leaderboard server.",
    ],
    method: [
      "Buy a 7-spin or 3-spin round. Emergency 3-spins cost tickets when coins are zero. The grid is 5×3 (Lemon through Seven). Score is symbol value × symbols multiplier × pattern value × patterns multiplier. Patterns include HOR, VER, DIAG, longs, zig/zag, eye, jackpot; low-value lines play first, then combos.",
      "ATM: three rounds per deadline, escalating debt, chunked deposits, interest. Miss it, or hit zero coins and tickets with rounds left, and the pit opens. From deadline 3, a 666 roll can wipe the round, then held coins. Thirty Lucky Charms, restocks of four unique cards, red-button charges, phone upgrades after a clear. pytest plus unittest.",
      "packaging/build_macos_dmg.sh builds CloverPit2D.app / DMG. leaderboard_server.py (Docker, Render blueprint) takes name, coins + deposited, deadline. Local best sits in ~/.cloverpit2d/high_score.json.",
    ],
    demo: [
      "pip install -r requirements.txt && python3 main.py. Walk four rooms, land a scored spin, deposit, buy a charm, press B, take a phone upgrade, open records. On a classmate Mac: DMG, drag to Applications, right-click Open if unsigned.",
    ],
    conclusion: [
      "This is the finished game in the workspace: rules, art, tests, a class ranking, a real macOS package. Caption it as a fan prototype. Unfinished engine templates (Unity HDRP Mario stubs, a Metal cube with undrawn platforms) stayed on disk and off this inventory.",
    ],
  },
  {
    slug: "beadworks",
    title: "BeadWorks",
    lede: "Photograph a fuse-bead chart, detect the grid, place colours, and watch stock, used, and remaining on the LAN.",
    year: "2026",
    category: "software",
    featured: true,
    stack: ["Python", "FastAPI", "Pillow", "SQLite"],
    images: [
      { src: "/projects/beads-heart.png", alt: "Pixel heart used as a bead blueprint" },
      { src: "/projects/beads-grid.png", alt: "Detected bead grid from a scanned pattern" },
    ],
    intro: [
      "A LAN app for the table next to the pegboard. Upload a pattern; the scanner estimates cell size and clusters colours in CIE Lab; the workspace highlights one colour at a time; inventory is no longer a spreadsheet.",
      "An earlier Node sketch (FuseBeads) downsampled photos and optionally stylized them. That tree is gone. BeadWorks is the keeper: it accounts for beads you actually own.",
    ],
    method: [
      "FastAPI + uvicorn, SQLite, Pillow/numpy. python run.py --port 8080 --host 0.0.0.0 prints every LAN URL. Frontend is static ES modules, no CDN. CORS is open and there is no auth — that is the LAN assumption.",
      "Scanner: alpha under 128 is empty; 1px = 1 bead if both sides ≤ max_grid; otherwise period detection on colour-change boundaries. Cell colour is median RGB of the centre. Clusters merge under Lab distance 6; auto-map to inventory under 12. Palettes: Perler 64, Hama 50, Artkal 50. Place/unplace writes a transaction log. remaining = stock − used, and the UI warns instead of blocking when you go negative.",
    ],
    demo: [
      "Install requirements, run run.py, open the printed URL on a phone. Upload a pixel PNG, tap a legend colour, paint, watch remaining drop. Inventory can import a palette. Stats lists the last hundred transactions. tests/make_samples.py builds the 11×10 heart used here.",
    ],
    conclusion: [
      "A finished hobby tool: scanner, accounting rules, tests, a phone-sized workspace. Not a cloud product. Not the old Node stylizer.",
    ],
  },
  {
    slug: "bossify",
    title: "Bossify",
    lede: "A local flight recorder for agentic coding: import sessions, score ROI, optionally judge with a local LLM, name the black holes.",
    year: "2026",
    category: "software",
    featured: true,
    stack: ["Python", "FastAPI", "SQLite", "LM Studio"],
    repo: "https://github.com/ChinaHarry23/bossify-with-claude",
    images: [],
    intro: [
      "token-roi / bossify-with-claude: treat Claude Code (and Codex, Cursor, Aider) token spend as capital allocation. Point it at ~/.claude/projects/, get a boss dashboard on 127.0.0.1:8787. MIT, bilingual, local-first. Author @chinaharry.",
      "The joke in the README is the spec: vibe-coding still has a unit cost. Nested lab copies of this repo are gone; this is the GitHub tree.",
    ],
    method: [
      "Append-only JSONL under data/raw_events, rebuildable SQLite roi.db, derived MEMORY.md. Import from Claude Code, Codex, Cursor’s state.vscdb (token fields there are often zero), Aider, or OpenAI JSONL. Live capture via Claude Code hooks or an InstrumentedClient wrapper.",
      "ROI is a documented formula: durable / reuse / outcome over cost, with optional LLM weights. Classes HIGH_VALUE, TRANSIENT_VALUE, LOW_VALUE, WASTED. A local judge (LM Studio or Ollama) returns constrained JSON — meaningful value, code produced, wasteful patterns — and can override the math. Retrieval mixes cosine and a BM25-ish term score. Dashboard is FastAPI + Jinja + ECharts, no CDN.",
    ],
    demo: [
      "pip install -e '.[dashboard,embeddings]', then token-roi init → import claude-code → score → judge → dashboard. Tabs: Overview, People, Projects, Technical detail. Locale switch EN / 中文. Click a row for USD and wasteful_patterns. The 47-minute / 1.8M-token story in the README is illustrative copy, not a checked-in session.",
    ],
    conclusion: [
      "A working local auditor with importers, a classifier you can explain, and a dashboard that names sessions. It does not upload prompts to a cloud judge. Garbage in if the source IDE did not record usage.",
    ],
  },
  {
    slug: "learnpdf",
    title: "LearnPDF",
    lede: "Native macOS notebook: import a PDF or deck, get notes, FSRS cards, a quiz kit, and a tutor pane — keys in Keychain.",
    year: "2026",
    category: "study",
    featured: true,
    stack: ["Swift", "SwiftUI", "SQLite", "PDFKit", "FSRS"],
    images: [],
    intro: [
      "A RemNote-shaped three-pane Mac app (min 1500×860): library, reader, learning tools. Drop in PDF, text, markdown, RTF, DOCX, PPTX, XLSX. Formerly nicknamed Godmode in a playground folder; the target is LearnPDF.",
      "It is not a website. Storage is SQLite and an Obsidian-friendly wiki under Application Support.",
    ],
    method: [
      "PDFKit and OOXML unzip extract text locally. Non-PDFs are paged for the reader. Nested note blocks; == and >> in a block mint a flashcard. Highlights, area highlights, ink.",
      "LLMClient.generateLearningKit asks a model for JSON (cards + MCQs). Providers: OpenAI, Anthropic, LM Studio. Keys in Keychain. If the backend is down, HeuristicLearningGenerator builds an extractive kit from term frequency.",
      "Practice uses a real FSRS scheduler (stability, difficulty, retrievability, Again/Hard/Good/Easy). The simpler Flashcards sheet rates Good only — the Practice tab is the one that is honest FSRS.",
    ],
    demo: [
      "./scripts/build_app.sh, then open .build/LearnPDF.app. Import a PDF, generate a kit if a model is configured, rate cards in Practice. No iframe on this site.",
    ],
    conclusion: [
      "A local reader plus FSRS plus optional LLM kits. Do not describe it as hosted. Do describe the Keychain and the fallback generator.",
    ],
  },
  {
    slug: "dgl",
    title: "DGL",
    lede: "A local security training studio that looks like a fashion house: twelve rooms, three seasons, web and Android. Not a product.",
    year: "2026",
    category: "security",
    featured: true,
    stack: ["Node", "SQLite", "Kotlin", "Jetpack Compose"],
    images: [
      { src: "/projects/dgl-home.png", alt: "DGL atelier home screen" },
      { src: "/projects/dgl-login.png", alt: "DGL call sheet login" },
      { src: "/projects/dgl-seasons.png", alt: "DGL season selector" },
    ],
    intro: [
      "Damn Good Looking is a cousin of DVWA / DIVA, not a reskin. You sign a call sheet, walk twelve rooms, and switch a difficulty called a season: Raw, Cut, Finish. Beauty is not a control — that is part of the lesson.",
      "It concatenates SQL, renders markup, reads files, and talks to a shell on purpose. This page does not document attacks. Do not publish the package, bind the web server to a public interface, or sideload the Android build onto someone else’s phone.",
    ],
    method: [
      "Web: Node 22, SQLite, npm start on 127.0.0.1:4141. Android: Compose, same house with device-shaped doors (exported activities, a provider, a deep link, a WebView). Director / Intern / Guest on the call sheet. Intern is the everyday walk. Director can recut the database.",
      "Rooms are features, not a walkthrough: Ledger search, Guestbook notes, Marquee announcements, Vault invoices, Courier payout account, Darkroom uploads, Archive lookbooks, Concierge ping, Lookbook with a signed slip, Mannequin place-cards, Mirror fragment, Fitting profile. Study pattern: the same honest action on Raw, then Cut, then Finish.",
    ],
    demo: [
      "On your machine only: npm start, intern + Raw, home, Ledger search for a name printed on the floor, repeat two rooms on Cut and Finish. Android: Android Studio, emulator you own, same walk. Screenshots here are the atelier UI, not a payload.",
    ],
    conclusion: [
      "A pedagogy piece about how pretty software can still be a training studio. Keep it local. Keep exploits out of the README and off this site.",
    ],
  },
  {
    slug: "quant-atlas",
    title: "Quant Atlas",
    lede: "A static map of quant: four desks, six beginner modules, a diagnostic, and an edge-versus-friction simulator.",
    year: "2026",
    category: "study",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "/demos/quant-atlas/index.html",
    images: [{ src: "/projects/quant-atlas.png", alt: "Quant Atlas study site" }],
    intro: [
      "Three files. The question was: if you are not already on a desk, what do you study first? Intro, beginner path, practice, then primary sources — top-down, not a MOOC clone.",
    ],
    method: [
      "Four tracks in script.js: systematic equities (default), market making / HFT, vol / derivatives, crypto. Each has a 2026 stack, weekly cadence, and master pillars.",
      "Beginner is six modules (map, probability, markets, data, validation, specialization). Practice is a five-question diagnostic plus a 126-day canvas sim: hit rate, win/loss bps, bets per day, cost, regime tilt, seeded mulberry32. It reports edge per trade, Sharpe, CAGR, max drawdown. It is not a backtester. Progress in localStorage.",
    ],
    demo: [
      "The iframe on this page is the whole product — same files as Projects/Quant-Atlas. Pick a desk, walk intro → beginner → lab → master, run the sim.",
    ],
    conclusion: [
      "Honest as a curriculum map and a toy expectancy lab. Not a trading system. Not a claim about 2026 papers beyond the listed primary sources.",
    ],
  },
  {
    slug: "algo",
    title: "Algo",
    lede: "CLRS as 62 playable React lessons — plus a one-file companion visualizer you can run in this tab.",
    year: "2026",
    category: "study",
    stack: ["React", "TypeScript", "Vite", "Tailwind"],
    live: "/demos/algo-academy/index.html",
    images: [
      { src: "/projects/algo.png", alt: "Algo visual curriculum home" },
      { src: "/projects/algo-academy.png", alt: "Algo Academy one-page companion" },
    ],
    intro: [
      "A Vite + React 19 app named algo: Introduction to Algorithms, 3rd edition, rebuilt as visual lessons. Intuition first, formalism second. XP, stars, and streak live in Zustand (algolab-store-v1).",
      "A second artefact, Algo Academy, is a single HTML file with Tailwind CDN and a shorter topic list. That file is the live iframe. The 62-lesson tree is the real curriculum; it needs npm run dev.",
    ],
    method: [
      "Seven CLRS parts, 62 lessons, none marked comingSoon: foundations through selected topics (FFT, RSA, KMP, max-flow, NP, approximation). LessonPage lazy-loads every slug. Two skins: stepped visualizers (Big-O, binary search, insertion/bubble sort) and ConceptLesson (hook, sections, pseudocode, quiz). No SRS.",
      "Academy is four levels × five topics, twelve of them interactive, the rest stubs. Progress keys algo.done / algo.active. It is not the Vite app and not CLRS-complete.",
    ],
    demo: [
      "Below: Academy in the browser. For the CLRS app: cd Projects/Algo && npm run dev — localhost:5173, start with Big-O, finish a lesson, confetti, reload, XP still there.",
    ],
    conclusion: [
      "Two artefacts, one card. The iframe is the companion. The Vite tree is the textbook. A duplicate one-file folder next to Algo was removed from disk because this site already hosts that HTML.",
    ],
  },
  {
    slug: "reverse-ai-ad",
    title: "Reverse AI ads",
    lede: "A preregistered local audit of product rankings in a small model — not a claim that any vendor poisoned ChatGPT.",
    year: "2026",
    category: "research",
    stack: ["Python", "Ollama", "BM25 RAG"],
    images: [],
    intro: [
      "Working title in the charter: auditing product recommendations in generative AI — provenance, visibility, manipulation resilience. Case study: US English, USD, gaming mice. You cannot recover a hosted model’s private reasoning. You can log what a local model says, scrape the public pages that occupy the same queries, and test causality in a private RAG box with fictional brands.",
    ],
    method: [
      "Preregistered 27 Aug 2026, before scoring. Observational bank P01–P20 × five reps on llama3.1:8b via Ollama, no web. A fact table of ~19 SKUs. Web roundups fetched into research/data/sources/raw/.",
      "Causal testbed: BM25 over eight matched-spec fictional mice (Helix Ember, Noxen Pulse, …). Conditions: equal baseline, volume ×5, independent-positive, affiliate cluster, manufacturer volume, position rank 1 vs 8. The generator may use only provided sources. No public-web writes, no live-service injection.",
    ],
    demo: [
      "There is no product UI. Open the protocol, the prereg, MORNING_BRIEFING.md, and the jsonl. Overnight 27 Aug 2026: 100 observational + 280 causal on llama3.1:8b. Hosted ChatGPT/Gemini APIs were not called.",
      "Recorded locally: model-only Top-3 concentrated on a few household names (training priors, not search). In the private RAG, affiliate-cluster and volume treatments moved fictional-brand Top-1 versus baseline. That is evidence about this testbed, not about Logitech, Razer, or a production assistant.",
    ],
    conclusion: [
      "A preregistered local audit. Show the charter and the fictional-brand deltas. Do not present H4–H6 as proof that a vendor poisoned a commercial model.",
    ],
  },
  {
    slug: "wildlife-path-light",
    title: "Wildlife-first path light",
    lede: "A COMP5047 proposal: darkness as habitat, a pedestrian as the exception. No firmware in the folder yet.",
    year: "2026",
    category: "hardware",
    stack: ["ESP32-S3 (proposed)", "mmWave", "ultrasonic mic"],
    images: [],
    intro: [
      "COMP4447 / COMP5047 brief: Wildlife-First Adaptive Path Light. Always-on cool-white path lighting is habitat loss for insectivorous microbats on a Sydney bushland-edge path. Darkness is the default; light is the exception for a walker.",
      "The draft names Xinlong Bao on the team sheet. Other rows are empty. The folder is the proposal markdown, not a build.",
    ],
    method: [
      "Specified, not implemented here: ESP32-S3 rule machine, lux sensor, mmWave presence, a MEMS mic with a 20–50 kHz envelope into ADC (TinyML listed as an upgrade), PC-amber / 2200 K LED on MOSFET PWM, servo louver, 18650. States: night empty → off; person → fade up, path-only; bat-band while occupied → dim, never below a safety floor; person leaves → fade down.",
    ],
    demo: [
      "Nothing to flash. Intended later: dusk campus, then park with permission; a live demo may use recorded playback so a bat is not required.",
    ],
    conclusion: [
      "A more-than-human spec: default-off, spectrum, direction, duration. It is design work. It is not a shipped fixture.",
    ],
  },
];

export const githubAlso = [
  {
    title: "brainstorm",
    href: "https://github.com/ChinaHarry23/brainstorm",
    note: "Claude Code on a phone",
  },
  {
    title: "OJT",
    href: "https://github.com/ChinaHarry23/OJT",
    note: "On-the-job training outputs (Kotlin)",
  },
  {
    title: "IEEE HNICEM Android app",
    href: "https://github.com/ChinaHarry23/IEEE-HNICEM-Andriod-App",
    note: "Android worker app, 2023",
  },
  {
    title: "Course notes",
    href: "https://github.com/ChinaHarry23/Master-Obsidian-note",
    note: "Obsidian vault from the master’s",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const featured = projects.filter((p) => p.featured);
