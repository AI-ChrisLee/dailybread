"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, ChevronLeft, ChevronRight, ArrowRight, Headphones, Youtube, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import BookGridLoop from "@/components/BookGridLoop"
import EmailModal from "@/components/EmailModal"
import { useState } from "react"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo-section')
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white">
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
              <span className="text-white text-sm font-medium">Designed for Christian entrepreneurs</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              Build Unshakeable Faith in 15 Minutes a Day
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 px-4 md:px-0 font-medium">
              The only micro-learning platform that teaches biblical self-discipline through practical daily exercises.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-100 font-bold px-6 py-4 md:px-8 md:py-6 text-lg w-full sm:w-auto"
                onClick={() => setIsModalOpen(true)}
              >
                Get started
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-black font-bold px-6 py-4 md:px-8 md:py-6 text-lg w-full sm:w-auto"
                onClick={scrollToDemo}
              >
                <Headphones className="mr-2 h-5 w-5" />
                Listen to day 1
              </Button>
            </div>
          </div>

          {/* 28-Day Journey Grid - Looping Animation */}
          <div className="mt-8 md:mt-16">
            <div className="relative overflow-hidden max-w-[350px] sm:max-w-[650px] md:max-w-[900px] lg:max-w-[1100px] mx-auto">
              <div className="animate-slide-grid flex gap-6">
                <BookGridLoop />
                {/* Duplicate for seamless loop */}
                <BookGridLoop />
              </div>
              {/* Gradient overlays for smooth edges */}
              <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section className="bg-[#F5F5F5]">
        <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 md:mb-12">
              Hear directly from Chris.
            </h2>
            
            <div className="space-y-4 mb-12">
              <p className="text-lg leading-relaxed" style={{ lineHeight: '1.8', minHeight: '16px' }}>
                Five years ago, I started my marketing agency. It grew beyond what I imagined—great clients, solid team, financial stability. <strong>But success didn&apos;t fill the void I felt.</strong>
              </p>
              <p className="text-lg leading-relaxed" style={{ lineHeight: '1.8', minHeight: '16px' }}>
                <strong>I&apos;d hit my limit</strong> spiritually, emotionally, mentally. When I turned to church for answers, I kept hearing the same thing: &quot;Just pray more. Just have faith.&quot;
              </p>
              <p className="text-lg leading-relaxed" style={{ lineHeight: '1.8', minHeight: '16px' }}>
                But my analytical mind needed more. I needed <strong>practical methods</strong>, not platitudes. That&apos;s when I went deeper into Scripture itself. I found that the Bible doesn&apos;t just say &quot;have faith&quot;—it gives us <strong>practical commands</strong>:
              </p>
              
              {/* Bible Quotes */}
              <div className="space-y-4 my-8">
                <blockquote className="text-lg italic text-gray-700 font-medium text-left">
                  &quot;Add to your faith... self-control&quot;
                  <cite className="block text-sm mt-1 not-italic">— 2 Peter 1:5-6</cite>
                </blockquote>
                <blockquote className="text-lg italic text-gray-700 font-medium text-left">
                  &quot;Discipline your body and keep it under control&quot;
                  <cite className="block text-sm mt-1 not-italic">— 1 Corinthians 9:27</cite>
                </blockquote>
                <blockquote className="text-lg italic text-gray-700 font-medium text-left">
                  &quot;A man without self-control is like a city broken into and left without walls&quot;
                  <cite className="block text-sm mt-1 not-italic">— Proverbs 25:28</cite>
                </blockquote>
              </div>
              
              <p className="text-lg leading-relaxed" style={{ lineHeight: '1.8', minHeight: '16px' }}>
                This platform is the resource I wish I&apos;d had—<strong>practical daily exercises</strong> that build <strong>real faith through disciplined action</strong>.
              </p>
            </div>
            
            {/* Profile Section */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-4 md:gap-6">
                {/* Profile Image */}
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-300">
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <span className="text-xl font-bold">C</span>
                  </div>
                </div>
                
                {/* Name and Title */}
                <div>
                  <h3 className="text-base font-black">Chris Lee</h3>
                  <p className="text-gray-600 text-sm font-medium">Founder</p>
                  {/* Social Badges */}
                  <div className="flex gap-2 mt-1">
                    <a 
                      href="#" 
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-3.5 w-3.5" />
                    </a>
                    <a 
                      href="#" 
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                      aria-label="YouTube"
                    >
                      <Youtube className="h-3.5 w-3.5" />
                    </a>
                    <a 
                      href="#" 
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Demo Video Section */}
          <div className="mt-16">
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                {/* Video player placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full p-6 mb-4 inline-block">
                      <Play className="h-12 w-12 text-white" fill="currentColor" />
                    </div>
                    <h3 className="text-base md:text-xl font-bold text-white mb-2">
                      How to Use These Tools to Transform Your Faith
                    </h3>
                    <p className="text-sm md:text-base text-gray-300">3 minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo-section" className="bg-white scroll-mt-0">
        <div className="container mx-auto px-6 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-2 text-center">
            Listen to your first lesson
          </h2>
          <p className="text-gray-600 text-center mb-8 md:mb-12">
            5-minute preview • No signup required
          </p>
          
          <Card className="max-w-4xl mx-auto border-2 border-black">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Book Cover */}
                <div className="relative aspect-[3/4] bg-black">
                  <Image
                    src="/images/day1-david-new.png"
                    alt="David's co-founder betrayal playbook"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Audio Player and Content */}
                <div className="p-4 sm:p-6 md:p-8 space-y-4 md:space-y-6">
                  {/* Audio Controls */}
                  <div className="border-2 border-black p-4 md:p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <Button 
                        size="icon" 
                        variant="outline" 
                        className="border-2 border-black text-black hover:bg-black hover:text-white"
                      >
                        <Play className="h-4 w-4" />
                      </Button>
                      <div className="flex-1">
                        <div className="h-1 bg-gray-200">
                          <div className="h-full bg-black w-1/5"></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-2">
                          <span>00:00</span>
                          <span>05:00</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <p className="text-sm text-gray-600 mb-2 uppercase tracking-wider font-medium">Lesson 1</p>
                    <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4">
                      David&apos;s co-founder betrayal playbook
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">
                      David faced betrayal from his closest ally and survived. In this lesson, discover the 
                      3-step framework he used to exit gracefully while keeping his equity and reputation intact.
                    </p>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between pt-6 border-t-2 border-gray-200">
                    <Button variant="ghost" className="text-gray-400 hover:text-black p-0">
                      <ChevronLeft className="h-4 w-4 mr-1" />
                      Previous
                    </Button>
                    <span className="text-sm text-gray-600 font-medium">1 / 28</span>
                    <Button variant="ghost" className="text-black hover:text-gray-700 p-0">
                      Next
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="mt-6">
                    <Button 
                      size="lg" 
                      className="w-full bg-black text-white hover:bg-gray-900 font-medium"
                      onClick={() => setIsModalOpen(true)}
                    >
                      Join Early Access Waitlist
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Business Name */}
            <div>
              <h3 className="text-lg md:text-xl font-black">dailybread.ceo</h3>
              <p className="text-xs md:text-sm text-gray-400 mt-1">Biblical wisdom for modern founders</p>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-left">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} DailyBread. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      
      {/* Email Modal */}
      <EmailModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </main>
  )
}