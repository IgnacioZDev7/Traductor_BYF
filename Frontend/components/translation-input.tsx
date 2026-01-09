"use client"

import { useState } from "react"
import { Mic, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TranslationInputProps {
  value: string
  onChange: (text: string) => void
  onTranslate: () => void
  isLoading: boolean
  placeholder?: string
}

export default function TranslationInput({
  value,
  onChange,
  onTranslate,
  isLoading,
  placeholder = "Ingrese el texto a traducir...",
}: TranslationInputProps) {
  const [isListening, setIsListening] = useState(false)

  const handleVoiceInput = () => {
    // Check for Web Speech API support
    const SpeechRecognition =
      typeof window !== "undefined" && ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition)

    if (!SpeechRecognition) {
      alert("Tu navegador no soporta entrada por voz")
      return
    }

    const recognition = new SpeechRecognition()
    recognition.lang = "es-ES"
    recognition.continuous = false
    recognition.interimResults = false

    recognition.onstart = () => {
      setIsListening(true)
    }

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript
      onChange(value + " " + transcript)
    }

    recognition.onerror = () => {
      setIsListening(false)
    }

    recognition.onend = () => {
      setIsListening(false)
    }

    recognition.start()
  }

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-foreground">Texto original</label>
      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-4 rounded-lg border border-input bg-card text-foreground text-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          rows={4}
          aria-label="Texto a traducir"
        />
        <button
          onClick={handleVoiceInput}
          disabled={isListening}
          className={`absolute bottom-4 right-4 p-2 rounded-full transition-colors ${
            isListening ? "bg-destructive text-destructive-foreground" : "bg-muted hover:bg-border text-foreground"
          }`}
          aria-label="Entrada por voz"
        >
          <Mic size={20} />
        </button>
      </div>

      <Button
        onClick={onTranslate}
        disabled={isLoading || !value.trim()}
        className="w-full h-12 text-base font-semibold"
        size="lg"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Traduciendo...
          </>
        ) : (
          "Traducir"
        )}
      </Button>
    </div>
  )
}
