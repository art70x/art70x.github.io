import { ArrowUpIcon, ArrowUpRightIcon } from '@phosphor-icons/react'

export default function Footer() {
  return (
    <footer className="wrap flex flex-col items-start justify-between gap-4.5 pt-6.25 pb-8 text-[10px] tracking-[.08em] text-mute tab:flex-row tab:items-center">
      <span>&copy; {new Date().getFullYear()} ART70X / CREATE, IMPROVE, REPEAT</span>
      <div className="flex gap-4.5">
        <a
          href="https://github.com/art70x"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white"
        >
          GITHUB <ArrowUpRightIcon size="1.15em" aria-hidden className="inline align-[-.12em]" />
        </a>
        <a href="#home" className="hover:text-white">
          BACK TO TOP <ArrowUpIcon size="1.15em" aria-hidden className="inline align-[-.12em]" />
        </a>
      </div>
    </footer>
  )
}
