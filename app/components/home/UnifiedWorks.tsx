"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Smartphone,
  Globe,
  Monitor,
  PenTool,
  Layout,
  Box,
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  status: string;
  statusColor: "green" | "yellow" | "blue" | "purple" | "orange";
  description: string;
  metrics: string[];
  tech: string[];
  link?: string;
}

const ALL_PROJECTS: Project[] = [
  {
    id: "mmuta",
    title: "Mmuta",
    category: "Mobile • EdTech",
    status: "Live",
    statusColor: "green",
    description:
      "Multilingual learning platform supporting 6 languages with offline capabilities.",
    metrics: [
      "Supported 6 languages (Yoruba, Igbo, Hausa, etc)",
      "80% accuracy in phonetic voice readout",
      "90% faster load times via background sync",
      "Integrated OpenAI GPT-4o for screen reading",
    ],
    tech: ["React Native", "GPT-4o", "LiveKit"],
    link: "https://play.google.com/store/apps/details?id=com.coursemate.coursemate",
  },
  {
    id: "flippay",
    title: "Flippay / PayNyce",
    category: "Mobile • Fintech",
    status: "Live",
    statusColor: "green",
    description: "High-volume fintech app for gift cards and bill payments.",
    metrics: [
      "Processed transactions for 5000+ users",
      "4.3 Star Rating on App Store",
      "Reduced bounce rate by 30% via UI overhaul",
      "95% success rate in bug resolution",
    ],
    tech: ["React Native", "Redux", "Encryption"],
    link: "https://apps.apple.com/us/app/flippay-sell-gift-cards/id6475052879",
  },
  {
    id: "adnova",
    title: "Adnova",
    category: "Web • Backend • AdTech",
    status: "In Dev",
    statusColor: "yellow",
    description: "Enterprise advertising workflow and analytics platform.",
    metrics: [
      "Built Auth Microservice (Multi-tenant)",
      "Integrated Stripe for real-time subscription syncing",
      "Reduced API overhead using TanStack Query",
      "Localization for German/English markets",
    ],
    tech: ["Next.js", "Node.js", "Stripe", "TanStack"],
    link: "https://ad-nova.de/",
  },
  {
    id: "energibot",
    title: "Energibot",
    category: "PC • AI • HSE",
    status: "Demo / Prototype",
    statusColor: "blue",
    description: "Offline AI chatbot for industrial safety analysis.",
    metrics: [
      "100% Offline Privacy (Zero data leak risk)",
      "Built with Llama 3 & React Native Windows",
      "Analyzes OSHA data for incident reports",
      "Eliminates need for internet at remote sites",
    ],
    tech: ["Python", "Llama 3", "React Native Windows"],
    link: "https://youtu.be/RSoYNFCikNE",
  },
  {
    id: "softbert",
    title: "Softbert Nexus (Keep)",
    category: "Mobile • Gig Economy",
    status: "Live",
    statusColor: "green",
    description: "Gig-based mobile platform with real-time booking.",
    metrics: [
      "Implemented TrieNode search for instant query results",
      "Integrated Google Places & Haversine distance validation",
      "Resolved 170+ QA issues to stabilize v2",
      "Localized for Francophone (Benin) users",
    ],
    tech: ["React Native", "Google Maps API", "Algorithms"],
  },
  {
    id: "design-portfolio",
    title: "UI/UX Collection",
    category: "Design • Prototype",
    status: "Prototype",
    statusColor: "purple",
    description: "A collection of high-fidelity user interfaces.",
    metrics: [
      "Elizabeth Moi: Custom dressmaking fashion brand",
      "Saavy App: All-in-one investment fintech",
      "Compli: Bank compliance dashboard",
      "Focus: User Journey Mapping & Wireframing",
    ],
    tech: ["Figma", "Prototyping", "User Research"],
    link: "#",
  },
  {
    id: "ice-accretion",
    title: "Jet Fuel Ice Prediction",
    category: "Research • ML",
    status: "Research",
    statusColor: "orange",
    description: "ML model to predict ice blockage in aircraft fuel systems.",
    metrics: [
      "Used XGBoost, LSTM & Random Forest",
      "Predicts blockage rates to prevent downtime",
      "Final Year Project (4.07 GPA Capstone)",
      "Paper under review",
    ],
    tech: ["Python", "Scikit-learn", "Data Science"],
  },
  {
    id: "elizabeth-moi",
    title: "Elizabeth Moi",
    category: "Mobile App • Lifestyle",
    status: "Prototype",
    statusColor: "purple",
    description:
      "Custom dressmaking brand website focused on custom-fitted dresses and dressmaking classes.",
    metrics: [
      "Problem: Needed a bespoke brand app",
      "Process: User journey mapping → Wireframes",
      "Outcome: Modern, intuitive UI",
      "Prototype Link: Figma",
    ],
    tech: ["Figma", "Prototyping", "User Journey"],
    link: "#",
  },
  {
    id: "saavy-app",
    title: "Saavy App",
    category: "Mobile App • Fintech",
    status: "Prototype",
    statusColor: "purple",
    description: "All-in-one app for investing, from real estate to stocks.",
    metrics: [
      "Problem: Unified investment platform",
      "Process: Rapid prototyping, usability testing",
      "Outcome: Visual consistency",
    ],
    tech: ["Figma", "Fintech Design"],
    link: "#",
  },
  {
    id: "elias-app",
    title: "Elias App",
    category: "Mobile App",
    status: "Prototype",
    statusColor: "purple",
    description: "Deliver personalized biblical guidance digital interactions.",
    metrics: [
      "Problem: Personalized spiritual guidance",
      "Process: Wireframes → Prototyping → Testing",
      "Outcome: Context-aware suggestions",
    ],
    tech: ["Figma", "Interaction Design"],
    link: "#",
  },
  {
    id: "compli",
    title: "Compli",
    category: "Compliance Dashboard",
    status: "Prototype",
    statusColor: "purple",
    description:
      "Simplify complex workflows and dashboard analytics for Banks.",
    metrics: [
      "Problem: Simplify complex compliance workflows",
      "Process: Data visualisation → Wireframes",
      "Outcome: Clear, user-friendly interface",
    ],
    tech: ["Figma", "Enterprise UX"],
    link: "#",
  },
  {
    id: "olaidris-portfolio",
    title: "OlaIdris Portfolio",
    category: "Mobile & Web App",
    status: "Prototype",
    statusColor: "purple",
    description: "Interactive self-branding and portfolio showcase.",
    metrics: [
      "Problem: Interactive self-branding",
      "Process: Wireframes → High-fidelity UI",
      "Outcome: Engaging experience",
      "Prototype Link: Desktop & Mobile",
    ],
    tech: ["Figma", "React", "Framer Motion"],
    link: "#",
  },
  {
    id: "adnova-design",
    title: "Adnova (Design)",
    category: "Enterprise Workflow",
    status: "Prototype",
    statusColor: "purple",
    description: "Transform complex advertising data into clear insights.",
    metrics: [
      "Problem: Complex multi-platform data",
      "Process: Wireframing → Visual Design",
      "Outcome: Data-centric UX",
    ],
    tech: ["Figma", "Dashboard Design"],
    link: "#",
  },
  {
    id: "energibot-design",
    title: "Energibot (Design)",
    category: "AI Chatbot UX",
    status: "Prototype",
    statusColor: "purple",
    description: "Secure, offline tool to analyze incident reports.",
    metrics: [
      "Problem: Offline incident analysis",
      "Process: Wireframing → Interaction Design",
      "Outcome: Accessible continuous use",
    ],
    tech: ["Figma", "AI UX"],
    link: "#",
  },
];

const statusColors = {
  green: "bg-green-500/20 text-green-400 border-green-500/30",
  yellow: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  orange: "bg-orange-500/20 text-orange-400 border-orange-500/30",
};

const getCategoryIcon = (category: string) => {
  if (category.includes("Mobile")) return <Smartphone className="w-4 h-4" />;
  if (category.includes("Web")) return <Globe className="w-4 h-4" />;
  if (category.includes("PC")) return <Monitor className="w-4 h-4" />;
  if (category.includes("Design")) return <PenTool className="w-4 h-4" />;
  if (category.includes("Research")) return <Layout className="w-4 h-4" />; // Or another icon
  return <Box className="w-4 h-4" />;
};

import { useMode } from "./ModeContext";

// ... existing imports

export default function UnifiedWorks() {
  const [emblaRef] = useEmblaCarousel({ loop: false, align: "start" }); // Loop false is better for changing content content dynamically usually
  const { mode } = useMode();

  const filteredProjects = React.useMemo(() => {
    switch (mode) {
      case "dev":
        return ALL_PROJECTS.filter((p) =>
          ["mmuta", "flippay", "adnova", "softbert"].includes(p.id)
        );
      case "eng":
        return ALL_PROJECTS.filter((p) =>
          ["ice-accretion", "energibot"].includes(p.id)
        );
      case "creative":
        return ALL_PROJECTS.filter((p) =>
          [
            "elizabeth-moi",
            "saavy-app",
            "elias-app",
            "compli",
            "olaidris-portfolio",
            "adnova-design",
            "energibot-design",
          ].includes(p.id)
        );
      default:
        return ALL_PROJECTS;
    }
  }, [mode]);

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans tracking-tight">
          Selected Works
        </h2>
        <p className="text-gray-400 max-w-2xl text-lg">
          The software I build when I&apos;m not predicting ice formations.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 overflow-visible">
        <div className="embla" ref={emblaRef}>
          <motion.div layout className="flex gap-6 touch-pan-y">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                  transition={{ duration: 0.4 }}
                  key={project.id}
                  className={`flex-[0_0_85vw] md:flex-[0_0_400px] min-w-0 relative`}
                >
                  <ProjectCard project={project} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  // Alternate card sizes visually if needed, for now unified height
  return (
    <div className="relative h-[450px] rounded-3xl overflow-hidden glass-panel border border-white/10 bg-white/5 backdrop-blur-xl group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-white/20 hover:scale-[1.02] active:scale-[0.98]">
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-transparent to-black/40 opacity-50`}
      />

      {/* Default View Content */}
      <div className="relative z-10 p-8 h-full flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md">
              {getCategoryIcon(project.category)}
            </div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-mono border ${
                statusColors[project.statusColor]
              }`}
            >
              {project.status}
            </span>
          </div>

          <h3 className="text-3xl font-bold mb-3 leading-tight">
            {project.title}
          </h3>
          <p className="text-sm font-mono opacity-60 mb-4">
            {project.category}
          </p>
          <p className="opacity-80 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 bg-white/5 rounded-md border border-white/5 text-gray-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Overlay - Metrics Reveal */}
      <div className="absolute inset-0 z-20 bg-black/80 backdrop-blur-xl p-8 flex flex-col justify-center opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
        <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
          <ArrowUpRight className="w-5 h-5 text-green-400" />
          Key Metrics
        </h4>
        <ul className="space-y-4">
          {project.metrics.map((metric, i) => (
            <li key={i} className="flex gap-3 text-sm">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0" />
              <span className="font-mono text-gray-300">{metric}</span>
            </li>
          ))}
        </ul>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white hover:underline"
          >
            View Project <ArrowUpRight className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}
