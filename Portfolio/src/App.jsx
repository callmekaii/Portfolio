import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { BlogCard } from "@/components/blog-card"
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Button } from "@/components/ui/button"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { useEffect } from "react"

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const tabVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  const transition = { duration: 0.2, ease: "easeInOut" };
  useEffect(() => {
  // Snaps the window (or your main scroll container) back to the top
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // 'smooth' for a nice slide, 'instant' for a sharp snap
  });
}, [activeTab]);

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
    ]
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
    ]
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
    ]
  },
  "Agapay": {
  text: "Agapay is an NGO that promotes the reuse and upcycling of items by incentivizing users to help make the world a better place. It is an all-in-one platform where people can be part of an ecocentric community, donate, request, earn money, and more. An award-winning (PSC 9 Regional Finalist) circular economy platform I co-founded and designed, currently being brought to life through user-centric development.",
  link: "https://www.facebook.com/app.agapay",
  image: "https://media.discordapp.net/attachments/946858026160230430/1298999468779110430/Last_Page.jpg?ex=6a008607&is=69ff3487&hm=185bd4e8e50a958e41e8788ae129843250a38cb5d47d53c618016e37e40b5b84&=&format=webp&width=513&height=513",
  features: [
    "Profile Personalization - Add bios, flairs, verification, and agawards",
    "Gamified User Engagement with Points, Levels, and Leaderboards",
    "Analytics of Total Impact - CO2 Reduced, Weight Reduced and etc.",
    "Contribute/Request, Chatting/Communication, Post Filterations",
  ]
},

"Anathema": {
  text: "Anathema is a dark fantasy RPG engineered to explore the collision between humanity and a marginalized faction known as 'Anathemans.' The project features a robust system architecture designed to translate a complex narrative—centered around five indifferent Deities—into a playable, high-stakes experience. Currently in the development phase, the core systems prioritize narrative logic and fluid mechanical interaction.",
  link: "https://play.unity.com/en/games/01c27b67-30b3-43b8-ad56-08776a0f6dde/anathemaitchfiles",
  image: "https://cdn.discordapp.com/attachments/946858026160230430/1477310372456300564/IMG_20260227_103719_410.jpg?ex=6a0094ff&is=69ff437f&hm=8e05df6311a21fc9cec83af6a3561cfc10bf33549c5960c799f24144b4ceb64d", 
  features: [
    "Engineered core combat & movement systems",
    "Branching endings based on player choices",
    "Lore-Driven Mechanics"
  ]
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
            Portfolio v1.0
          </h1>
          <div className="ml-auto flex items-center">
            <AnimatedThemeToggler />
          </div>
        </header>

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
              <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
                My Portfolio
              </h2>
              <p className="text-lg text-muted-foreground max-w-[700px]">
                Just a CS student at UC building stuff that makes sense. Currently messing around with local AI or AI in general, and making sure my UI doesn't look like it's from 2005.
              </p>
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
                  <BlogCard
                    title="Gem Minai - Discord AI Hoster"
                    setView={setActiveTab}
                    image = {projectContent["Gem Minai - Discord AI Hoster"].image}
                    description="A C# powered Discord bot framework featuring Gemini AI integration supporting slash commands and prefix commands."
                    badge="C# Project / AI Project"
                  />
                  <BlogCard
                    title="Gem-Minai Localized"
                    setView={setActiveTab}
                    image = {projectContent["Gem-Minai Localized"].image}
                    description="A .NET application that provides a live conversation to a custom AI persona using voice input and text-to-speech output"
                    badge="C# Project / AI Project"
                  />
                  <BlogCard
                    title="RAG-Enhanced LLM Quiz Generator"
                    setView={setActiveTab}
                    image = {projectContent["RAG-Enhanced LLM Quiz Generator"].image}
                    description="An academic tool using RAG and ChromaDB to transform PDFs into quizzes."
                    badge="Python Project / AI Project"
                  />
                  <BlogCard
                    title="Agapay"
                    setView={setActiveTab}
                    image = {projectContent["Agapay"].image}
                    description="An NGO promoting the reuse and upcycling of items by incentivizing users to help make the world a better place."
                    badge="Startup Project"
                  />
                  <BlogCard
                    title="Anathema"
                    setView={setActiveTab}
                    image = {projectContent["Anathema"].image}
                    description="A dark-themed exploration into game systems and mechanics, featuring custom combat logic and branching narratives."
                    badge="Unity Project"
                  />
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