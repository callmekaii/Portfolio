import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"

export function BlogCard({ title, description, image, setView, badge }) {
  return (
    <Card className="relative mx-auto w-full max-w-sm overflow-hidden flex flex-col">
      
      {/* 1. WRAPPER FOR IMAGE + OVERLAY */}
      <div className="relative aspect-video w-full overflow-hidden">
        {/* The Dark Overlay - Now perfectly matched to image size */}
        <div className="absolute inset-0 z-10 bg-black/35" /> 
        
        {/* The Image */}
        <img
          src={image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085"}
          alt="Cover"
          className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
        />
      </div>

      <CardHeader className="relative z-20 flex-grow">
        <div className="mb-2">
          <Badge variant="secondary">{badge || "Featured"}</Badge>
        </div>
        <CardTitle className="line-clamp-1">{title}</CardTitle>
        <CardDescription className="line-clamp-4">{description}</CardDescription>
      </CardHeader>

      <CardFooter>
        <InteractiveHoverButton onClick={() => setView(title)}>
          Read Article
        </InteractiveHoverButton>
      </CardFooter>
    </Card>
  )
}