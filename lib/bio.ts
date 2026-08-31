export const faceitUrl = "https://www.faceit.com/zh/players/Chinaharry17";
export const scholarUrl =
  "https://scholar.google.com/citations?user=PgAwSFwAAAAJ";
export const githubUrl = "https://github.com/ChinaHarry23";
export const xUrl = "https://x.com/Chinaharryb23";
export const linkedinUrl = "https://www.linkedin.com/in/xinlong-bao-52066a343/";
export const email = "hhwbxl1314@gmail.com";
export const resumePath = "/xinlong-bao.pdf";
export const chineseName = "包新龙";

export const mosaic: {
  src: string;
  alt: string;
  caption: string;
  href: string;
  external?: boolean;
}[] = [
  {
    src: "/life/vision-pro.png",
    alt: "Apple Vision Pro, studio product still",
    caption: "Apple Vision Pro",
    href: "/work/haptic-glove",
  },
  {
    src: "/life/gloves-bench.png",
    alt: "Left haptic glove on the bench, ESP32 and fingertip actuators",
    caption: "The gloves",
    href: "/work/haptic-glove",
  },
  {
    src: "/life/vr-desk.jpg",
    alt: "Escape-room desk: laptop, keypad, candles, stone walls",
    caption: "The room I built",
    href: "/work/haptic-glove",
  },
  {
    src: "/life/cs-inventory.png",
    alt: "Counter-Strike inventory, Butterfly Knife Gamma Doppler in the grid",
    caption: "FACEIT locker",
    href: "https://www.faceit.com/zh/players/Chinaharry17",
    external: true,
  },
];

export const rooms = [
  {
    src: "/life/vr-desk.jpg",
    alt: "Escape-room desk with laptop, wall keypad, clock, and candles",
    caption: "Desk",
  },
  {
    src: "/life/vr-room.jpg",
    alt: "Overhead of the haptic escape room: fireplace, cabinet, desk",
    caption: "Overview",
  },
  {
    src: "/life/vr-interrogation.jpg",
    alt: "Second visionOS room: bed, wardrobe, toy train, rocking horse",
    caption: "Second room",
  },
];

export const bench: {
  name: string;
  kind: string;
  tone: string;
  spec: string;
  note: string;
  src: string;
  alt: string;
  fit: "cover" | "contain";
}[] = [
  {
    name: "Alienware Area-51",
    kind: "Desktop",
    tone: "alien",
    spec: "AMD Ryzen 9 9950X3D · RTX 5090 32 GB @ 1.79 TB/s · 64 GB @ 102 GB/s · 4 TB SSD @ 8 GB/s",
    note: "On the desk. The lobby machine.",
    src: "/life/bench/area51.jpg",
    alt: "Alienware Area-51 desktop, glass side panel and RTX card lit",
    fit: "cover",
  },
  {
    name: "Alienware 16 R1",
    kind: "Windows laptop",
    tone: "alien",
    spec: "Intel Core i9-13900HK · RTX 4090 16 GB @ 576 GB/s · 32 GB @ 90 GB/s · 4 TB SSD @ 8 GB/s",
    note: "Travel Windows. Same game, smaller chassis.",
    src: "/life/bench/alienware-16.jpg",
    alt: "Alienware 16, Lunar Light lid and stadium lighting",
    fit: "cover",
  },
  {
    name: "MacBook Pro",
    kind: "M3 Max",
    tone: "apple",
    spec: "128 GB @ 400 GB/s · 8 TB SSD @ 7 GB/s",
    note: "Thesis, Unity, and the master’s.",
    src: "/life/bench/m3-max-die.jpg",
    alt: "Apple M3, M3 Pro, and M3 Max silicon die shots",
    fit: "contain",
  },
  {
    name: "Apple Vision Pro",
    kind: "Spatial",
    tone: "apple",
    spec: "16 GB @ 153 GB/s · NAND @ 3 GB/s · visionOS · UDP to the gloves",
    note: "The HMD the escape room was written for.",
    src: "/life/bench/vision-pro-components.jpg",
    alt: "Apple Vision Pro exploded view: cameras, LiDAR, IPD, eye tracking",
    fit: "contain",
  },
  {
    name: "PinePhone Pro + PineTab",
    kind: "Kali kit",
    tone: "pine",
    spec: "4 GB @ 13 GB/s · 128 GB eMMC @ 400 MB/s",
    note: "Field Linux. Not a toy.",
    src: "/life/bench/pinephone-nethunter.jpg",
    alt: "PinePhone Pro showing Kali NetHunter on the lock screen",
    fit: "contain",
  },
  {
    name: "Mac Studio",
    kind: "M5 Ultra · queued",
    tone: "next",
    spec: "512 GB @ 1.2 TB/s · 1 TB SSD @ 15 GB/s",
    note: "Next machine. Same climb as the PhD.",
    src: "/life/bench/m5-ultra.png",
    alt: "Apple M5 Ultra chip graphic: 36-core CPU, 80-core GPU, 512 GB",
    fit: "contain",
  },
];

export const education = [
  {
    place: "University of Sydney",
    detail: "Master of Computer Science (Advanced) · expected November 2027",
    where: "Sydney",
  },
  {
    place: "De La Salle University — Gokongwei College of Engineering",
    detail: "B.S. Computer Engineering · April 2025",
    where: "Manila",
  },
];

export const experience = [
  {
    place: "Zhejiang Jubianyun Technology",
    detail: "AI & Robotics Algorithm Engineer · Feb–Aug 2025",
    where: "Hangzhou",
    notes: [
      "Reinforcement learning and secondary development on Unitree Go2 EDU and Agibot X1 for nuclear-plant scenarios.",
      "YOLO vision for construction-site classification; local and cloud recognition.",
      "Internal LLM apps on LM Studio and LangChain. Chinese–English translation for EDF visits.",
    ],
  },
  {
    place: "DLSU Institute of Biomedical Engineering and Health Technologies",
    detail: "Software Engineering Intern · May–Aug 2024",
    where: "Manila",
    notes: [
      "Android, iOS, and web prototypes for rehabilitation robotics.",
    ],
  },
];

export const publications = [
  {
    title:
      "Design and Development of Haptic Gloves and Temperature Feedback Module for Apple Vision Pro",
    venue: "IEEE GEM 2025 · first author",
  },
  {
    title:
      "A Software Management System Solution for Digitalization and Automation in Construction Sector",
    venue: "IEEE HNICEM 2023 · first author",
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
