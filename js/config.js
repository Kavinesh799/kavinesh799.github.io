// ==========================================================================
// ✏️  PERSONAL WEBSITE CONFIGURATION
//     Edit your info below. All content on the site reads from this file.
// ==========================================================================

export const CONFIG = {

  // ── 1. IDENTITY ──────────────────────────────────────────────────────
  name: "Kavinesh",
  title: "Communication & Signal Processing Engineer",
  photo: "assets/profile.jpg",   // replace with your own headshot

  // ── 2. BIO  (short paragraph shown on About page) ───────────────────
  bio: [
    "Communication and Signal Processing Engineer with a focus on wireless transceiver design, statistical signal analysis, and real-time embedded DSP.",
    "My work spans Software Defined Radio, FPGA-accelerated spectral processing, and machine-learning approaches to RF spectrum sensing and adaptive beamforming."
  ],

  // ── 3. SOCIAL / CONTACT LINKS ───────────────────────────────────────
  socials: [
    { label: "LinkedIn",       url: "https://linkedin.com/in/yourprofile" },
    { label: "GitHub",         url: "https://github.com/yourusername" },
    { label: "Google Scholar", url: "https://scholar.google.com" },
    { label: "Email",          url: "mailto:your.email@domain.com" }
  ],

  // ── 4. SKILLS / TOOLS ──────────────────────────────────────────────
  skills: [
    "MATLAB / Simulink",
    "Python (NumPy / SciPy)",
    "C / C++",
    "GNU Radio",
    "SDR (USRP / HackRF)",
    "OFDM / MIMO",
    "FPGA / SystemVerilog",
    "Filter Design (FIR / IIR)",
    "PyTorch",
    "Spectral Analysis"
  ],

  // ── 5. PROJECTS ─────────────────────────────────────────────────────
  projects: [
    {
      title: "Real-Time SDR OFDM Transceiver",
      description: "End-to-end OFDM PHY layer on USRP B210. Channel estimation, pilot insertion, frame sync (Schmidl-Cox), and adaptive QAM mapping. 10 Mbps over 5 MHz.",
      tags: ["C++", "GNU Radio", "SDR", "OFDM"],
      link: "https://github.com"
    },
    {
      title: "1024-pt Radix-4 FFT on Artix-7",
      description: "Pipelined FFT engine in SystemVerilog. Twiddle-factor LUTs, fixed-point butterfly units, 250 MHz clock. Verified with Verilator C++ testbench.",
      tags: ["SystemVerilog", "FPGA", "Vivado", "DSP"],
      link: "https://github.com"
    },
    {
      title: "Deep-Learning RF Modulation Classifier",
      description: "CNN for automatic modulation classification of raw I/Q streams across 11 schemes (BPSK to 64-QAM, FM, AM). 94.2% accuracy at SNR > 0 dB on RadioML 2018.01A.",
      tags: ["Python", "PyTorch", "RadioML"],
      link: "https://github.com"
    },
    {
      title: "Adaptive LMS ECG Noise Canceller",
      description: "Least-Mean-Squares adaptive filter removing 60 Hz powerline interference and baseline wander from ECG signals in real time. 45 dB SNR improvement.",
      tags: ["MATLAB", "Python", "Bio-DSP"],
      link: "https://github.com"
    }
  ],

  // ── 6. CV / EXPERIENCE ─────────────────────────────────────────────
  experience: [
    {
      role: "Communication Systems Engineer",
      org: "SignalTech Systems Labs",
      period: "2024 – Present",
      location: "San Francisco, CA",
      points: [
        "Doppler compensation & phase-locked loop design in C++",
        "Adaptive beamforming for multi-antenna arrays",
        "35% PHY-layer latency reduction via SIMD vectorisation"
      ]
    },
    {
      role: "DSP Research Assistant",
      org: "Wireless Communications Lab",
      period: "2022 – 2024",
      location: "University Campus",
      points: [
        "Hardware-in-the-loop testbed with USRP N310 radios",
        "Co-authored 2 IEEE papers on CSI compression",
        "Built Python spectral-analysis toolkit (50+ users)"
      ]
    }
  ],

  education: [
    {
      degree: "M.S. Electrical & Computer Engineering",
      org: "Institute of Technology",
      period: "2022 – 2024",
      detail: "Focus: Digital Communications, Array Signal Processing, Detection & Estimation Theory"
    },
    {
      degree: "B.S. Electrical Engineering",
      org: "University Engineering School",
      period: "2018 – 2022",
      detail: "Graduated with Honors. Capstone: FPGA-based Software Defined Radio"
    }
  ],

  // ── 7. BLOG POSTS ──────────────────────────────────────────────────
  //    Each entry becomes a card on the Blog index.
  //    Clicking a card opens a dedicated full-page view for that post.
  //    To add a new post: append another object to this array.
  blog: [
    {
      slug: "demystifying-ofdm-sync",
      title: "Demystifying OFDM Frame Synchronisation",
      date: "2026-07-15",
      tags: ["OFDM", "Wireless", "DSP"],
      summary: "A practical walkthrough of Schmidl-Cox timing and CFO estimation for OFDM receivers.",
      content: `
        <h2>Why Synchronisation Matters</h2>
        <p>OFDM is sensitive to carrier-frequency offsets. A small mismatch destroys sub-carrier orthogonality, causing Inter-Carrier Interference (ICI).</p>

        <h3>Schmidl &amp; Cox Preamble</h3>
        <p>Two identical halves in the time domain. Conjugate correlation between samples separated by half the symbol period detects frame start:</p>

        <pre><code>double P = 0, R = 0;
for (int i = 0; i &lt; N/2; i++) {
    P += real(conj(rx[i]) * rx[i + N/2]);
    R += norm(rx[i + N/2]);
}
double metric = (P*P) / (R*R);</code></pre>

        <h3>Key Take-aways</h3>
        <ul>
          <li>Metric peaks sharply at frame boundary.</li>
          <li>Phase of P gives a coarse CFO estimate.</li>
          <li>Fine CFO correction uses pilot tones after FFT.</li>
        </ul>
      `
    },
    {
      slug: "matlab-to-fixed-point-cpp",
      title: "MATLAB Floating-Point to Fixed-Point C++",
      date: "2026-06-08",
      tags: ["C++", "MATLAB", "Embedded"],
      summary: "Translating filter simulations into Q15/Q31 fixed-point C++ without dynamic-range overflow.",
      content: `
        <h2>Why Fixed-Point?</h2>
        <p>Many low-power MCUs and all FPGAs lack a hardware FPU. Fixed-point Q-format arithmetic keeps the maths integer-only while preserving fractional precision.</p>

        <h3>Q15 Basics</h3>
        <p>A 16-bit signed integer maps to the range <code>[-1.0, 1.0)</code>.</p>
        <pre><code>int16_t to_q15(float x) {
    return (int16_t)(x * 32768.0f);
}
int16_t q15_mul(int16_t a, int16_t b) {
    return (int16_t)(((int32_t)a * b) >> 15);
}</code></pre>

        <h3>Practical Tips</h3>
        <ul>
          <li>Always guard against saturation after multiply-accumulate chains.</li>
          <li>Use CMSIS-DSP arm_fir_q15() on Cortex-M for vectorised filtering.</li>
          <li>Compare SNR of fixed-point output against MATLAB golden reference.</li>
        </ul>
      `
    }
  ]
};