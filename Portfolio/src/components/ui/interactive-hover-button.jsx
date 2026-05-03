import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

export function InteractiveHoverButton({
  children,
  className,
  ...props
}) {
  return (
    <button
      className={cn(
        // Changed w-auto to w-full to make it fill the container like a normal shadcn button
        "group bg-background relative w-full cursor-pointer overflow-hidden rounded-full border p-2 px-6 text-center font-semibold",
        className
      )}
      {...props}>
      
      <div className="flex items-center justify-center gap-2">
        {/* The expanding circle */}
        <div
          className="bg-primary h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-[100.8]"></div>
        
        <span
          className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>

      {/* The Hover State - Fixed the translate and width */}
      <div
        className="text-primary-foreground absolute inset-0 z-10 flex h-full w-full translate-x-full items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight className="size-4" />
      </div>
    </button>
  );
}
