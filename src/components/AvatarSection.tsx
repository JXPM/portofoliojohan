"use client"

import { useEffect, useRef, useState } from "react"
import { MessageSquare, Volume2 } from "lucide-react"

export default function AvatarAssistant() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isTalking, setIsTalking] = useState(false)
  const [step, setStep] = useState<"idle" | "ask" | "summary" | "end">("idle")
  const [showBubble, setShowBubble] = useState(false)

  useEffect(() => {
    if (!audioRef.current) return
    const audio = audioRef.current

    const startTalking = () => setIsTalking(true)
    const stopTalking = () => setIsTalking(false)

    audio.addEventListener("play", startTalking)
    audio.addEventListener("ended", stopTalking)
    audio.addEventListener("pause", stopTalking)

    return () => {
      audio.removeEventListener("play", startTalking)
      audio.removeEventListener("ended", stopTalking)
      audio.removeEventListener("pause", stopTalking)
    }
  }, [])

  // Lance la première question
  const handleStart = () => {
    if (!audioRef.current) return
    audioRef.current.src = "/voice.mp3"
    audioRef.current.play()
    setShowBubble(true)
    setStep("ask")
  }

  // Gestion réponse Oui
  const handleYes = () => {
    if (!audioRef.current) return
    audioRef.current.src = "/summary.mp3" 
    audioRef.current.play()
    setStep("summary")
  }

  // Gestion réponse Non
  const handleNo = () => {
    if (!audioRef.current) return
    audioRef.current.src = "/end.mp3" 
    audioRef.current.play()
    setStep("end")
    setTimeout(() => setShowBubble(false), 4000)
  }

  return (
    <>
      <div className="fixed bottom-5 left-5 z-50">
        <div className="relative w-32">
          {/* Avatar */}
          <img
            src="/bitmoji.png"
            alt="Assistant IA"
            className="w-full h-auto"
          />

        {/* Bouton parler (bulle au-dessus de la tête) */}
        {step === "idle" && (
            <div className="absolute -top-8 left-1/2 translate-x-8 -translate-x-1/2 flex flex-col items-center">
        {/* Grande bulle */}
            <div className="bg-white shadow-md px-3 py-2 rounded-full flex items-center gap-1 cursor-pointer hover:bg-gray-100 transition">
                <button onClick={handleStart} className="flex items-center gap-1">
                    <MessageSquare className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">Parler</span>
                </button>
            </div>

        {/* Petits cercles pour effet "pensée" */}
        <div className="flex flex-col mt-1 space-y-1">
  <div className="w-3 h-3 bg-white rounded-full border border-gray-300 shadow-sm -translate-x-1"></div>
  <div className="w-2.5 h-2.5 bg-white rounded-full border border-gray-300 shadow-sm -translate-x-2"></div>
  <div className="w-2 h-2 bg-white rounded-full border border-gray-300 shadow-sm -translate-x-3"></div>
</div>
    </div>
    )}
        </div>

        {/* Bulle de dialogue */}
        {showBubble && (
          <div className="absolute -top-28 left-36 bg-white shadow-lg px-4 py-3 rounded-2xl max-w-xs text-sm text-gray-800">
            {step === "ask" && (
              <div>
                <p>Voulez-vous que je vous fasse un résumé de mon parcours ?</p>
                <div className="flex gap-3 mt-2 justify-end">
                  <button
                    onClick={handleYes}
                    className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Oui
                  </button>
                  <button
                    onClick={handleNo}
                    className="px-3 py-1 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
                  >
                    Non
                  </button>
                </div>
              </div>
            )}

            {step === "summary" && (
              <p>Voici un résumé de mon parcours…</p>
            )}

            {step === "end" && (
              <p>.....</p>
            )}
          </div>
        )}
      </div>

      {/* Audio voix */}
      <audio ref={audioRef} className="hidden" />
    </>
  )
}
