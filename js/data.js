// Personal Website Data Configuration

export const PROFILE = {
  name: "Kavinesh",
  handle: "@kavinesh",
  title: "Full-Stack & AI Engineer",
  tagline: "vibe coding cool software • building scalable AI systems • ☕ into code",
  location: "San Francisco / Remote",
  vibeStatus: "🟢 Building AI agents & drinking matcha",
  bio: [
    "Hey! I'm Kavinesh, a software engineer obsessed with clean code, modern UX, and generative AI.",
    "I spend my time crafting ultra-fast web apps, training intelligent agents, and shipping open-source tools that feel like magic to use.",
    "When I'm not pushing commits, you'll find me exploring keycap profiles, brewing specialty coffee, or reading whitepapers on LLM latency."
  ],
  stats: [
    { label: "Production Apps", value: "14+" },
    { label: "GitHub Stars", value: "2.4k" },
    { label: "Lines of Code", value: "250k+" },
    { label: "Matcha Consumed", value: "999+ cups" }
  ],
  socials: [
    { name: "GitHub", url: "https://github.com", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
    { name: "Twitter / X", url: "https://x.com", icon: "twitter" },
    { name: "Email", url: "mailto:hello@kavinesh.dev", icon: "mail" },
    { name: "Resume PDF", url: "#cv", icon: "file-text" }
  ],
  skills: {
    languages: ["TypeScript", "Python", "Rust", "Go", "HTML5/CSS3", "SQL"],
    frameworks: ["React / Next.js", "Vue.js", "TailwindCSS", "FastAPI", "Node.js", "PyTorch"],
    tools: ["Git", "Docker", "AWS / Cloudflare", "Vercel", "PostgreSQL", "Redis", "Vector DBs"],
    concepts: ["Generative AI & LLMs", "Micro-frontends", "Distributed Systems", "Web Performance (CWV)"]
  }
};

export const PROJECTS = [
  {
    id: "agent-pulse",
    title: "AgentPulse AI ⚡",
    tagline: "Autonomous Multi-Agent Monitoring & Orchestration Dashboard",
    category: "AI/ML",
    featured: true,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
    tags: ["TypeScript", "Next.js", "Python", "FastAPI", "WebSockets"],
    stars: "1.2k",
    description: "Real-time visual orchestrator for autonomous AI subagent fleets. Tracks token consumption, inter-agent message logs, tool executions, and step latency with zero overhead.",
    highlights: [
      "Sub-50ms streaming websocket updates",
      "Interactive graph representation of active agent hierarchies",
      "Integrated telemetry dashboard with exportable trace logs"
    ],
    github: "https://github.com",
    demo: "https://agentpulse.demo"
  },
  {
    id: "neo-shell",
    title: "NeoShell CLI 🚀",
    tagline: "Ultra-fast, customizable terminal environment for power developers",
    category: "DevTools",
    featured: true,
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&auto=format&fit=crop&q=80",
    tags: ["Rust", "WebAssembly", "Terminal", "GLSL"],
    stars: "850",
    description: "Rust-powered terminal multiplexer with built-in AI autocomplete, GPU-accelerated rendering, and custom theme shaders.",
    highlights: [
      "Written 100% in safe Rust with zero C dependencies",
      "Instant startup under 4ms",
      "Cross-platform support for macOS, Linux, and Windows"
    ],
    github: "https://github.com",
    demo: "https://neoshell.demo"
  },
  {
    id: "zenith-ui",
    title: "Zenith Glass UI Kit ✨",
    tagline: "Quirky, neo-brutalist & glassmorphism component library",
    category: "Full-Stack",
    featured: true,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80",
    tags: ["CSS3", "HTML5", "Vanilla JS", "Design System"],
    stars: "430",
    description: "A lightweight component library built on modern CSS variables, native dialogs, and hardware-accelerated animations for Gen Z web experiences.",
    highlights: [
      "Zero NPM dependencies required",
      "Built-in accessible keyboard traps & ARIA attributes",
      "Over 40+ dynamic micro-interactions out of the box"
    ],
    github: "https://github.com",
    demo: "https://zenithui.demo"
  },
  {
    id: "synth-craft",
    title: "SynthCraft Audio Web 🎵",
    tagline: "Browser-based modular synthesizer & visualizer",
    category: "Full-Stack",
    featured: false,
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&auto=format&fit=crop&q=80",
    tags: ["WebAudio API", "Canvas 2D", "JavaScript", "PWA"],
    stars: "290",
    description: "Create polyphonic synth wave loops directly in the browser with node routing, low-pass filters, and reactive particle visualizers.",
    highlights: [
      "Low latency WebAudio node graph execution",
      "Export track loops as high-quality WAV audio",
      "Offline Progressive Web App support"
    ],
    github: "https://github.com",
    demo: "https://synthcraft.demo"
  }
];

export const EXPERIENCE = [
  {
    role: "Senior AI / Software Engineer",
    company: "HyperScale Labs",
    period: "2024 — Present",
    location: "San Francisco, CA",
    type: "Full-time",
    summary: "Leading the agentic AI workflow team. Architecting scalable microservices, vector search pipelines, and responsive frontend dashboards.",
    achievements: [
      "Architected subagent orchestration framework reducing task completion times by 42%",
      "Engineered real-time streaming protocol handling 10k concurrent WebSocket connections",
      "Mentored junior engineers and led design system overhaul"
    ],
    skills: ["Python", "TypeScript", "Next.js", "Redis", "Vector DBs", "Docker"]
  },
  {
    role: "Full-Stack Developer",
    company: "Vibe Tech Studio",
    period: "2023 — 2024",
    location: "Remote",
    type: "Full-time",
    summary: "Built high-conversion web applications, developer tools, and API backends for early-stage tech startups.",
    achievements: [
      "Shipped 8+ client projects from zero to production launch",
      "Optimized Core Web Vitals across client sites, achieving 98+ Lighthouse scores",
      "Integrated stripe payments and custom auth flows"
    ],
    skills: ["React", "Node.js", "PostgreSQL", "TailwindCSS", "AWS"]
  },
  {
    role: "Open Source Contributor & Freelancer",
    company: "Self-Employed",
    period: "2021 — 2023",
    location: "Global",
    type: "Contract",
    summary: "Contributed to popular web libraries, built CLI tools, and helped indie creators bring web concepts to life.",
    achievements: [
      "Top contributor to open-source UI libraries with over 2,000 GitHub stars",
      "Published 5 popular NPM packages for developer productivity"
    ],
    skills: ["JavaScript", "Python", "Git", "REST APIs", "CSS Architecture"]
  }
];

export const EDUCATION = [
  {
    degree: "B.S. in Computer Science & Artificial Intelligence",
    institution: "University of California / Tech Institute",
    period: "2020 — 2024",
    highlights: ["Dean's Honors List", "President of Hacker Club", "1st Place Hackathon Winner"]
  }
];

export const BLOG_POSTS = [
  {
    slug: "why-rust-is-my-roman-empire",
    title: "Why Rust is My Roman Empire 🦀",
    date: "July 18, 2026",
    readTime: "5 min read",
    tags: ["Rust", "Systems", "Developer Vibe"],
    summary: "A deep dive into memory safety, algebraic data types, and why compiler errors in Rust actually feel like a protective warm hug.",
    content: `
      <h3>The Compiler is Your Best Friend, Not Your Enemy</h3>
      <p>If you've spent any time in C or C++, you know the dreaded feeling of a <code>Segmentation fault (core dumped)</code> at 2 AM. Rust fundamentally changed how I think about memory allocation, ownership, and concurrency.</p>

      <h4>1. The Borrow Checker Changed My Mindset</h4>
      <p>In Rust, every value has an owner. There can only be one owner at a time. When the owner goes out of scope, the value is dropped automatically. No garbage collector overhead, no manual <code>free()</code> panics.</p>

      <pre><code>fn main() {
    let s1 = String::from("vibe coding");
    let s2 = s1; // Ownership moves to s2
    // println!("{}", s1); // Compiler error! Prevents use-after-move!
    println!("{}", s2); // Safe & clean
}</code></pre>

      <h4>2. Zero-Cost Abstractions</h4>
      <p>Higher-order functions like <code>.map()</code>, <code>.filter()</code>, and <code>.fold()</code> compile down to machine code that is just as fast as manual <code>for</code> loops. You get the expressiveness of functional programming with C-level execution speeds.</p>

      <h3>TL;DR</h3>
      <p>Learning Rust doesn't just make you a better Rust developer — it permanently upgrades your mental model for memory management across TypeScript, C++, and Go.</p>
    `
  },
  {
    slug: "building-ai-agents-100-lines-code",
    title: "Building an Autonomous AI Agent in 100 Lines of Code 🤖",
    date: "June 24, 2026",
    readTime: "7 min read",
    tags: ["AI", "Python", "Architecture"],
    summary: "How to build a functional tool-calling subagent loop with state management, error recovery, and structured output from absolute scratch.",
    content: `
      <h3>Demystifying AI Agent Architecture</h3>
      <p>AI Agents are fundamentally simple loops: <strong>Observe → Think → Act → Repeat</strong>. You don't need giant 50,000-line frameworks to build powerful custom subagents.</p>

      <h4>The Core Execution Loop</h4>
      <p>Here is the minimal loop skeleton in Python using standard functions and JSON tool execution:</p>

      <pre><code>def run_agent_loop(prompt, tools, max_steps=10):
    messages = [{"role": "user", "content": prompt}]
    for step in range(max_steps):
        response = call_llm(messages, tools=tools)
        if response.has_tool_call():
            result = execute_tool(response.tool_call)
            messages.append({"role": "tool", "content": result})
        else:
            return response.text
    return "Reached step limit"</code></pre>

      <h4>Key Takeaways for Production</h4>
      <ul>
        <li><strong>Strict Typing:</strong> Always enforce structured JSON schema validation for tool parameters.</li>
        <li><strong>Loop Timeouts:</strong> Always set explicit step counters to prevent runaway LLM recursion.</li>
        <li><strong>Clean Context:</strong> Truncate or summarize long tool outputs to preserve prompt budget.</li>
      </ul>
    `
  },
  {
    slug: "css-is-awesome-in-2026",
    title: "CSS is Awesome in 2026 (No Tailwind Required?) 🎨",
    date: "May 10, 2026",
    readTime: "4 min read",
    tags: ["CSS", "Frontend", "Web Design"],
    summary: "Container queries, :has() parent selectors, native CSS nesting, and anchor positioning have turned vanilla CSS into a powerhouse.",
    content: `
      <h3>The Golden Era of Native Web Styling</h3>
      <p>Remember when we needed SASS, complex utility generators, or JavaScript libraries just to select a parent element based on its children? Native CSS has evolved at warp speed.</p>

      <h4>1. The Power of <code>:has()</code></h4>
      <p>You can now style parent cards based on state or dynamic child elements without any JS event listeners!</p>

      <pre><code>/* Style card header when its inner checkbox is checked */
.card:has(input[type="checkbox"]:checked) {
    border-color: var(--accent-neon);
    box-shadow: 0 0 20px rgba(204, 255, 0, 0.3);
}</code></pre>

      <h4>2. Container Queries</h4>
      <p>Component responsiveness is finally independent of the viewport width. Components react to their immediate container size, making micro-layouts truly modular!</p>

      <pre><code>@container (min-width: 400px) {
    .profile-card {
        display: grid;
        grid-template-columns: 80px 1fr;
    }
}</code></pre>
    `
  }
];
