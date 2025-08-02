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

export default function BookGrid() {
  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo-section')
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full relative">
      {/* Desktop view - 4 columns */}
      <div className="hidden md:block">
        <div className="relative overflow-hidden">
          <div className="grid grid-cols-4 gap-6">
            {/* Show only first 4 days */}
            {lessons.slice(0, 4).map((lesson) => (
            <Card 
              key={lesson.id} 
              className={cn(
                "border-2 transition-all duration-300 relative",
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
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-4 pt-12">
                    <h4 className="font-black text-base leading-tight text-white">
                      {lesson.title}
                    </h4>
                  </div>
                </>
              ) : (
                /* Placeholder for days without images */
                <div className="w-full h-full bg-gray-900 flex items-center justify-center p-4">
                  <h4 className="font-black text-base leading-tight text-gray-600 text-center">
                    {lesson.title}
                  </h4>
                </div>
              )}
              
              {/* Day label at top */}
              <div className="absolute top-4 left-4">
                <p className="text-white text-sm font-bold uppercase tracking-wider">
                  Day {lesson.day}
                </p>
              </div>
              
              {/* Lock icon for inactive lessons */}
              {!lesson.isActive && (
                <div className="absolute top-4 right-4">
                  <Lock className="w-5 h-5 text-gray-300" />
                </div>
              )}
              
              {/* Play button overlay for Day 1 */}
              {lesson.isActive && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={scrollToDemo}
                    className="bg-white/90 hover:bg-white text-black rounded-full p-6 transition-all hover:scale-110 shadow-2xl"
                    aria-label="Play lesson"
                  >
                    <Play className="h-8 w-8 ml-1" fill="currentColor" />
                  </button>
                </div>
              )}
            </div>
            
            {/* Subtitle in separate box below image */}
            <CardContent className="p-4">
              <p className={cn(
                "text-xs leading-relaxed",
                lesson.isActive ? "text-gray-300" : "text-gray-600"
              )}>
                {lesson.subtitle}
              </p>
            </CardContent>
            </Card>
          ))}
        </div>
        
          {/* Second row - only show top 20% */}
          <div className="grid grid-cols-4 gap-6 mt-6" style={{ marginBottom: '-280px' }}>
            {lessons.slice(4, 8).map((lesson) => (
            <Card 
              key={lesson.id} 
              className="border-2 border-gray-600 bg-gray-900/50 relative opacity-40"
            >
              <div className="relative w-full aspect-[3/4] bg-gray-900">
                <div className="absolute top-4 left-4">
                  <p className="text-gray-500 text-sm font-bold uppercase tracking-wider">
                    Day {lesson.day}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
          {/* Gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none" />
        </div>
      </div>
      
      {/* Mobile view - 1 column */}
      <div className="md:hidden">
        <div className="relative overflow-hidden">
          <div className="space-y-4">
            {/* Show only Day 1 fully */}
            {lessons.slice(0, 1).map((lesson) => (
              <Card 
                key={lesson.id} 
                className={cn(
                  "border-2 transition-all duration-300 relative",
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
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-4 pt-12">
                        <h4 className="font-black text-base leading-tight text-white">
                          {lesson.title}
                        </h4>
                      </div>
                    </>
                  ) : (
                    /* Placeholder for days without images */
                    <div className="w-full h-full bg-gray-900 flex items-center justify-center p-4">
                      <h4 className="font-black text-base leading-tight text-gray-600 text-center">
                        {lesson.title}
                      </h4>
                    </div>
                  )}
                  
                  {/* Day label at top */}
                  <div className="absolute top-4 left-4">
                    <p className="text-white text-sm font-bold uppercase tracking-wider">
                      Day {lesson.day}
                    </p>
                  </div>
                  
                  {/* Lock icon for inactive lessons */}
                  {!lesson.isActive && (
                    <div className="absolute top-4 right-4">
                      <Lock className="w-5 h-5 text-gray-300" />
                    </div>
                  )}
                  
                  {/* Play button overlay for Day 1 */}
                  {lesson.isActive && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={scrollToDemo}
                        className="bg-white/90 hover:bg-white text-black rounded-full p-6 transition-all hover:scale-110 shadow-2xl"
                        aria-label="Play lesson"
                      >
                        <Play className="h-8 w-8 ml-1" fill="currentColor" />
                      </button>
                    </div>
                  )}
                </div>
                
                {/* Subtitle in separate box below image */}
                <CardContent className="p-4">
                  <p className={cn(
                    "text-xs leading-relaxed",
                    lesson.isActive ? "text-gray-300" : "text-gray-600"
                  )}>
                    {lesson.subtitle}
                  </p>
                </CardContent>
              </Card>
            ))}
            
            {/* Day 2 - show 60% with overlay */}
            <div className="relative" style={{ height: '320px', overflow: 'hidden' }}>
              {lessons.slice(1, 2).map((lesson) => (
                <Card 
                  key={lesson.id} 
                  className="border-2 border-gray-600 bg-gray-900/50 cursor-not-allowed relative"
                >
                  <div className="relative w-full aspect-[3/4] bg-black overflow-hidden">
                    {lesson.hasImage && (
                      <Image
                        src={lesson.imagePath || ""}
                        alt={lesson.title}
                        fill
                        className="object-cover opacity-50"
                      />
                    )}
                    
                    {/* Day label at top */}
                    <div className="absolute top-4 left-4">
                      <p className="text-white text-sm font-bold uppercase tracking-wider">
                        Day {lesson.day}
                      </p>
                    </div>
                    
                    {/* Lock icon */}
                    <div className="absolute top-4 right-4">
                      <Lock className="w-5 h-5 text-gray-300" />
                    </div>
                    
                    {/* Title overlay at bottom of image */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-4 pt-12">
                      <h4 className="font-black text-base leading-tight text-white">
                        {lesson.title}
                      </h4>
                    </div>
                  </div>
                  
                  {/* Subtitle in separate box below image */}
                  <CardContent className="p-4">
                    <p className="text-xs leading-relaxed text-gray-600">
                      {lesson.subtitle}
                    </p>
                  </CardContent>
                </Card>
              ))}
              
              {/* Black overlay gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional days text */}
      <div className="mt-4 md:mt-8 text-center">
        <p className="text-gray-400 text-sm">
          + 24 more days of founder wisdom
        </p>
        <p className="text-gray-500 text-xs mt-2">
          New lessons unlock daily at 6am
        </p>
      </div>
    </div>
  )
}