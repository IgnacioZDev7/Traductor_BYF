"use client"

import { RotateCcw } from "lucide-react"

interface QuickActionsProps {
  onClear: () => void
  onCopy: () => void
}

export default function QuickActions({ onClear, onCopy }: QuickActionsProps) {
  return (
    <div className="flex gap-3 justify-center flex-wrap">
      <button
        onClick={onCopy}
        className="px-4 py-2 text-sm font-medium text-primary bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
      >
        Copiar resultado
      </button>
      <button
        onClick={onClear}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground bg-muted hover:bg-border rounded-lg transition-colors"
      >
        <RotateCcw size={16} />
        Limpiar
      </button>
    </div>
  )
}
