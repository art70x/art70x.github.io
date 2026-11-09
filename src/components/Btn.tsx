import type { ReactNode } from 'react'

type Props = { href: string; primary?: boolean; children: ReactNode }

// In-page anchors stay in the tab; everything else opens externally.
export default function Btn({ href, primary, children }: Props) {
  const external = !href.startsWith('#')
  return (
    <a
      href={href}
      {...(external && { target: '_blank', rel: 'noreferrer' })}
      className={`inline-flex items-center gap-2.5 rounded-[3px] border px-4.5 py-3.25 text-xs font-semibold tracking-[.04em] transition duration-200 hover:-translate-y-0.5 ${
        primary ? 'border-white bg-white text-[#080808]' : 'border-[#565656]'
      }`}
    >
      {children}
    </a>
  )
}
