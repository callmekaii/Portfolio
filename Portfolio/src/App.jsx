import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { BlogCard } from "@/components/blog-card"
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Button } from "@/components/ui/button"

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const tabVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  const transition = { duration: 0.2, ease: "easeInOut" };

const projectContent = {
  "Gem Minai - Discord AI Hoster": {
    text: "Gem Minai is a custom Discord bot hoster built using C# and the DSharpPlus library. Unlike simple scripts, this is a compiled executable that handles the integration of Google’s Gemini AI API directly into community servers. It features a hybrid command system supporting both traditional prefix commands and modern Discord Slash Commands for a better user experience. I also implemented a persistent config.json system to securely handle Discord Tokens and API keys.",
    link: "https://github.com/callmekaii/Gem-Minai",
    image: "https://github.com/user-attachments/assets/cf4df805-1c33-40a8-8ac4-527a8f027c53"
  },
  "Mastering State": {
    text: "Deep dive into React state management...",
    link: "#"
  },
  "Responsive Layouts": {
    text: "Solving flexbox headaches...",
    link: "#
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
                    image = "https://github.com/user-attachments/assets/cf4df805-1c33-40a8-8ac4-527a8f027c53"
                    description="A C# powered Discord bot framework featuring Gemini AI integration supporting slash commands."
                    badge="C# Project"
                  />
                  <BlogCard
                    title="Mastering State"
                    setView={setActiveTab}
                    description="A deep dive into useState, useReducer, and why lifting state up is crucial for clean code."
                  />
                  <BlogCard
                    title="Responsive Layouts"
                    setView={setActiveTab}
                    description="Solving the common 'off-center' issues when working with dynamic sidebars and flex containers."
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
                <h2 className="text-4xl font-bold">{activeTab}</h2>
                {projectContent[activeTab]?.image && (
                  <div className="w-full mb-8 overflow-hidden rounded-xl border bg-muted shadow-sm">
                    <img 
                      src={projectContent[activeTab].image} 
                      alt={activeTab}
                      className="aspect-[3/1] w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                )}
                <div className="mt-6 text-muted-foreground">
                  <p>{projectContent[activeTab]?.text || `${activeTab} section is under construction.`}</p>
                  <p className = "mt-4">View{" "}
                    <a 
                      href={projectContent[activeTab]?.link || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className = "text-blue-500 hover:text-blue-700">
                        Github Link
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