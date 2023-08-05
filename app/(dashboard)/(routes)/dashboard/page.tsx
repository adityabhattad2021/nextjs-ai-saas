"use client";
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { UserButton } from '@clerk/nextjs'
import { ArrowRight, Code, Code2, Image, MessageSquare, Music2Icon, VideoIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation"
  },
  {
    label: "Music Generation",
    icon: Music2Icon,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: "/music"
  },
  {
    label: "Image Generation",
    icon: Image,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/image"
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/video"
  },
  {
    label: "Code Generation",
    icon: Code2,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/code"
  },
]

export default function DashboardPage() {
  const router = useRouter();
  return (
    <main className="">
      <div className='mb-8 space-y-4'>
        <h2 className='text-2xl md:text-4xl font-bold text-center'>
          Explore the power of AI
        </h2>
        <p className='text-muted-foreground font-light text-sm md:text-lg text-center'>
          Use the power of AI for anything you can think of 🤯
        </p>
      </div>
      <div className='px-4 md:px-20 lg:px-32 space-y-4'>
        {
          tools.map((tool) => {
            return (
              <Card
                key={tool.href}
                className='p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer'
                onClick={() => router.push(tool.href)}
              >
                <div className='flex items-center gap-x-4 '>
                  <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                    <tool.icon
                      className={cn("w-8 h-8", tool.color)}
                    />
                  </div>
                  <div className='font-semibold'>
                    {tool.label}
                  </div>
                </div>
                <ArrowRight className='w-5 h-5' />
              </Card>
            )
          })
        }
      </div>
    </main>
  )
}