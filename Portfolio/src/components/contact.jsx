import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Input } from "./ui/input"

export function Contact()
{
    return(
        <div className="flex-col w-full" id="Contact">
            <Card className="mt-6 p-5 max-w-lg p-10">
                <h2 className="text-4xl font-extrabold tracking-tight lg:text-2xl">Get in Touch</h2>
                <p className="text-lg leading-8 text-muted-foreground lg:text-base">I am always open to new opportunities and collaborations. If you have a project in mind or just want to say hello, feel free to reach out!</p>
                <span className="text-lg leading-8 text-muted-foreground lg:text-base">Name</span>
                <Input type="text" placeholder="Your Name" className="w-full mb-2 p-2 border rounded h-10" />
                <span className="text-lg leading-8 text-muted-foreground lg:text-base">Email</span>
                <Input type="email" placeholder="Your Email" className="w-full mb-2 p-2 border rounded h-10" />
                <span className="text-lg leading-8 text-muted-foreground lg:text-base">Message</span>
                <textarea type="text" placeholder="Your Message" className="w-full mb-2 p-2 border rounded h-32" />
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 mt-3 p-5">Send Message</Button>
            </Card>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">Alternatively, you can reach me directly via email:</p>
            
            <Button className="mt-6 p-5">
                <a href="mailto:your-email@example.com" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Send an Email
                </a>
            </Button>
        </div>
    )
}