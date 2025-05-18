"use client"

import { useEffect } from "react"
import { Logo } from "@/components/logo"

export default function Home() {
  useEffect(() => {
    // Redirect to the external PayGo Finance site
    window.location.href = "https://paygo-finance.vercel.app/"
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-[#f8f0f2]">
      <div className="w-full max-w-md flex flex-col items-center">
        <Logo className="w-full max-w-xs mb-8" animated />
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-4 text-purple-900">PayGo</h1>
          <p className="text-lg text-gray-600">Loading...</p>
        </div>
      </div>
    </main>
  )
}
