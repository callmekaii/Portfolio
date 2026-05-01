import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function BlogCard({ title, description, image, setView }) {
  return (
    <Card className="relative mx-auto w-full max-w-sm overflow-hidden">
      {/* 1. The Dark Overlay - Makes text pop if it's over the image */}
      <div className="absolute inset-0 z-10 bg-black/35 h-[200px]" /> 
      
      {/* 2. The Image */}
      <img
        src={image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085"}
        alt="Cover"
        className="relative z-0 aspect-video w-full object-cover brightness-75 grayscale hover:grayscale-0 transition-all duration-300"
      />

      <CardHeader className="relative z-20">
        <div className="mb-2">
          <Badge variant="secondary">Featured</Badge>
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardFooter>
        <Button className="w-full" onClick={() => setView(title)}>
          Read Article
        </Button>
      </CardFooter>
    </Card>
  )
}