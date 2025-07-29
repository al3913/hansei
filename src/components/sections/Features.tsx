import Card from "@/components/ui/Card";

export default function Features() {
    return (
        <div className="flex flex-col md:flex-row gap-10 w-full justify-between">
            <div className="flex flex-col items-center justify-center gap-10">
                <div className="text-left w-full">
                    <h1>Plan.</h1>
                    <h1>Produce.</h1>
                    <h1>Publish..</h1>
                </div>
                <Card 
                    title="Titles & Thumbnails That Click" 
                    body="Optimized to perform and reflect who you are." 
                    angle="left" 
                />
                <Card 
                    title="Ongoing Creator Check-ins" 
                    body="Real conversations with a team that gets gaming, content, and where you're trying to go." 
                    angle="right" 
                />
            </div>
            <div className="flex flex-col items-center justify-start gap-10">
                <Card
                    title="Personalized Growth Strategy"
                    body="A long-term plan shaped around your voice, strengths, and goals. Not just what’s trending."
                    angle="left"
                />
                <Card
                    title="Analytics That Drive Growth"
                    body="See what’s resonating and what to improve without getting lost in the numbers."
                    angle="right"
                />
            </div>
            <div className="flex flex-col items-center justify-center gap-10">
                <Card
                    title="Stream-to-YouTube Editing"
                    body="Smart, watchable cuts from your VODs. Built for YouTube, not just repurposed Twitch clips."
                    angle="right"
                />
                <Card
                    title="Fully Done-for-You Publishing"
                    body="We handle uploads, scheduling, and optimization so you never have to worry about missing anything."
                    angle="left"
                />
            </div>
        </div>
    )
}

