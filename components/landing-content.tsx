"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    name: "Conversation",
    avatar: "C",
    title: "NLP Model",
    description: "Engage in human-like conversations, whether you're drafting emails, writing essays, or seeking creative ideas. This model uses GPT-4o-mini to make interactions seamless and intuitive.",
  },
  {
    name: "Code",
    avatar: "C",
    title: "Code Generator",
    description: "Effortlessly generate and refine code with an AI fine-tuned to understand and write programming languages. Ideal for quick prototypes or optimizing your existing codebase.",
  },
  {
    name: "Image",
    avatar: "I",
    title: "Image Generator",
    description: "Bring your ideas to life with custom visuals created based on your prompts. Using DALL-E3, this model generates images that capture your vision with stunning accuracy.",
  },
  {
    name: "Whisper",
    avatar: "W",
    title: "Audio-to-Text",
    description: "Soon to be integrated, Whisper will convert your spoken words into text, making it easier to transcribe meetings, lectures, or any audio content with high precision.",
  },
];


export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">How You Can Use This AI</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {features.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}
