"use client"

import type React from "react"

import { Volume2 } from "lucide-react"

interface TranslationOutputProps {
  text: string
  onPlayAudio: () => void
  onCopy: () => void
  audioRef: React.RefObject<HTMLAudioElement>
}

export default function TranslationOutput({ text, onPlayAudio, onCopy, audioRef }: TranslationOutputProps) {
  // Highlight medical terms in bold (example)
  const highlightedText = text.replace(/(médico|paciente|medicamento|descanso|medicina)/gi, "<strong>$1</strong>")

  return (
    <div className="bg-card border border-border rounded-lg p-6 space-y-4 shadow-sm">
      <h2 className="text-sm font-medium text-foreground">Texto traducido</h2>

      <div
        className="text-xl sm:text-2xl font-medium text-foreground leading-relaxed bg-muted p-4 rounded-lg"
        dangerouslySetInnerHTML={{ __html: highlightedText }}
      />

      <div className="flex gap-3 flex-wrap">
        <button
          onClick={onPlayAudio}
          className="flex items-center gap-2 px-5 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors"
          aria-label="Reproducir audio"
        >
          <Volume2 size={20} />
          <span className="hidden sm:inline">Reproducir audio</span>
          <span className="sm:hidden">Audio</span>
        </button>

        <button
          onClick={onCopy}
          className="flex items-center gap-2 px-5 py-3 bg-muted hover:bg-border text-foreground rounded-lg font-medium transition-colors"
          aria-label="Copiar texto"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          <span className="hidden sm:inline">Copiar</span>
          <span className="sm:hidden">Copiar</span>
        </button>
      </div>

      <audio ref={audioRef} className="hidden" />
    </div>
  )
}
