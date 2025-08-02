"use client"

import { useState } from "react"
import { X, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EmailModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function EmailModal({ isOpen, onClose }: EmailModalProps) {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address")
      setIsLoading(false)
      return
    }

    // Simulate API call - replace with your actual email service
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsSuccess(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false)
        setEmail("")
        onClose()
      }, 3000)
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full relative animate-in fade-in zoom-in duration-300">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-8">
          {!isSuccess ? (
            <>
              {/* Header */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-black mb-2">
                  Get the Full 15-Minute Lesson
                </h2>
                <p className="text-gray-600">
                  Complete Day 1 audio lesson sent instantly to your inbox
                </p>
              </div>

              {/* Benefits */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <p className="font-bold text-sm mb-3">What you'll get in Day 1:</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>David's 3-step framework for handling co-founder betrayal</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>How to exit gracefully while keeping equity & reputation</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Full 15-minute audio lesson (not just the preview)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Transcript & action steps PDF included</span>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none transition-colors"
                    required
                    autoFocus
                  />
                  {error && (
                    <p className="text-red-500 text-sm mt-1">{error}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-black text-white hover:bg-gray-900 font-medium"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Get Day 1 Full Version"}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  No spam, unsubscribe anytime. By signing up, you agree to our privacy policy.
                </p>
              </form>
            </>
          ) : (
            /* Success state */
            <div className="text-center py-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-black mb-2">Check your inbox!</h3>
              <p className="text-gray-600">
                We've sent the full Day 1 lesson to {email}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}