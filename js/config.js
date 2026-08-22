// ==========================================================================
// ✏️ PERSONAL WEBSITE CONFIGURATION TEMPLATE
// Communication & Signal Processing Engineer
// Simply edit the values below to update your website!
// ==========================================================================

export const USER_CONFIG = {
  // 1. PERSONAL DETAILS
  name: "Kavinesh",
  title: "Communication & Signal Processing Engineer",
  location: "San Francisco, CA / Remote",
  photo: "assets/profile.jpg", // Path to your profile photo
  statusBadge: "📡 Researching 5G/6G OFDM Transceivers & SDRs",

  // 2. CONCISE BIO (Displayed on the About Page next to your photo)
  bio: [
    "I am Kavinesh, a Communication & Signal Processing Engineer passionate about digital transceiver design, wireless communications, and advanced signal processing algorithms.",
    "My expertise includes Software Defined Radio (SDR), FPGA acceleration, statistical signal analysis, and real-time digital filtering. I focus on bridging theoretical communications theory with practical hardware implementation."
  ],

  // 3. SOCIAL HANDLES & LINKS
  socials: [
    { name: "LinkedIn", url: "https://linkedin.com/in/yourprofile", icon: "linkedin" },
    { name: "GitHub", url: "https://github.com/yourusername", icon: "github" },
    { name: "Google Scholar", url: "https://scholar.google.com", icon: "scholar" },
    { name: "Email", url: "mailto:hello@kavinesh.dev", icon: "mail" }
  ],

  // 4. KEY TECHNICAL SKILLS & BADGES
  skills: [
    "MATLAB / Simulink",
    "Python (NumPy/SciPy)",
    "C / C++ (Bare-Metal & Embedded)",
    "SDR (USRP, HackRF, RTL-SDR)",
    "GNU Radio",
    "OFDM & MIMO Systems",
    "FPGA / SystemVerilog",
    "PyTorch / ML for DSP",
    "Filter Design (FIR/IIR)",
    "Spectral Analysis (FFT)"
  ],

  // 5. FEATURED PROJECTS
  projects: [
    {
      id: "ofdm-sdr-transceiver",
      title: "Real-Time SDR OFDM Transceiver 📡",
      category: "Wireless Communications",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
      description: "Complete end-to-end OFDM physical layer implementation built for USRP B210 using C++ and GNU Radio. Features channel estimation, pilot insertion, frame synchronization, and adaptive QAM constellation mapping.",
      tags: ["C++", "GNU Radio", "SDR", "OFDM", "QAM"],
      highlights: [
        "Achieved 10 Mbps throughput over 5 MHz bandwidth",
        "Sub-10ms frame synchronization using Schmidl & Cox algorithm",
        "Real-time constellation plotting & BER measurement"
      ],
      github: "https://github.com",
      demo: "https://github.com"
    },
    {
      id: "fpga-fft-accelerator",
      title: "1024-Point Radix-4 FFT Accelerator ⚡",
      category: "FPGA & Hardware DSP",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&auto=format&fit=crop&q=80",
      description: "Pipelined 1024-point Fast Fourier Transform engine written in SystemVerilog for Xilinx Artix-7 FPGA. Optimized with twiddle factor LUTs and fixed-point fixed-latency butterfly units.",
      tags: ["SystemVerilog", "FPGA", "Vivado", "DSP", "FFT"],
      highlights: [
        "250 MHz operating frequency on Artix-7",
        "Low resource utilization (12% LUTs, 16 DSP48E1 slices)",
        "Verified with automated C++/Verilator testbench suite"
      ],
      github: "https://github.com",
      demo: "https://github.com"
    },
    {
      id: "deep-rf-classifier",
      title: "Deep Learning RF Modulation Classifier 🧠",
      category: "AI & Signal Processing",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
      description: "Convolutional neural network for automatic modulation classification (AMC) of raw I/Q signal streams across 11 modulation schemes (BPSK, QPSK, 16-QAM, 64-QAM, FM, AM).",
      tags: ["Python", "PyTorch", "RadioML", "Signal Processing"],
      highlights: [
        "94.2% classification accuracy at SNRs > 0 dB",
        "Trained on RadioML 2018.01A benchmark dataset",
        "Exported ONNX runtime model for real-time edge execution"
      ],
      github: "https://github.com",
      demo: "https://github.com"
    },
    {
      id: "adaptive-ecg-filter",
      title: "Adaptive LMS ECG Noise Cancellation 🫀",
      category: "Digital Signal Processing",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
      description: "Least Mean Squares (LMS) adaptive filter for removing 60 Hz powerline interference and baseline wander from bio-medical ECG signals in real-time.",
      tags: ["MATLAB", "Python", "Bio-DSP", "LMS Filter"],
      highlights: [
        "45 dB SNR improvement on noisy ECG datasets",
        "Real-time streaming evaluation using MATLAB App Designer",
        "Low computational complexity Suitable for MCU deployment"
      ],
      github: "https://github.com",
      demo: "https://github.com"
    }
  ],

  // 6. CURRICULUM VITAE (CV / EXPERIENCE)
  experience: [
    {
      role: "Communication Systems Engineer",
      institution: "SignalTech Systems Labs",
      period: "2024 — Present",
      location: "San Francisco, CA",
      summary: "Designing real-time digital signal processing algorithms and RF communication protocols for next-generation satellite links.",
      points: [
        "Implemented high-speed Doppler compensation & phase-locked loops (PLL) in C++",
        "Designed adaptive beamforming algorithms for multi-antenna arrays",
        "Reduced PHY layer latency by 35% using vectorized SIMD operations"
      ],
      skills: ["C++", "MATLAB", "SDR", "Phased Arrays", "Git"]
    },
    {
      role: "DSP Research Assistant",
      institution: "Wireless Communications Lab",
      period: "2022 — 2024",
      location: "University Campus",
      summary: "Researched millimeter-wave MIMO channel estimation techniques and published findings in IEEE proceedings.",
      points: [
        "Built hardware-in-the-loop testbed using USRP N310 radios",
        "Co-authored 2 research papers on channel state information (CSI) compression",
        "Developed Python spectral analysis toolkit used by 50+ lab members"
      ],
      skills: ["Python", "MATLAB", "GNU Radio", "IEEE Publications"]
    }
  ],

  education: [
    {
      degree: "M.S. in Electrical & Computer Engineering (Signal Processing Specialization)",
      institution: "Institute of Technology",
      period: "2022 — 2024",
      details: "Focus: Digital Communications, Array Signal Processing, Detection & Estimation Theory"
    },
    {
      degree: "B.S. in Electrical Engineering",
      institution: "University Engineering School",
      period: "2018 — 2022",
      details: "Graduated with Honors. Capstone: FPGA-based Software Defined Radio"
    }
  ],

  // 7. LAB NOTES & BLOG ARTICLES
  blog: [
    {
      slug: "demystifying-ofdm-synchronization",
      title: "Demystifying OFDM Frame Synchronization: Schmidl & Cox 📡",
      date: "July 15, 2026",
      readTime: "6 min read",
      tags: ["OFDM", "Wireless", "DSP"],
      summary: "A practical guide to frame timing and carrier frequency offset (CFO) estimation in OFDM receivers using preamble correlation.",
      content: `
        <h3>Why Synchronization Matters in OFDM</h3>
        <p>OFDM systems are highly sensitive to carrier frequency offsets (CFO) and timing errors. A small frequency mismatch destroys orthogonality between subcarriers, causing Inter-Carrier Interference (ICI).</p>
        
        <h4>Schmidl & Cox Preamble Structure</h4>
        <p>The classic Schmidl & Cox algorithm uses a preamble consisting of two identical halves in the time domain. By calculating the conjugate correlation between samples separated by half the symbol period, we can detect the exact frame start!</p>

        <pre><code>// Pseudocode for Schmidl-Cox correlation
double sum_P = 0.0;
double sum_R = 0.0;
for (int i = 0; i < N / 2; i++) {
    complex<double> r_i = rx_buffer[i];
    complex<double> r_i_half = rx_buffer[i + N / 2];
    sum_P += real(conj(r_i) * r_i_half);
    sum_R += norm(r_i_half);
}
double metric = (sum_P * sum_P) / (sum_R * sum_R);</code></pre>
      `
    },
    {
      slug: "matlab-to-cpp-fixed-point-dsp",
      title: "From MATLAB Floating-Point to Fixed-Point C++ ⚙️",
      date: "June 08, 2026",
      readTime: "8 min read",
      tags: ["C++", "MATLAB", "Embedded DSP"],
      summary: "How to translate floating-point digital filter simulations into fixed-point Q15/Q31 C++ code without dynamic range overflow.",
      content: `
        <h3>The Cost of Floating-Point on Microcontrollers</h3>
        <p>While modern ARM Cortex-M4 processors include FPU hardware, fixed-point Q-format arithmetic remains essential for ultra-low-power microcontrollers and FPGAs.</p>

        <h4>Q15 Format Representation</h4>
        <p>In Q15 format, a 16-bit signed integer represents fractional numbers in the range <code>[-1.0, 1.0)</code>.</p>
        <pre><code>// Convert float to Q15
int16_t float_to_q15(float x) {
    return (int16_t)(x * 32768.0f);
}

// Q15 Multiplication
int16_t q15_mul(int16_t a, int16_t b) {
    int32_t temp = (int32_t)a * (int32_t)b;
    return (int16_t)(temp >> 15); // Scale back down
}</code></pre>
      `
    }
  ]
};
