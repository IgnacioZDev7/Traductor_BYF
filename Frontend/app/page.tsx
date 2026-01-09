"use client"

import { useState, useRef } from "react"
import Header from "@/components/header"
import TranslationInput from "@/components/translation-input"
import TranslationOutput from "@/components/translation-output"
import QuickActions from "@/components/quick-actions"
import Footer from "@/components/footer"
import { useToast } from "@/hooks/use-toast"

type TranslationDirection = "es-to-indigenous" | "indigenous-to-es"
type IndigenousLanguage = "aymara" | "quechua"

export default function Home() {
  const [inputText, setInputText] = useState("")
  const [translatedText, setTranslatedText] = useState("")
  const [direction, setDirection] = useState<TranslationDirection>("es-to-indigenous")
  const [language, setLanguage] = useState<IndigenousLanguage>("aymara")
  const [isLoading, setIsLoading] = useState(false)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const { toast } = useToast()

  // Simulated translation API call
  const handleTranslate = async () => {
    if (!inputText.trim()) {
      toast({
        title: "Campo vacío",
        description: "Por favor ingrese el texto a traducir",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock translation responses
      const translations: Record<string, Record<string, string>> = {
        "es-to-indigenous": {
          aymara: `${inputText} (Aymara: Nayawi jikxatapxañ)`,
          quechua: `${inputText} (Quechua: Ama hina kaychu)`,
        },
        "indigenous-to-es": {
          aymara: `${inputText} (Español: El paciente debe descansar)`,
          quechua: `${inputText} (Español: Toma este medicamento)`,
        },
      }

      const translated = translations[direction][language]
      setTranslatedText(translated)

      // Mock audio URL - in production, this would come from a text-to-speech API
      setAudioUrl(`data:audio/mp3;base64,SUQzBAA...`)

      toast({
        title: "Traducción exitosa",
        description: "El texto ha sido traducido correctamente",
      })
    } catch (error) {
      toast({
        title: "Error en la traducción",
        description: "Hubo un problema al traducir. Intente nuevamente.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handlePlayAudio = () => {
    if (audioRef.current && audioUrl) {
      audioRef.current.play()
    }
  }

  const handleCopyText = () => {
    navigator.clipboard.writeText(translatedText)
    toast({
      title: "Copiado",
      description: "El texto ha sido copiado al portapapeles",
    })
  }

  const handleClear = () => {
    setInputText("")
    setTranslatedText("")
    setAudioUrl(null)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Direction and Language Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Translation Direction */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">Dirección de traducción</label>
              <div className="flex gap-2">
                <button
                  onClick={() => setDirection("es-to-indigenous")}
                  className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
                    direction === "es-to-indigenous"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground hover:bg-border"
                  }`}
                >
                  ES → Nativo
                </button>
                <button
                  onClick={() => setDirection("indigenous-to-es")}
                  className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
                    direction === "indigenous-to-es"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground hover:bg-border"
                  }`}
                >
                  Nativo → ES
                </button>
              </div>
            </div>

            {/* Language Selection */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">Idioma Nativo</label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as IndigenousLanguage)}
                className="w-full px-4 py-3 rounded-lg border border-input bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="aymara">Aymara</option>
                <option value="quechua">Quechua</option>
              </select>
            </div>
          </div>

          {/* Translation Input Section */}
          <TranslationInput
            value={inputText}
            onChange={setInputText}
            onTranslate={handleTranslate}
            isLoading={isLoading}
            placeholder={
              direction === "es-to-indigenous"
                ? "Ingrese el texto en español a traducir..."
                : "Ingrese el texto en idioma indígena..."
            }
          />

          {/* Translation Output Section */}
          {translatedText && (
            <>
              <TranslationOutput
                text={translatedText}
                onPlayAudio={handlePlayAudio}
                onCopy={handleCopyText}
                audioRef={audioRef}
              />

              {/* Quick Actions */}
              <QuickActions onClear={handleClear} onCopy={handleCopyText} />
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
