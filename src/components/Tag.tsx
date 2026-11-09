import type { ReactNode } from 'react'

export default function Tag({ large, children }: { large?: boolean; children: ReactNode }) {
  return (
    <span
      className={`rounded-xs border border-[#393939] text-[#c5c5c5] ${
        large ? 'px-2.5 py-1.75 text-[11px]' : 'px-2 py-1.25 text-[10px]'
      }`}
    >
      {children}
    </span>
  )
}
