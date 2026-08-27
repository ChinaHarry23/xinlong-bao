const storageKey = "quant-atlas-progress-v1";

const trackData = {
  systematic: {
    label: "Systematic Equities",
    tagline: "Best first track if you want the highest learning surface area per month.",
    summary:
      "You get exposure to research design, factor thinking, portfolio construction, risk, and execution without immediately needing nanosecond systems work or heavy stochastic calculus.",
    rationale:
      "It teaches the full quant loop in the cleanest, broadest way.",
    danger: "Mistaking feature engineering for real edge.",
    metrics: [
      { label: "Math load", value: "Medium-high" },
      { label: "Coding load", value: "High" },
      { label: "Latency pressure", value: "Low" },
      { label: "Best for", value: "General entry" }
    ],
    moment:
      "The frontier move is AI speeding up hypothesis generation, data wrangling, and research ops, while alpha still depends on neutralization, validation, and portfolio construction.",
    stack: [
      {
        layer: "Research shell",
        description:
          "Use Python as the control plane with fast iteration and clean tooling.",
        tools: ["Python", "uv", "Ruff", "pytest", "Jupyter"]
      },
      {
        layer: "Data engine",
        description:
          "Use columnar files and query engines that keep iteration fast on local machines.",
        tools: ["Parquet", "Arrow", "Polars", "DuckDB", "OpenBB"]
      },
      {
        layer: "Model layer",
        description:
          "Strong baselines first, then deep models where structure justifies them.",
        tools: ["LightGBM", "XGBoost", "PyTorch 2", "JAX"]
      },
      {
        layer: "Simulation",
        description:
          "Vectorized backtests first; RL only when the problem is genuinely sequential.",
        tools: ["vectorbt", "NumPy", "RLlib", "Brax"]
      },
      {
        layer: "Scale-up infra",
        description:
          "When local analysis breaks, move to open lakehouse and real-time analytics patterns.",
        tools: ["Iceberg", "ClickHouse", "QuestDB", "Redpanda"]
      },
      {
        layer: "AI layer",
        description:
          "Use models to read filings, summarize calls, generate research code, and operate retrieval workflows.",
        tools: ["vLLM", "RAG", "LLM agents", "Embeddings", "Feast"]
      }
    ],
    cadenceTitle: "Systematic equities cadence",
    cadence: [
      "2 sessions per week on factors, feature leakage, and neutralization.",
      "2 sessions per week building data pipelines and backtests in Python.",
      "1 session per week reading papers or desk writeups and rewriting the idea in your own framework.",
      "1 session per week on portfolio construction, turnover, and transaction costs."
    ],
    focusByModule: {
      map: "Learn signal, risk, and portfolio as one machine.",
      probability: "Expected value and false discovery matter more than fancy ML early.",
      markets: "Cross-sectional behavior, sector structure, and rebalance mechanics matter.",
      data: "Most beginner errors are data problems disguised as modeling problems.",
      validation: "Walk-forward testing and leakage control are non-negotiable.",
      specialization: "Later, you can branch into alt-data, stat arb, or ML-heavy research."
    },
    masterPillars: [
      {
        title: "Research discipline",
        body: "Idea generation, neutralization, regime slicing, and failure analysis."
      },
      {
        title: "Portfolio engineering",
        body: "Sizing, diversification, turnover control, and risk budgeting."
      },
      {
        title: "Production research stack",
        body: "Columnar data, feature stores, reproducible backtests, and inference pipelines."
      },
      {
        title: "AI-native workflow",
        body: "Copilots for data parsing and code scaffolding, with human ownership of risk."
      }
    ]
  },
  microstructure: {
    label: "Market Making / HFT",
    tagline: "Hardest route, highest systems pressure, smallest tolerance for hand-waving.",
    summary:
      "This path is about queue position, adverse selection, exchange rules, inventory control, and latency engineering. The research loop still matters, but execution physics dominates.",
    rationale:
      "If microstructure fascinates you, no other track scratches the same itch.",
    danger: "Thinking a good predictor beats fees, latency, and queue mechanics.",
    metrics: [
      { label: "Math load", value: "High" },
      { label: "Coding load", value: "Very high" },
      { label: "Latency pressure", value: "Extreme" },
      { label: "Best for", value: "Exchange nerds" }
    ],
    moment:
      "The frontier move is not LLMs doing HFT. It is better simulation, richer microstructure modeling, and AI helping research and operations around the strategy loop.",
    stack: [
      {
        layer: "Research shell",
        description:
          "Prototype in Python fast, but expect the path to narrow into lower-latency languages.",
        tools: ["Python", "NumPy", "Polars", "Jupyter", "pytest"]
      },
      {
        layer: "Time-series store",
        description:
          "You need fast ingestion and query over dense event streams.",
        tools: ["QuestDB", "ClickHouse", "Parquet", "Arrow", "DuckDB"]
      },
      {
        layer: "Streaming",
        description:
          "Event-driven systems matter because everything is about state change and timing.",
        tools: ["Redpanda", "Kafka API", "Schema Registry", "gRPC"]
      },
      {
        layer: "Model layer",
        description:
          "Sequence models and learned microstructure features sit on top of handcrafted market logic.",
        tools: ["PyTorch 2", "JAX", "LOB models", "Triton", "Torch compile"]
      },
      {
        layer: "Execution plane",
        description:
          "This is where Python stops being enough.",
        tools: ["C++", "Rust", "Linux perf", "DPDK", "Kernel tuning"]
      },
      {
        layer: "Simulation",
        description:
          "Queue-aware replay and inventory control are more important than pretty dashboards.",
        tools: ["Event replay", "RLlib", "Brax", "Custom simulators"]
      }
    ],
    cadenceTitle: "HFT cadence",
    cadence: [
      "2 sessions per week on order books, queue dynamics, and exchange mechanics.",
      "2 sessions per week on systems: memory, networking, latency, and profiling.",
      "1 session per week simulating market making or execution control problems.",
      "1 session per week auditing where prediction fails once adverse selection shows up."
    ],
    focusByModule: {
      map: "Think in queues, fills, inventory, and toxicity.",
      probability: "You need distributions of fills and losses, not only means.",
      markets: "Microstructure is the market here, not a side topic.",
      data: "Timestamp quality and event ordering become first-class problems.",
      validation: "Replay quality and exchange realism matter more than headline Sharpe.",
      specialization: "Move into C++ or Rust earlier than other tracks."
    },
    masterPillars: [
      {
        title: "Microstructure fluency",
        body: "Queue position, adverse selection, spread capture, and inventory penalties."
      },
      {
        title: "Low-latency engineering",
        body: "The edge often dies in systems friction before it reaches the market."
      },
      {
        title: "Exchange-specific realism",
        body: "Matching rules, fee tiers, and venue differences can dominate signal quality."
      },
      {
        title: "Simulation quality",
        body: "Bad market replay creates fake PnL faster than bad modeling."
      }
    ]
  },
  derivatives: {
    label: "Vol / Derivatives",
    tagline: "The route where modeling, intuition, and math have to meet cleanly.",
    summary:
      "This path leans harder on stochastic processes, surface dynamics, calibration, and risk decomposition. Quant here means understanding instruments deeply, not only fitting models.",
    rationale:
      "It is the cleanest home if you are drawn to pricing, convexity, and risk transfer.",
    danger: "Learning formulas without learning the market regime they belong to.",
    metrics: [
      { label: "Math load", value: "Very high" },
      { label: "Coding load", value: "High" },
      { label: "Latency pressure", value: "Low-medium" },
      { label: "Best for", value: "Pricing minds" }
    ],
    moment:
      "The frontier move is faster calibration, simulation, and risk tooling with GPU-native compute, while LLMs help compress documentation, model comparison, and structured research.",
    stack: [
      {
        layer: "Research shell",
        description:
          "Use Python for analysis and prototyping while staying close to numerical libraries.",
        tools: ["Python", "NumPy", "SciPy", "JAX", "pytest"]
      },
      {
        layer: "Data + surfaces",
        description:
          "You need robust curve, surface, and scenario data management.",
        tools: ["Parquet", "DuckDB", "Polars", "Arrow", "OpenBB"]
      },
      {
        layer: "Numerics",
        description:
          "Automatic differentiation and compilation matter for calibration and simulation speed.",
        tools: ["JAX", "PyTorch 2", "NumPyro", "CUDA", "Triton"]
      },
      {
        layer: "Risk stack",
        description:
          "Scenario engines and decomposition tools are core, not an afterthought.",
        tools: ["Monte Carlo", "PDE/FDM", "Adjoints", "Stress tests"]
      },
      {
        layer: "AI layer",
        description:
          "Use AI to organize research, documentation, and unstructured market context.",
        tools: ["RAG", "vLLM", "Embeddings", "Research agents"]
      },
      {
        layer: "Production scale",
        description:
          "Risk engines need reproducibility, not just raw speed.",
        tools: ["ClickHouse", "Iceberg", "Feast", "Orchestration"]
      }
    ],
    cadenceTitle: "Derivatives cadence",
    cadence: [
      "2 sessions per week on options intuition, payoff geometry, and surface language.",
      "2 sessions per week on probability, stochastic processes, and numerical methods.",
      "1 session per week coding calibration or pricing engines.",
      "1 session per week on desk reality: hedging, inventory, and scenario risk."
    ],
    focusByModule: {
      map: "Price, hedge, and risk must be learned together.",
      probability: "You cannot dodge distributions, diffusion intuition, or conditioning.",
      markets: "Surface behavior only makes sense inside real instrument conventions.",
      data: "Surface cleanliness and interpolation choices can contaminate everything.",
      validation: "Calibration fit is not the same thing as useful desk behavior.",
      specialization: "Expect the deepest math runway of the four tracks."
    },
    masterPillars: [
      {
        title: "Instrument fluency",
        body: "Options, exotics, surface intuition, and desk-specific quoting logic."
      },
      {
        title: "Numerical rigor",
        body: "Calibration, simulation, and sensitivity analysis without hidden instability."
      },
      {
        title: "Risk decomposition",
        body: "Greeks, scenario analysis, and portfolio interactions under stress."
      },
      {
        title: "Model skepticism",
        body: "Know what your model assumes before you trust a clean fit."
      }
    ]
  },
  crypto: {
    label: "Crypto / On-chain",
    tagline: "Fast-moving, noisy, structurally different, and unusually data-rich.",
    summary:
      "Crypto gives you 24/7 markets, exchange fragmentation, on-chain telemetry, and a culture that adopts agentic tooling early. It is messy, which is both the opportunity and the trap.",
    rationale:
      "You can learn modern tooling fast because the data and experimentation culture are open.",
    danger: "Mistaking structural novelty for durable edge.",
    metrics: [
      { label: "Math load", value: "Medium-high" },
      { label: "Coding load", value: "High" },
      { label: "Latency pressure", value: "Medium" },
      { label: "Best for", value: "Experimenters" }
    ],
    moment:
      "The frontier move is combining on-chain, social, and market data with AI-native research and automation, while still respecting old truths about slippage, liquidity, and regime change.",
    stack: [
      {
        layer: "Research shell",
        description:
          "Python remains the fastest way to move through data, notebooks, and prototypes.",
        tools: ["Python", "Polars", "DuckDB", "uv", "Jupyter"]
      },
      {
        layer: "Open data plane",
        description:
          "You can combine market, on-chain, and text data in one graph quickly.",
        tools: ["Parquet", "Arrow", "OpenBB", "Dune-style exports", "APIs"]
      },
      {
        layer: "Streaming + infra",
        description:
          "A 24/7 market rewards event-driven, real-time systems.",
        tools: ["Redpanda", "ClickHouse", "QuestDB", "Feature stores"]
      },
      {
        layer: "Model layer",
        description:
          "Strong baselines win often, but sequence, graph, and multimodal methods show up earlier here.",
        tools: ["LightGBM", "PyTorch 2", "JAX", "Embeddings", "Graph models"]
      },
      {
        layer: "AI layer",
        description:
          "Crypto adapts AI workflows quickly because the data is open and the pace is high.",
        tools: ["vLLM", "RAG", "Agents", "Summarizers", "Tool use"]
      },
      {
        layer: "Simulation",
        description:
          "Stress models against liquidation cascades, venue fragmentation, and bad liquidity.",
        tools: ["Event replay", "Monte Carlo", "RLlib", "Custom slippage models"]
      }
    ],
    cadenceTitle: "Crypto cadence",
    cadence: [
      "2 sessions per week on market + on-chain structure.",
      "2 sessions per week on data ingestion and feature engineering across multiple sources.",
      "1 session per week on execution, slippage, and exchange fragmentation.",
      "1 session per week on validating whether a structural story survives regime change."
    ],
    focusByModule: {
      map: "Think in multi-source state: market, chain, sentiment, and venue.",
      probability: "The noise floor is high, so inference discipline matters more.",
      markets: "Liquidity and market structure shift faster than in mature asset classes.",
      data: "The data abundance is useful only if you can align and clean it.",
      validation: "Most crypto edges are more regime-fragile than beginners expect.",
      specialization: "This is a strong playground for AI-native workflows."
    },
    masterPillars: [
      {
        title: "Cross-source synthesis",
        body: "Join price, order flow, on-chain, and text signals without fooling yourself."
      },
      {
        title: "Regime realism",
        body: "Crypto structure changes quickly; what worked three months ago may be gone."
      },
      {
        title: "Execution discipline",
        body: "Slippage, venue choice, and liquidity holes dominate many naive models."
      },
      {
        title: "Automation edge",
        body: "Crypto rewards fast iteration and AI-assisted research pipelines."
      }
    ]
  }
};

const beginnerModules = [
  {
    id: "map",
    title: "Quant map before quant math",
    question: "What machine are you actually trying to enter?",
    summary:
      "Learn the desk map: alpha research, risk, portfolio construction, execution, infrastructure, and post-trade review.",
    drills: [
      "Explain the full quant loop without using equations.",
      "Describe how an idea turns into a trade and where it can fail."
    ]
  },
  {
    id: "probability",
    title: "Expected value and uncertainty",
    question: "Can you reason in distributions instead of stories?",
    summary:
      "Learn expectancy, variance, drawdowns, conditional probability, and why a high win rate can still lose money.",
    drills: [
      "Compute expectancy for three toy strategies.",
      "Write down how cost changes the sign of edge."
    ]
  },
  {
    id: "markets",
    title: "Market structure and instruments",
    question: "How does the market actually move and clear?",
    summary:
      "Study the actual plumbing: order books, liquidity, spreads, rebalances, instrument conventions, and participant incentives.",
    drills: [
      "Explain slippage in plain English.",
      "Compare a factor rebalance trade with a market-making quote."
    ]
  },
  {
    id: "data",
    title: "Data engineering for research",
    question: "Can you make clean data faster than you can make complex models?",
    summary:
      "You need timestamps, schemas, point-in-time joins, survivorship awareness, and sane storage before you need flashy models.",
    drills: [
      "Build a tiny parquet-to-DuckDB research notebook.",
      "List three ways leakage sneaks into a dataset."
    ]
  },
  {
    id: "validation",
    title: "Backtesting and skepticism",
    question: "Do you know how fake alpha gets manufactured?",
    summary:
      "Learn walk-forward validation, turnover, transaction costs, capacity, lookahead bias, data snooping, and regime slicing.",
    drills: [
      "Take a toy backtest and name five reasons it may be lying.",
      "Explain why a beautiful equity curve can still be untradable."
    ]
  },
  {
    id: "specialization",
    title: "Choose a desk and deepen",
    question: "Which game do you actually want to play?",
    summary:
      "Only after the map is real should you lean hard into HFT, vol, systematic research, or crypto. The specialization changes what math matters next.",
    drills: [
      "Write a one-page memo on your chosen desk and its dominant failure modes.",
      "Name the first three technical topics you would study next."
    ]
  }
];

const glossary = [
  {
    term: "Alpha",
    body: "A repeatable source of return after accounting for costs, risk, and implementation. A backtest line by itself is not alpha."
  },
  {
    term: "Leakage",
    body: "When your model is trained using information that would not have been available at decision time."
  },
  {
    term: "Turnover",
    body: "How aggressively your portfolio changes. High turnover can destroy attractive gross signals once costs arrive."
  },
  {
    term: "Adverse selection",
    body: "When the trades you get filled on are the ones you should least want, because someone else knows more."
  },
  {
    term: "Capacity",
    body: "How much capital a strategy can absorb before impact and slippage bend the edge out of shape."
  },
  {
    term: "Neutralization",
    body: "Removing unwanted bets such as market, sector, or size exposures so you can isolate the intended signal."
  },
  {
    term: "Sharpe",
    body: "A risk-adjusted return measure, useful but easy to abuse when the backtest design is weak."
  },
  {
    term: "Regime",
    body: "A market environment with distinct structure: trend, volatility, liquidity, correlation, or participant behavior."
  }
];

const quizQuestions = [
  {
    prompt: "The closest ‘ChatGPT moment’ in quant is:",
    options: [
      "A fully autonomous fund with no human risk ownership",
      "AI compressing research, coding, and unstructured-data workflows while humans still own the edge and risk",
      "Replacing probability with prompt engineering"
    ],
    correct: 1,
    explain:
      "The frontier shift is AI-native workflow compression, not a proven replacement for risk discipline or market understanding."
  },
  {
    prompt: "Which early warning sign most strongly suggests overfitting?",
    options: [
      "The model uses fewer features than last month",
      "Performance jumps after many ad hoc filters and parameter tweaks",
      "The strategy has transaction costs"
    ],
    correct: 1,
    explain:
      "A sudden jump after repeated tweaks is exactly how fake alpha often appears."
  },
  {
    prompt: "For a modern research workflow, which data stack is the strongest default starting point?",
    options: [
      "CSV folders and spreadsheets only",
      "Parquet + Arrow + Polars + DuckDB",
      "A monolithic SQL database before you have a research question"
    ],
    correct: 1,
    explain:
      "Columnar files plus fast local query engines are currently the highest-leverage default for learning and prototyping."
  },
  {
    prompt: "Why is market microstructure important even for non-HFT quants?",
    options: [
      "Because spreads, fills, and slippage determine whether paper edge survives contact with the market",
      "Because regulators require everyone to know exchange internals",
      "Because it removes the need for statistics"
    ],
    correct: 0,
    explain:
      "Implementation details decide realized PnL, not just predicted returns."
  },
  {
    prompt: "If you are starting from zero and want the broadest entry point, the best default first specialization is usually:",
    options: [
      "Systematic equities",
      "Ultra-low-latency market making",
      "Exotic derivatives only"
    ],
    correct: 0,
    explain:
      "Systematic equities tends to expose you to the widest set of quant ideas without forcing the earliest specialization."
  }
];

const frontierThemes = [
  {
    title: "AI-native research loops",
    body:
      "Models are increasingly useful for parsing filings, transcripts, news, and alt-data sources, generating code, and compressing the hypothesis cycle."
  },
  {
    title: "GPU-native numerics",
    body:
      "Compiled PyTorch and JAX make it easier to push simulation, training, and differentiable numerics onto accelerators."
  },
  {
    title: "Microstructure-aware simulation",
    body:
      "The frontier is moving toward better replay, queue realism, and agent-based or RL-style environments, especially for execution and market making."
  },
  {
    title: "Open lakehouse research stacks",
    body:
      "Local-first columnar workflows scale upward into lakehouse and real-time analytical systems without forcing a total rewrite."
  }
];

const sources = [
  {
    label: "PyTorch `torch.compile` docs",
    type: "Official docs",
    note: "Shows the current compiled PyTorch path for faster training and inference.",
    url: "https://docs.pytorch.org/docs/stable/generated/torch.compile.html"
  },
  {
    label: "JAX sharded computation docs",
    type: "Official docs",
    note: "Useful for understanding why JAX matters for simulation and accelerator-first numerics.",
    url: "https://docs.jax.dev/en/latest/sharded-computation.html"
  },
  {
    label: "Polars LazyFrame docs",
    type: "Official docs",
    note: "Evidence for the modern local-first query pattern with optimized lazy execution.",
    url: "https://docs.pola.rs/py-polars/html/reference/lazyframe/index.html"
  },
  {
    label: "DuckDB lakehouse docs",
    type: "Official docs",
    note: "Shows the open table and Parquet-centered direction of the research data stack.",
    url: "https://duckdb.org/docs/current/lakehouse_formats.html"
  },
  {
    label: "Redpanda quickstart",
    type: "Official docs",
    note: "Useful for the event-driven streaming layer and Kafka-compatible workflows.",
    url: "https://docs.redpanda.com/current/get-started/quick-start/"
  },
  {
    label: "Feast quickstart",
    type: "Official docs",
    note: "Good reference for feature-store thinking when moving from notebooks to production.",
    url: "https://docs.feast.dev/getting-started"
  },
  {
    label: "vLLM OpenAI-compatible server",
    type: "Official docs",
    note: "Represents the modern serving layer for running local or private model workflows.",
    url: "https://docs.vllm.ai/en/latest/serving/openai_compatible_server.html"
  },
  {
    label: "OpenBB platform docs",
    type: "Official docs",
    note: "Shows the current push toward unified financial data and research workflows.",
    url: "https://docs.openbb.co/"
  },
  {
    label: "QuantEval (2026)",
    type: "Paper",
    note: "A recent benchmark showing LLMs still lag human experts in reasoning and strategy coding.",
    url: "https://arxiv.org/abs/2601.08689"
  },
  {
    label: "LLM Trading (2025)",
    type: "Paper",
    note: "Useful corrective against overclaiming: LLM traders did not robustly reproduce human market behavior.",
    url: "https://arxiv.org/abs/2502.15800"
  }
];

const state = loadState();

const heroMetrics = document.getElementById("hero-metrics");
const trackTagline = document.getElementById("track-tagline");
const trackSummary = document.getElementById("track-summary");
const trackRationale = document.getElementById("track-rationale");
const trackDanger = document.getElementById("track-danger");
const momentSummary = document.getElementById("moment-summary");
const bestTrackLabel = document.getElementById("best-track-label");
const stackGrid = document.getElementById("stack-grid");
const moduleGrid = document.getElementById("module-grid");
const cadenceTitle = document.getElementById("cadence-title");
const cadenceList = document.getElementById("cadence-list");
const glossaryGrid = document.getElementById("glossary-grid");
const quizForm = document.getElementById("quiz-form");
const quizResult = document.getElementById("quiz-result");
const masterTrackTitle = document.getElementById("master-track-title");
const deskPillars = document.getElementById("desk-pillars");
const frontierList = document.getElementById("frontier-list");
const sourcesGrid = document.getElementById("sources-grid");
const progressCopy = document.getElementById("progress-copy");
const progressFill = document.getElementById("progress-fill");
const progressSubcopy = document.getElementById("progress-subcopy");

const stageButtons = [...document.querySelectorAll(".stage-button")];
const stageSections = [...document.querySelectorAll(".stage")];
const trackButtons = [...document.querySelectorAll(".track-button")];
const jumpButtons = [...document.querySelectorAll("[data-jump]")];
const completeButtons = new Map();

renderAll();
bindEvents();

function bindEvents() {
  stageButtons.forEach((button) => {
    button.addEventListener("click", () => setStage(button.dataset.stage));
  });

  trackButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.track = button.dataset.track;
      saveState();
      renderTrack();
      renderModules();
      renderCadence();
      renderMaster();
    });
  });

  jumpButtons.forEach((button) => {
    button.addEventListener("click", () => setStage(button.dataset.jump));
  });

  document.getElementById("grade-quiz").addEventListener("click", gradeQuiz);
  document.getElementById("reset-quiz").addEventListener("click", resetQuiz);

  [
    "hit-rate",
    "avg-win",
    "avg-loss",
    "bets-per-day",
    "cost-bps",
    "regime-tilt"
  ].forEach((id) => {
    document.getElementById(id).addEventListener("input", updateSimulation);
  });

  window.addEventListener("resize", updateSimulation);
}

function renderAll() {
  renderTrack();
  renderModules();
  renderCadence();
  renderGlossary();
  renderQuiz();
  renderMaster();
  renderSources();
  updateStageUI();
  updateProgress();
  updateSimulation();
}

function renderTrack() {
  const track = trackData[state.track];

  trackButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.track === state.track);
  });

  trackTagline.textContent = track.tagline;
  trackSummary.textContent = track.summary;
  trackRationale.textContent = track.rationale;
  trackDanger.textContent = track.danger;
  momentSummary.textContent = track.moment;
  bestTrackLabel.textContent = track.label;

  heroMetrics.innerHTML = track.metrics
    .map(
      (metric) => `
        <div class="metric-box">
          <span>${metric.label}</span>
          <strong>${metric.value}</strong>
        </div>
      `
    )
    .join("");

  stackGrid.innerHTML = track.stack
    .map(
      (item) => `
        <article class="stack-item">
          <div class="section-label">${item.layer}</div>
          <h4>${item.layer}</h4>
          <p>${item.description}</p>
          <div>${item.tools.map((tool) => `<code>${tool}</code>`).join("")}</div>
        </article>
      `
    )
    .join("");
}

function renderModules() {
  const track = trackData[state.track];
  moduleGrid.innerHTML = beginnerModules
    .map((module) => {
      const completed = Boolean(state.completed[module.id]);
      return `
        <article class="module-card">
          <div class="module-topline">
            <div>
              <div class="section-label">${module.question}</div>
              <h3>${module.title}</h3>
            </div>
            <button
              class="complete-button ${completed ? "completed" : ""}"
              type="button"
              data-module="${module.id}"
            >
              ${completed ? "Completed" : "Mark done"}
            </button>
          </div>
          <p>${module.summary}</p>
          <div class="track-focus">
            <strong>For ${track.label}:</strong> ${track.focusByModule[module.id]}
          </div>
          <ul>
            ${module.drills.map((drill) => `<li>${drill}</li>`).join("")}
          </ul>
        </article>
      `;
    })
    .join("");

  moduleGrid.querySelectorAll("[data-module]").forEach((button) => {
    completeButtons.set(button.dataset.module, button);
    button.addEventListener("click", () => toggleModule(button.dataset.module));
  });
}

function renderCadence() {
  const track = trackData[state.track];
  cadenceTitle.textContent = track.cadenceTitle;
  cadenceList.innerHTML = track.cadence.map((item) => `<li>${item}</li>`).join("");
}

function renderGlossary() {
  glossaryGrid.innerHTML = glossary
    .map(
      (item) => `
        <article class="glossary-card surface-card">
          <div class="section-label">Concept</div>
          <h4>${item.term}</h4>
          <p>${item.body}</p>
        </article>
      `
    )
    .join("");
}

function renderQuiz() {
  quizForm.innerHTML = quizQuestions
    .map(
      (question, index) => `
        <fieldset class="quiz-question">
          <legend>${index + 1}. ${question.prompt}</legend>
          ${question.options
            .map(
              (option, optionIndex) => `
                <label class="option-row">
                  <input
                    type="radio"
                    name="q-${index}"
                    value="${optionIndex}"
                    ${state.quizAnswers[index] === optionIndex ? "checked" : ""}
                  />
                  <span>${option}</span>
                </label>
              `
            )
            .join("")}
        </fieldset>
      `
    )
    .join("");

  quizForm.querySelectorAll("input[type='radio']").forEach((input) => {
    input.addEventListener("change", (event) => {
      const [_, rawIndex] = event.target.name.split("-");
      state.quizAnswers[Number(rawIndex)] = Number(event.target.value);
      saveState();
    });
  });

  if (state.quizScore !== null) {
    showQuizResult(state.quizScore);
  }
}

function renderMaster() {
  const track = trackData[state.track];
  masterTrackTitle.textContent = `${track.label}: what mastery actually means`;

  deskPillars.innerHTML = track.masterPillars
    .map(
      (pillar) => `
        <article class="desk-pillar">
          <span>${track.label}</span>
          <strong>${pillar.title}</strong>
          <p>${pillar.body}</p>
        </article>
      `
    )
    .join("");

  frontierList.innerHTML = frontierThemes
    .map(
      (theme) => `
        <article class="frontier-theme">
          <h4>${theme.title}</h4>
          <p>${theme.body}</p>
        </article>
      `
    )
    .join("");
}

function renderSources() {
  sourcesGrid.innerHTML = sources
    .map(
      (source) => `
        <a class="source-card" href="${source.url}" target="_blank" rel="noreferrer">
          <span>${source.type}</span>
          <strong>${source.label}</strong>
          <p>${source.note}</p>
        </a>
      `
    )
    .join("");
}

function updateStageUI() {
  stageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.stage === state.stage);
  });

  stageSections.forEach((section) => {
    section.classList.toggle("active", section.dataset.stage === state.stage);
  });
}

function setStage(stage) {
  state.stage = stage;
  saveState();
  updateStageUI();
  const active = document.querySelector(`.stage[data-stage="${stage}"]`);
  if (active) {
    active.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function toggleModule(moduleId) {
  state.completed[moduleId] = !state.completed[moduleId];
  saveState();
  renderModules();
  updateProgress();
}

function updateProgress() {
  const completedCount = beginnerModules.filter(
    (module) => state.completed[module.id]
  ).length;
  const total = beginnerModules.length;
  const percent = (completedCount / total) * 100;

  progressCopy.textContent = `${completedCount} of ${total} beginner modules completed`;
  progressSubcopy.textContent =
    completedCount === total
      ? "You’ve finished the beginner foundation. Move into the lab and specialization."
      : "Progress is saved in this browser.";
  progressFill.style.width = `${percent}%`;
}

function gradeQuiz() {
  const score = quizQuestions.reduce((total, question, index) => {
    return total + Number(state.quizAnswers[index] === question.correct);
  }, 0);
  state.quizScore = score;
  saveState();
  showQuizResult(score);
}

function resetQuiz() {
  state.quizAnswers = {};
  state.quizScore = null;
  saveState();
  renderQuiz();
}

function showQuizResult(score) {
  const feedback =
    score <= 2
      ? "You are still thinking in stories more than systems. Stay in the beginner modules and rerun the lab."
      : score <= 4
        ? "The core intuition is forming. The next jump comes from building and breaking your own toy strategies."
        : "You’re already thinking in risk, costs, and implementation. That is the right instinct.";

  const explainers = quizQuestions
    .map(
      (question, index) =>
        `<li><strong>${index + 1}.</strong> ${question.explain}</li>`
    )
    .join("");

  quizResult.className = "quiz-result ready";
  quizResult.innerHTML = `
    <p><strong>Score:</strong> ${score} / ${quizQuestions.length}</p>
    <p>${feedback}</p>
    <ul>${explainers}</ul>
  `;
}

function updateSimulation() {
  const hitRate = Number(document.getElementById("hit-rate").value) / 100;
  const avgWin = Number(document.getElementById("avg-win").value);
  const avgLoss = Number(document.getElementById("avg-loss").value);
  const betsPerDay = Number(document.getElementById("bets-per-day").value);
  const costBps = Number(document.getElementById("cost-bps").value);
  const regimeTilt = Number(document.getElementById("regime-tilt").value);

  document.getElementById("hit-rate-value").textContent = `${Math.round(
    hitRate * 100
  )}%`;
  document.getElementById("avg-win-value").textContent = `${avgWin} bps`;
  document.getElementById("avg-loss-value").textContent = `${avgLoss} bps`;
  document.getElementById("bets-per-day-value").textContent = `${betsPerDay}`;
  document.getElementById("cost-bps-value").textContent = `${costBps} bps`;
  document.getElementById("regime-tilt-value").textContent = `${
    regimeTilt >= 0 ? "+" : ""
  }${regimeTilt} bp`;

  const seed =
    hitRate * 10000 +
    avgWin * 31 +
    avgLoss * 37 +
    betsPerDay * 101 +
    costBps * 211 +
    (regimeTilt + 10) * 401;

  const rng = mulberry32(Math.floor(seed));
  const dailyReturns = [];
  let equity = 1;
  const equitySeries = [equity];
  const totalDays = 126;

  for (let day = 0; day < totalDays; day += 1) {
    let dailyBps = 0;
    for (let bet = 0; bet < betsPerDay; bet += 1) {
      const base = rng() < hitRate ? avgWin : -avgLoss;
      const noise = gaussian(rng) * 1.2;
      const pnl = base + regimeTilt + noise - costBps;
      dailyBps += pnl;
    }
    const dailyReturn = clamp(dailyBps / 10000, -0.12, 0.12);
    dailyReturns.push(dailyReturn);
    equity *= 1 + dailyReturn;
    equitySeries.push(equity);
  }

  const edgePerTrade = hitRate * avgWin - (1 - hitRate) * avgLoss - costBps + regimeTilt;
  const sharpe = annualizedSharpe(dailyReturns);
  const cagr = Math.pow(equitySeries[equitySeries.length - 1], 252 / totalDays) - 1;
  const maxDrawdown = calculateMaxDrawdown(equitySeries);

  document.getElementById("sim-metrics").innerHTML = `
    <div class="sim-metric">
      <span>Edge per trade</span>
      <strong>${edgePerTrade.toFixed(2)} bps</strong>
    </div>
    <div class="sim-metric">
      <span>Annualized Sharpe</span>
      <strong>${sharpe.toFixed(2)}</strong>
    </div>
    <div class="sim-metric">
      <span>Simulated CAGR</span>
      <strong>${formatPercent(cagr)}</strong>
    </div>
    <div class="sim-metric">
      <span>Max drawdown</span>
      <strong>${formatPercent(maxDrawdown)}</strong>
    </div>
  `;

  drawChart(equitySeries);
}

function drawChart(series) {
  const canvas = document.getElementById("equity-chart");
  const rect = canvas.getBoundingClientRect();
  const scale = window.devicePixelRatio || 1;
  const width = Math.max(320, Math.floor(rect.width * scale));
  const height = Math.floor(260 * scale);
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, width, height);

  const padding = 28 * scale;
  const innerWidth = width - padding * 2;
  const innerHeight = height - padding * 2;
  const min = Math.min(...series);
  const max = Math.max(...series);
  const range = Math.max(max - min, 0.0001);

  ctx.strokeStyle = "rgba(30, 29, 26, 0.08)";
  ctx.lineWidth = 1 * scale;
  for (let i = 0; i < 4; i += 1) {
    const y = padding + (innerHeight / 3) * i;
    ctx.beginPath();
    ctx.moveTo(padding, y);
    ctx.lineTo(width - padding, y);
    ctx.stroke();
  }

  const gradient = ctx.createLinearGradient(0, padding, 0, height - padding);
  gradient.addColorStop(0, "rgba(15, 118, 110, 0.45)");
  gradient.addColorStop(1, "rgba(15, 118, 110, 0.03)");

  ctx.beginPath();
  series.forEach((value, index) => {
    const x = padding + (index / (series.length - 1)) * innerWidth;
    const y = padding + innerHeight - ((value - min) / range) * innerHeight;
    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });

  const lastX = padding + innerWidth;
  ctx.lineTo(lastX, height - padding);
  ctx.lineTo(padding, height - padding);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();

  ctx.beginPath();
  series.forEach((value, index) => {
    const x = padding + (index / (series.length - 1)) * innerWidth;
    const y = padding + innerHeight - ((value - min) / range) * innerHeight;
    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });
  ctx.strokeStyle = "#0f766e";
  ctx.lineWidth = 3 * scale;
  ctx.stroke();

  ctx.fillStyle = "#1f1d1a";
  ctx.font = `${12 * scale}px "IBM Plex Mono", monospace`;
  ctx.fillText(`Start 1.00x`, padding, padding - 8 * scale);
  ctx.fillText(
    `End ${series[series.length - 1].toFixed(2)}x`,
    width - padding - 110 * scale,
    padding - 8 * scale
  );
}

function loadState() {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) {
      return {
        track: "systematic",
        stage: "intro",
        completed: {},
        quizAnswers: {},
        quizScore: null
      };
    }
    return { ...JSON.parse(raw) };
  } catch {
    return {
      track: "systematic",
      stage: "intro",
      completed: {},
      quizAnswers: {},
      quizScore: null
    };
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function calculateMaxDrawdown(series) {
  let peak = series[0];
  let maxDrawdown = 0;

  series.forEach((value) => {
    peak = Math.max(peak, value);
    maxDrawdown = Math.min(maxDrawdown, value / peak - 1);
  });

  return maxDrawdown;
}

function annualizedSharpe(returns) {
  const mean = returns.reduce((sum, value) => sum + value, 0) / returns.length;
  const variance =
    returns.reduce((sum, value) => sum + (value - mean) ** 2, 0) /
    Math.max(returns.length - 1, 1);
  const std = Math.sqrt(variance);
  if (std === 0) {
    return 0;
  }
  return (mean / std) * Math.sqrt(252);
}

function formatPercent(value) {
  return `${(value * 100).toFixed(1)}%`;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function mulberry32(seed) {
  let t = seed >>> 0;
  return function rng() {
    t += 0x6d2b79f5;
    let next = t;
    next = Math.imul(next ^ (next >>> 15), next | 1);
    next ^= next + Math.imul(next ^ (next >>> 7), next | 61);
    return ((next ^ (next >>> 14)) >>> 0) / 4294967296;
  };
}

function gaussian(rng) {
  let u = 0;
  let v = 0;
  while (u === 0) {
    u = rng();
  }
  while (v === 0) {
    v = rng();
  }
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}
