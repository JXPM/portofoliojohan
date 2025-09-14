"use client"

import { useEffect, useRef, useState } from "react"
import { MessageSquare } from "lucide-react"

export default function AvatarAssistant() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isTalking, setIsTalking] = useState(false)
  const [step, setStep] = useState<"idle" | "ask" | "summary" | "end">("idle")
  const [showBubble, setShowBubble] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(false) // Empêche double clic

  useEffect(() => {
    if (!audioRef.current) return
    const audio = audioRef.current

    const startTalking = () => setIsTalking(true)
    const stopTalking = () => {
      setIsTalking(false)
      // Masque la bulle automatiquement après la fin de l'audio
      if (step === "summary" || step === "end") {
        setTimeout(() => {
          setShowBubble(false)
          setStep("idle")
        }, 3000)
      }
      setButtonDisabled(false)
    }

    audio.addEventListener("play", startTalking)
    audio.addEventListener("ended", stopTalking)
    audio.addEventListener("pause", stopTalking)

    return () => {
      audio.removeEventListener("play", startTalking)
      audio.removeEventListener("ended", stopTalking)
      audio.removeEventListener("pause", stopTalking)
    }
  }, [step])

  const handleStart = () => {
    if (!audioRef.current || buttonDisabled) return
    audioRef.current.src = "/voice.mp3"
    audioRef.current.play()
    setShowBubble(true)
    setStep("ask")
    setButtonDisabled(true)
  }

  const handleYes = () => {
    if (!audioRef.current) return
    audioRef.current.src = "/summary.mp3" 
    audioRef.current.play()
    setStep("summary")
  }

  const handleNo = () => {
    if (!audioRef.current) return
    audioRef.current.src = "/end.mp3" 
    audioRef.current.play()
    setStep("end")
  }

  return (
    <>
      <div className="fixed bottom-5 left-5 z-50">
        <div className="relative w-20 sm:w-32">
          <img src="/bitmoji.png" alt="Assistant IA" className="w-full h-auto" />

          {step === "idle" && (
            <div className="absolute -top-6 sm:-top-8 left-1/2 translate-x-8 -translate-x-1/2 flex flex-col items-center">
              <div className="bg-white shadow-md px-2 sm:px-3 py-1 sm:py-2 rounded-full flex items-center gap-1 cursor-pointer hover:bg-gray-100 transition">
                <button onClick={handleStart} disabled={buttonDisabled} className="flex items-center gap-1 text-xs sm:text-sm">
                  <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                  <span className="text-gray-700">Parler</span>
                </button>
              </div>

              <div className="flex flex-col mt-1 space-y-1">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full border border-gray-300 shadow-sm -translate-x-1"></div>
                <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 bg-white rounded-full border border-gray-300 shadow-sm -translate-x-2"></div>
                <div className="w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full border border-gray-300 shadow-sm -translate-x-3"></div>
              </div>
            </div>
          )}
        </div>

        {showBubble && (
          <div className="absolute -top-20 sm:-top-28 left-24 sm:left-36 bg-white shadow-lg px-3 sm:px-4 py-2 sm:py-3 rounded-2xl max-w-xs text-xs sm:text-sm text-gray-800">
            {step === "ask" && (
              <div>
                <p>Voulez-vous que je vous fasse un résumé de mon parcours ?</p>
                <div className="flex gap-2 sm:gap-3 mt-2 justify-end">
                  <button
                    onClick={handleYes}
                    className="px-2 sm:px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-xs sm:text-sm"
                  >
                    Oui
                  </button>
                  <button
                    onClick={handleNo}
                    className="px-2 sm:px-3 py-1 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 text-xs sm:text-sm"
                  >
                    Non
                  </button>
                </div>
              </div>
            )}
            {step === "summary" && <p>Voici un résumé de mon parcours…</p>}
            {step === "end" && <p>.....</p>}
          </div>
        )}
      </div>

      <audio ref={audioRef} className="hidden" />
    </>
  )
}
