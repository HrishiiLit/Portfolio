export const projects = [
  {
    slug: "abuela",
    name: "Abuela",
    category: "Web application · Contribution",
    summary:
      "A recipe-sharing platform where every recipe carries its story. I contributed fixes to this team project, which is maintained upstream.",
    cardSummary:
      "Recipe-sharing platform built around the stories behind each dish — my contribution: recipe-creation and bug fixes merged upstream (team project, fork).",
    status: { label: "Contribution · fork", tone: "neutral" },
    ownership: "Contributor to a fork (original author: Tanvi Naik)",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Auth.js"],
    repo: "https://github.com/HrishiiLit/abuela",
    demo: "https://abuela-psi.vercel.app",
    preview: {
      src: "/projects/abuela.svg",
      alt: "Abuela landing page with the tagline every recipe has a story",
    },
    problem:
      "Family recipes live in scattered notebooks and message threads. Abuela preserves each recipe together with the narrative behind the dish.",
    users: "Home cooks who want to share and discover recipes with their stories.",
    features: [
      "Public recipe browsing, detail pages, and search.",
      "Credentials authentication with JWT sessions (Auth.js v5).",
      "Authenticated dashboard with recipe creation.",
      "PostgreSQL persistence through Prisma, with seed data for sample recipes.",
    ],
    role:
      "Contributor – 3 of 24 commits on the fork. Fixed the recipe-creation flow (merged upstream via pull request), added an environment configuration example, and resolved minor bugs. Primary authorship belongs to Tanvi Naik.",
    decisions: [
      {
        title: "Contributions merged upstream",
        body: "Rather than diverging, my recipe-creation fix was submitted as a pull request and merged into the original repository.",
      },
    ],
    statusNote:
      "Deployed and maintained in the upstream repository; my fork carries the same fixes.",
  },
  {
    slug: "aops",
    name: "Aviation Optimal Path System",
    displayName: "AOPS",
    category: "Algorithms · Backend",
    summary:
      "A flight-route finder built as a Design and Analysis of Algorithms course project: a C++ REST server that computes top-K and cheapest routes over an airport graph.",
    cardSummary:
      "Flight-route optimization over an airport graph — Yen's K-shortest paths and Bellman-Ford behind a C++ Crow REST server (DAA course project).",
    status: { label: "Active · course project", tone: "neutral" },
    ownership: "Team member (repository led by Vedant Khot)",
    stack: ["C++17", "Crow", "CMake", "Docker", "HTML/CSS/JS"],
    repo: "https://github.com/Vedant-Khot/DAA_project",
    demo: "https://daa-project-kappa.vercel.app",
    preview: {
      src: "/projects/aops.svg",
      alt: "AOPS flight booking dashboard showing available flights and comparison views",
    },
    problem:
      "Finding good flight options means balancing cost, time, dates, and layovers across multi-hop routes — not just computing a single shortest path.",
    users:
      "Travellers searching multi-city routes; built for a Design and Analysis of Algorithms course deliverable.",
    features: [
      "Airport graph with flights as weighted edges (price and duration).",
      "Top-K route search based on Yen's K-shortest-paths algorithm with visit-count pruning.",
      "Cheapest-route search via Bellman-Ford relaxation as a cross-check on the optimal claim.",
      "Date-aware filtering with multi-segment timelines, roundtrip support, and a comparison view.",
      "REST endpoints including health checks and the source/destination search API.",
      "JSON-backed custom database (JsonDB) and a static dashboard with search, flight comparison, and admin pages.",
    ],
    role:
      "Team contributor – 22 of 68 commits. Implemented the search API and health/root endpoints, containerized the C++ server with a multi-stage Docker build, fixed Linux case-sensitivity and include-path issues, and handled Railway cloud deployment. Core graph algorithms and much of the server logic were led by repository owner Vedant Khot.",
    decisions: [
      {
        title: "Yen's algorithm for real options",
        body: "Travellers want a ranked set of routes, so the search returns the K best paths rather than a single answer.",
      },
      {
        title: "Bellman-Ford as a cross-check",
        body: "A second, more thorough algorithm verifies the cheapest-path claim instead of trusting one method.",
      },
      {
        title: "C++ with JSON persistence",
        body: "A Crow microframework server keeps route computation fast while a JSON store avoids database setup inside course scope.",
      },
    ],
    statusNote:
      "Active course project, presented in the repository as the Smart Flight Booking System. Live dashboard deployed; C++ API runs locally or via Docker.",
  },
  {
    slug: "test-case-generator",
    name: "Test Case Generator",
    category: "Developer tooling",
    summary:
      "A folder-driven framework that generates deterministic test cases for competitive programming contests — your C++ solution acts as the oracle, and the tool packages HackerRank-ready ZIP archives.",
    cardSummary:
      "Deterministic, folder-driven test-case generation for competitive programming — with your solution as the oracle and HackerRank-ready ZIP output.",
    status: { label: "Active", tone: "live" },
    ownership: "Primary author",
    stack: ["Python", "C++17", "Docker", "CLI"],
    repo: "https://github.com/HrishiiLit/Test-case-generator",
    demo: "https://hrishiilit.github.io/Test-case-generator/",
    preview: {
      src: "/projects/test-case-generator.svg",
      alt: "Documentation site for the Test Case Generator showing its feature overview and CLI usage",
    },
    problem:
      "Preparing contest test data is slow and error-prone: writing generators by hand, computing expected outputs, and packaging correctly named input/output files for platforms like HackerRank.",
    users:
      "Competitive programmers and problem setters — including campus contests run through Code Club.",
    features: [
      "Folder-driven configuration: contests and problems are directories — no JSON, YAML, or XML.",
      "spec.py DSL with nine input types (Integer, LongInteger, Float, String, Array, Matrix, Permutation, Graph, Tree) plus Line and Blocks layout helpers.",
      "28 built-in generation strategies covering edge cases, stress cases, and graph/tree topologies.",
      "solution.cpp runs as the oracle to produce verified expected outputs.",
      "Deterministic output: same spec plus same seed reproduces identical test cases.",
      "Optional checker.py for custom judging, validated but never packaged into the ZIP.",
      "Automatic ZIP packaging with verified, index-matched input/output pairs.",
      "Docker image bundling Python 3.12 and g++ so no local toolchain is required.",
      "LLM-assisted spec authoring through a documented PROMPT.md workflow.",
      "CLI flags for dry runs, per-case reports, seeds, timeouts, and input-only generation.",
    ],
    role:
      "Primary author and maintainer — 49 of 56 commits. Built the core framework (generators, strategies, validators, C++ runner, zipper, checker utilities), the CLI, the Docker workflow, and the documentation site. Merged a seven-commit community pull request covering validation fixes, UTF-8 I/O, and additional strategies.",
    decisions: [
      {
        title: "Folders as configuration",
        body: "The directory layout mirrors how contestants already organize problems, so the tool adds no new config format to learn.",
      },
      {
        title: "Solution-as-oracle",
        body: "Expected outputs are produced by running the trusted solution.cpp, removing an entire class of authoring mistakes.",
      },
      {
        title: "Determinism by seed",
        body: "Re-running with the same seed reproduces the exact test set, so re-uploads never churn a contest's data.",
      },
      {
        title: "Stdlib-only Python",
        body: "No pip dependencies; a Docker image is provided for contributors without a local Python and g++ toolchain.",
      },
    ],
    statusNote:
      "Actively developed. The documentation roadmap lists the core framework and LLM-assisted specs as complete, with expanded graph strategies in progress.",
  },
  {
    slug: "caresync",
    name: "CareSync",
    category: "Healthcare platform",
    summary:
      "A healthcare platform that combines doctor discovery, appointment booking, remote consultation, and automated clinic workflows in one system.",
    cardSummary:
      "Full-stack healthcare platform: doctor discovery, booking, remote consultations, and automated clinic follow-up workflows (team project).",
    status: { label: "Deployed · team project", tone: "neutral" },
    ownership: "Team member (team NVies)",
    stack: ["Next.js", "TypeScript", "FastAPI", "Supabase", "React Flow"],
    repo: "https://github.com/HrishiiLit/NVies_CareSync",
    demo: "https://care-sync-ai-bot-5mrk.vercel.app/",
    preview: {
      src: "/projects/caresync.svg",
      alt: "CareSync landing page describing the healthcare workflow platform",
    },
    problem:
      "Clinic staff lose hours to manual follow-up calls and scheduling, while patients struggle to find available doctors and consult remotely.",
    users:
      "Patients (discovery, booking, remote consultations) and clinic staff (workflow automation).",
    features: [
      "Doctor listing with real-time availability, filtering, and slot management.",
      "Appointment booking with reservation, rescheduling, and cancellation.",
      "Remote consultation room with chat and video-ready provider integration.",
      "Workflow automation for follow-ups and patient communication, including voice calls via ElevenLabs and Twilio.",
      "Notifications and booking reminders, plus a feedback and rating flow.",
      "Graph-based workflow builder using React Flow with Dagre layout.",
    ],
    role:
      "Team contributor – 11 of 14 commits. Implemented backend API endpoints and their implementations, built frontend pages and shared components, added lib utilities, and set up Docker configuration. Teammates: Sanskruti Agasgekar and Prajwal Baddi.",
    decisions: [
      {
        title: "Monorepo with a split backend",
        body: "A Next.js frontend and FastAPI backend keep the workflow engine and integrations separate from the patient-facing UI.",
      },
      {
        title: "SQL migrations in the repository",
        body: "Schema and seed scripts live under backend/migrations so database changes are reviewable alongside code.",
      },
    ],
    statusNote:
      "Deployed on Vercel (MIT licensed). Development has been quiet since May 2026.",
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug) || null;
}
