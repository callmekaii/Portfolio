import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { BlogCard } from "@/components/blog-card"

export default function App() {
  return (
    <SidebarProvider>
      {/* 1. The Sidebar itself */}
      <AppSidebar />

      {/* MAIN CONTAINER 
        - flex-1: Fills the remaining width next to the sidebar.
        - min-w-0: Essential for preventing layout overflow in flexbox.
        - transition-all: Makes the content resize smoothly when the sidebar toggles.
      */}
      <main className="flex-1 min-w-0 min-h-screen bg-background transition-all duration-300">
        
        {/* HEADER 
            Keeps the sidebar trigger and title in a neat row at the top.
        */}
        <header className="flex h-16 items-center gap-4 border-b px-6 sticky top-0 bg-background/95 backdrop-blur z-50">
          <SidebarTrigger />
          <div className="h-4 w-[1px] bg-border" /> 
          <h1 className="text-sm font-bold tracking-tight uppercase text-muted-foreground">
            Portfolio v1.0
          </h1>
        </header>

        {/* CONTENT SECTION */}
        <div className="p-6 md:p-10 lg:p-12 max-w-[1400px] mx-auto">
          
          {/* Page Intro */}
          <section className="mb-12">
            <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
              My Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-[700px]">
              Welcome! This is a collection of my recent work and thoughts on 
              web development, built using React, Tailwind, and shadcn/ui.
            </p>
          </section>

          {/* RESPONSIVE GRID 
              - 1 column on mobile
              - 2 columns on tablets (md)
              - 3 columns on desktops (lg)
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogCard
              title="Design Systems"
              description="How to build a consistent UI language using atomic design principles and React components."
            />
            <BlogCard
              title="Mastering State"
              description="A deep dive into useState, useReducer, and why lifting state up is crucial for clean code."
            />
            <BlogCard
              title="Responsive Layouts"
              description="Solving the common 'off-center' issues when working with dynamic sidebars and flex containers."
            />
          </div>

          {/* Footer space */}
          <footer className="mt-20 py-6 border-t text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kaiser Paul Nonog. Built with React.
          </footer>
        </div>
      </main>
    </SidebarProvider>
  )
}