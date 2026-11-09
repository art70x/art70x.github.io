import { ArrowUpRightIcon } from '@phosphor-icons/react'

export default function Header() {
  return (
    <header className="wrap flex h-20.5 items-center justify-between border-b border-line max-[420px]:h-auto max-[420px]:min-h-18 max-[420px]:flex-wrap max-[420px]:gap-3 max-[420px]:py-3">
      <a
        href="#home"
        aria-label="art70x home"
        className="flex items-center gap-3 font-bold tracking-[.13em]"
      >
        <img src="/logo.webp" className="size-[38px]" width={38} height={38} alt="Art70x Logo" />
        <span>art70x</span>
      </a>
      <nav
        aria-label="Main navigation"
        className="flex items-center gap-3 text-[10px] tracking-[.08em] text-[#c9c9c9] max-[420px]:gap-2.5 max-[420px]:text-[9px] tab:gap-7 tab:text-xs"
      >
        <a href="#work" className="hover:text-white">
          WORK
        </a>
        <a href="#about" className="hover:text-white">
          ABOUT
        </a>
        <a
          href="#contact"
          className="rounded-[3px] border border-[#555] px-2.5 py-2 hover:text-white max-[420px]:px-2 max-[420px]:py-1.75 tab:px-3.5 tab:py-2.5"
        >
          LET'S CONNECT{' '}
          <ArrowUpRightIcon size="1.15em" aria-hidden className="inline align-[-.12em]" />
        </a>
      </nav>
    </header>
  )
}
