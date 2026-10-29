import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { BlogCard } from "@/components/blog-card"
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Button } from "@/components/ui/button"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { useEffect } from "react"
import agapayImage from "./assets/Agapay.jpg"
import anathemaImage from "./assets/Anathema.jpg"
import Particles from "./components/Particles.jsx"
import CircularCarousel from "./components/CircularCarousel.jsx"
import { Contact } from "./components/contact.jsx"
import StrokeText from "./components/StrokeText.jsx"
import { Divider } from "./components/ui/divider.jsx"



export default function App() {
  const [isLight, setTheme] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const tabVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  // const transition = { duration: 0.2, ease: "easeInOut" };
  useEffect(() => {
  // Snaps the window (or your main scroll container) back to the top
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // 'smooth' for a nice slide, 'instant' for a sharp snap
  });
}, [activeTab]);




const certifications = [
  { src: agapayImage, alt: 'A chrome sculpture', title: 'Iridescence' },
  { src: anathemaImage, alt: 'A figure on a white set', title: 'White Room' },
  { src: agapayImage, alt: 'A clay bust in profile', title: 'Clay Study', subtitle: 'Studio 04' }
];


const projectContent = {
  "Gem Minai - Discord AI Hoster": {
    text: "Gem Minai is a custom Discord bot hoster built using C# and the DSharpPlus library. Unlike simple scripts, this is a compiled executable that handles the integration of Google’s Gemini AI API directly into community servers. It features a hybrid command system supporting both traditional prefix commands and modern Discord Slash Commands for a better user experience. I also implemented a persistent config.json system to securely handle Discord Tokens and API keys.",
    link: "https://github.com/callmekaii/Gem-Minai",
    image: "https://github.com/user-attachments/assets/cf4df805-1c33-40a8-8ac4-527a8f027c53",
    features: [
      "AI-powered responses using Gemini API",
      "Interactive Discord bot commands",
      "Supports both prefix and slash commands",
      "Persistent config.json for API keys"
    ],
    badge: "C# Project / AI Project",
    description: "A C# powered Discord bot framework featuring Gemini AI integration supporting slash commands and prefix commands."
  },
  "Gem-Minai Localized": {
    text: "Gem Minai Localized is a .NET console application that provides a live voice interface to a custom Gemini AI persona using voice input and text-to-speech output. Interact with your personal AI assistant, Gem Minai, by speaking commands after using a trigger word.",
    link: "https://github.com/callmekaii/Gem-Minai-Localized",
    image: "https://svg-banners.vercel.app/api?type=luminance&text1=Gem-Minai&width=800&height=200",
    features: [
      "Voice Interaction: Speak to the AI using your microphone.",
      "Real-time Transcription: Uses Vosk for accurate, offline speech-to-text transcription.",
      "Gemini Integration: Leverages Google's Gemini model for natural language understanding and response generation.",
      "Custom Persona: Configured with a specific persona ('Gem Minai') for a personalized interaction experience.",
      "Voice Output: Utilizes KokoroTTS for generating natural-sounding voice responses.",
      "Trigger Word Activation: Responses are processed only when a predefined trigger word is detected in your spoken input.",
      "Screenshot Auto Upload: If Gem Minai detects 'screenshot' on your transcription, she will summarize what's on your current screen and answer if there are questions included in the screenshot."
    ],
    badge: "C# Project / AI Project",
    description: "A .NET application that provides a live conversation to a custom AI persona using voice input and text-to-speech output"

  },
  "RAG-Enhanced LLM Quiz Generator": {
    text: "Developed as a sophisticated academic tool, this project utilizes Retrieval-Augmented Generation (RAG) to transform static PDF documents into interactive learning assessments. By leveraging ChromaDB for vector storage and GPT4All for local inference, the system ensures data privacy while generating quizzes tailored to specific VARK learning styles.",
    link: "https://github.com/callmekaii/rag-enhanced-llm-quizgenerator",
    image: "https://raw.githubusercontent.com/callmekaii/rag-enhanced-llm-quizgenerator/refs/heads/main/Screenshot%202026-05-04%20004100.png", 
    features: [
      "Semantic search & PDF context retrieval using ChromaDB",
      "Localized AI inference via GPT4All for high data privacy",
      "VARK learning style assessment integration",
      "Automated quiz generation from unstructured educational data",
      "Modular architecture for seamless LLM model swapping"
    ],
    badge: "Python Project / AI Project",
    description: "An academic tool using RAG and ChromaDB to transform PDFs into quizzes."

  },
  "Agapay": {
  text: "Agapay is an NGO that promotes the reuse and upcycling of items by incentivizing users to help make the world a better place. It is an all-in-one platform where people can be part of an ecocentric community, donate, request, earn money, and more. An award-winning (PSC 9 Regional Finalist) circular economy platform I co-founded and designed, currently being brought to life through user-centric development.",
  link: "https://www.facebook.com/app.agapay",
  image: agapayImage,
  features: [
    "Profile Personalization - Add bios, flairs, verification, and agawards",
    "Gamified User Engagement with Points, Levels, and Leaderboards",
    "Analytics of Total Impact - CO2 Reduced, Weight Reduced and etc.",
    "Contribute/Request, Chatting/Communication, Post Filterations",
  ],
  description: "An NGO promoting the reuse and upcycling of items by incentivizing users to help make the world a better place.",
  badge: "Startup Project / Award Winning"
},

"Anathema": {
  text: "Anathema is a dark fantasy RPG engineered to explore the collision between humanity and a marginalized faction known as 'Anathemans.' The project features a system architecture designed to translate a complex narrative—centered around five indifferent Deities—into a playable, high-stakes experience. Currently in the development phase, the movement, visuals and sound effects can be experienced through the project link provided down below.",
  link: "https://play.unity.com/en/games/01c27b67-30b3-43b8-ad56-08776a0f6dde/anathemaitchfiles",
  image: anathemaImage, 
  features: [
    "Engineered core combat & movement systems",
    "Branching endings based on player choices",
    "Lore-Driven Mechanics"
  ],
  description: "A dark-themed exploration into game systems and mechanics, featuring custom combat logic and branching narratives.",
  badge: "Unity Project"
}

};



  return (
    <SidebarProvider>
      <AppSidebar setView={setActiveTab} />
      
      <main className="flex-1 min-w-0 min-h-screen bg-background transition-all duration-300">
        <header className="flex h-16 items-center gap-4 border-b px-6 sticky top-0 bg-background/95 backdrop-blur z-50">
          
          <SidebarTrigger />
          <div className="h-4 w-[1px] bg-border" /> 
          <h1 className="text-sm font-bold tracking-tight uppercase text-muted-foreground">
            Portfolio
          </h1>
          <div className="ml-auto flex items-center" onClick={() => setTheme(!isLight)}>
            <AnimatedThemeToggler />
          </div>
        </header>

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
  <Particles
    particleColors={["#ffffff","#ffffff","#ffffff"]}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    glow={0.5}
    twinkle={0.3}
    moveParticlesOnHover
    hoverEffect="parallax"
    sizeRandomness={1}
    shape="circle"
    depthOfField={0}
    connections={false}
    connectionDistance={110}
    particleHoverFactor={1}
    hoverRadius={140}
    drift="none"
    driftSpeed={1}
    alphaParticles={false}
    disableRotation={false}
    cameraDistance={20}
    variation={0}
    opacity={1}
    clickBurst
    intro
    lightMode={isLight}
/>
</div>

        <div className="p-6 md:p-10 lg:p-12 max-w-[1400px] mx-auto">
          {/* HOME SECTION */}
          <AnimatePresence mode="wait">
          {activeTab === "home" && (
            <motion.section
                key="home"
                variants={tabVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="mb-12"
              >
                <StrokeText
  text="Websites That Actually Work"
  strokeColor="#008f4c"
  strokeStyle="solid"
  strokeWidth={1.4}
  dashLength={10}
  drawDuration={1.4}
  fillDelay={0.05}
  stagger={0.05}
  ease="power2.out"
  trigger="mount"
  fillMode="wipe"
  wipeFrom="left"
  fontSize={256}
  fontWeight={800}
  letterSpacing={-4}
  marching={false}
  hoverRedraw
  shadow={false}
  fontFamily="inherit"
  reverse={false}
/>

<Divider text="How I Work" />

              <div className="flex flex-col gap-4 mt-4 mb-4"> 
                <span className="text-muted-foreground max-w-[700px] text-6xl"><span className="text-primary">Clean</span> structure.</span>
                <span className="text-muted-foreground max-w-[700px] text-6xl"><span className="text-primary">Thoughtful </span>motion.</span>
                <span className="text-muted-foreground max-w-[700px] text-6xl">Interfaces that don’t look generic.</span>
              </div>  
              

              <Divider text="Who Am I?" />
              <p className="text-lg text-muted-foreground max-w-[700px]">
                Hi! I'm&nbsp;
                <span className="text-2xl font-extrabold tracking-tight lg:text-2xl mb-2 text-foreground">
                  Kaiser Paul
                </span>
              </p>
              <p className="text-lg text-muted-foreground max-w-[700px]">
                Just a CS student at UC building stuff that makes sense. Currently messing around with local AI or AI in general, and making sure my UI doesn't look like it's from 2005.
              </p>
              <a href="#Contact">
                <Button className="mt-6 p-5">
                  Get in Touch
                </Button>
              </a>

              <Divider text="Certifications"/>
              <div style={{ width: '100%', height: '360px', position: 'relative' }}>
                <CircularCarousel
                  items={certifications}
                  preset="cylinder"
                  intro="rise"
                  cardWidth={600}
                  aspectRatio={2}
                  speed={14}
                  captions={true}
                  gap={50}
                  tilt={-5}
                  curve={1}
                  perspective={2500}
                  autoplay="drift"
                  interval={5}
                  direction="left"
                  momentum={0.6}
                  snap
                  pauseOnHover
                  focusOnClick
                  draggable
                  parallax={0.3}
                  stretch={0}
                  fadeColor="#000000"
                  depthFade={0.55}
                  innerShade={0.6}
                  cornerRadius={12}
              />
              </div>

              <Contact/>

            </motion.section>
          )}

          {/* PROJECTS SECTION */}
          {activeTab === "projects" && (
            <motion.div
                key="projects"
                variants={tabVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <section className="mb-5">
                  <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
                    Projects
                  </h2>
                </section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {Object.entries(projectContent).map(([title, project]) => (
                      <BlogCard
                        key={title}
                        title={title}
                        setView={setActiveTab}
                        image={project.image}
                        description={project.description}
                        badge={project.badge}
                      />
                    ))}

                </div>
            </motion.div>
          )}

          {/* DYNAMIC BLOG VIEW */}
            {!["home", "projects"].includes(activeTab) && (
              <motion.article key="blog-view" {...tabVariants}>
                <Button variant="ghost" onClick={() => setActiveTab("projects")} className="mb-4">
                  ← Back to Projects
                </Button>
                <h2 className="text-4xl font-bold mb-4">{activeTab}</h2>
                {projectContent[activeTab]?.image && (
                  <div className="w-full mb-8 overflow-hidden rounded-xl border bg-muted shadow-sm">
                    <img 
                      src={projectContent[activeTab].image} 
                      alt={activeTab}
                      className="aspect-[2/0.5] w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                )}
                <div className="mt-6 text-muted-foreground">
                  <p>{projectContent[activeTab]?.text || `${activeTab} section is under construction.`}</p>
                  
                  {/* The Features List */}
                  {projectContent[activeTab]?.features && (
                    <div className="mt-8">
                      <h3 className="text-xl font-bold text-foreground mb-4">Features</h3>
                      <ul className="list-disc list-inside space-y-2">
                        {projectContent[activeTab].features.map((feature, index) => (
                          <li key={index} className="text-muted-foreground">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <p className = "mt-4">View{" "}
                    <a 
                      href={projectContent[activeTab]?.link || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className = "text-blue-500 hover:text-blue-700">
                        Project Link
                      </a>
                    </p>
                </div>
              </motion.article>
            )}
            </AnimatePresence>

            <footer className="mt-20 py-6 border-t text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Kaiser Paul Nonog. Built with React.
            </footer>
        </div>
      </main>
    </SidebarProvider>
  )
}