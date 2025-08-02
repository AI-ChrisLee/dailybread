"use client"

import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Lock, Play } from "lucide-react"
import Image from "next/image"

interface Lesson {
  id: number
  day: number
  title: string
  subtitle: string
  isActive: boolean
  hasImage?: boolean
  imagePath?: string
}

const lessons: Lesson[] = [
  {
    id: 1,
    day: 1,
    title: "David's co-founder betrayal playbook",
    subtitle: "70% of startups die from founder conflicts",
    isActive: true,
    hasImage: true,
    imagePath: "/images/day1-david-new.png"
  },
  {
    id: 2,
    day: 2,
    title: "Solomon made the same scaling mistake you're making right now",
    subtitle: "Every founder who hits $10M faces Solomon's problem",
    isActive: false,
    hasImage: true,
    imagePath: "/images/day2-solomon-new.png"
  },
  {
    id: 3,
    day: 3,
    title: "Moses burned out exactly how you're about to",
    subtitle: "The 2-million-user problem no one warns you about",
    isActive: false,
    hasImage: true,
    imagePath: "/images/day3-moses-new.png"
  },
  {
    id: 4,
    day: 4,
    title: "Joseph turned a prison sentence into Series A funding",
    subtitle: "Your worst constraint might be your best opportunity",
    isActive: false,
    hasImage: true,
    imagePath: "/images/day4-joseph-new.png"
  },
  {
    id: 5,
    day: 5,
    title: "Paul's remote empire building strategy",
    subtitle: "Managing distributed teams across 3 continents",
    isActive: false,
    hasImage: false
  },
  {
    id: 6,
    day: 6,
    title: "Nehemiah's 52-day capital raise",
    subtitle: "From zero to funded in under 2 months",
    isActive: false,
    hasImage: false
  },
  {
    id: 7,
    day: 7,
    title: "Peter's billion dollar pivot",
    subtitle: "When to abandon your original vision",
    isActive: false,
    hasImage: false
  },
  {
    id: 8,
    day: 8,
    title: "Daniel's hostile takeover survival guide",
    subtitle: "Thriving when investors turn against you",
    isActive: false,
    hasImage: false
  }
]

export default function BookGridLoop() {
  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo-section')
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="flex gap-6">
      {lessons.map((lesson) => (
        <Card 
          key={lesson.id} 
          className={cn(
            "border-2 transition-all duration-300 relative flex-shrink-0 w-[200px] md:w-[280px] lg:w-[350px]",
            lesson.isActive 
              ? "border-white bg-transparent hover:bg-white/10 cursor-pointer overflow-hidden" 
              : "border-gray-600 bg-gray-900/50 cursor-not-allowed"
          )}
        >
          {/* Show book cover or placeholder */}
          <div className="relative w-full aspect-[3/4] bg-black overflow-hidden">
            {lesson.hasImage ? (
              <>
                <Image
                  src={lesson.imagePath || ""}
                  alt={lesson.title}
                  fill
                  className={cn(
                    "object-cover",
                    !lesson.isActive && "opacity-50"
                  )}
                />
                
                {/* Title overlay at bottom of image */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-4 md:p-6 pt-12 md:pt-16">
                  <h4 className="font-black text-base md:text-xl lg:text-2xl leading-tight text-white">
                    {lesson.title}
                  </h4>
                </div>
              </>
            ) : (
              /* Placeholder for days without images */
              <div className="w-full h-full bg-gray-900 flex items-center justify-center p-4 md:p-6">
                <h4 className="font-black text-base md:text-xl lg:text-2xl leading-tight text-gray-600 text-center">
                  {lesson.title}
                </h4>
              </div>
            )}
            
            {/* Day label at top */}
            <div className="absolute top-3 left-3">
              <p className="text-white text-sm lg:text-base font-bold uppercase tracking-wider">
                Day {lesson.day}
              </p>
            </div>
            
            {/* Lock icon for inactive lessons */}
            {!lesson.isActive && (
              <div className="absolute top-3 right-3">
                <Lock className="w-5 h-5 lg:w-6 lg:h-6 text-gray-300" />
              </div>
            )}
            
            {/* Play button overlay for Day 1 */}
            {lesson.isActive && (
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={scrollToDemo}
                  className="bg-white/90 hover:bg-white text-black rounded-full p-5 lg:p-6 transition-all hover:scale-110 shadow-2xl"
                  aria-label="Play lesson"
                >
                  <Play className="h-8 w-8 lg:h-10 lg:w-10 ml-0.5" fill="currentColor" />
                </button>
              </div>
            )}
          </div>
          
          {/* Subtitle in separate box below image */}
          <CardContent className="p-4 lg:p-5">
            <p className={cn(
              "text-sm lg:text-base leading-relaxed",
              lesson.isActive ? "text-gray-300" : "text-gray-600"
            )}>
              {lesson.subtitle}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}