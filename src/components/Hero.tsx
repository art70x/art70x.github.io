import { ArrowDownRightIcon, ArrowUpRightIcon } from '@phosphor-icons/react'

import Btn from './Btn'

const ring =
  'before:pointer-events-none before:absolute before:top-1/2 before:left-1/2 before:size-[280px] before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-45 before:border before:border-[#292929] ' +
  'after:pointer-events-none after:absolute after:top-1/2 after:left-1/2 after:size-[205px] after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45 after:border after:border-[#202020]'

export default function Hero() {
  return (
    <section
      id="home"
      className="wrap grid min-h-150 grid-cols-1 items-center gap-7 py-13.5 tab:grid-cols-[1.2fr_.8fr] tab:gap-10.5 tab:pt-18 tab:pb-20.5"
    >
      <div>
        <div className="eyebrow">Frontend developer · Student · Builder</div>
        <h1 className="mt-5.5 mb-6 text-[clamp(48px,14vw,76px)] leading-[.99] font-bold tracking-[-.065em] text-balance tab:text-[clamp(48px,7vw,86px)]">
          Build with <span className="block text-[#858585]">purpose.</span>
        </h1>
        <p className="max-w-140 text-base leading-[1.9] text-[#c2c2c2]">
          I’m <strong>art70x</strong>, a frontend developer and student. I build practical web
          tools, experiment with interface ideas, and learn by shipping projects.
        </p>
        <div className="mt-7.5 flex flex-wrap gap-3">
          <Btn primary href="#work">
            EXPLORE MY WORK <ArrowDownRightIcon size="1.15em" aria-hidden />
          </Btn>
          <Btn href="https://github.com/art70x">
            GITHUB PROFILE <ArrowUpRightIcon size="1.15em" aria-hidden />
          </Btn>
        </div>
        <p className="mt-3.5 text-[10px] text-mute">CREATE / IMPROVE / REPEAT</p>
      </div>
      <div
        className={`relative flex min-h-75 items-center justify-center overflow-hidden border border-[#292929] bg-[radial-gradient(ellipse_at_50%_38%,#252525_0%,#111_48%,#0b0b0b_76%)] tab:min-h-90 ${ring}`}
      >
        <img
          src="/logo.webp"
          alt="A7 Logo"
          width={640}
          height={640}
          fetchPriority="high"
          decoding="async"
          className="absolute top-1/2 left-1/2 z-1 h-auto w-[min(56%,240px)] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_12px_30px_#000]"
        />
        <div className="absolute right-6 bottom-5.5 left-6 flex justify-between text-[9px] tracking-[.18em] text-mute uppercase">
          <span>ART / 70X</span>
          <span>Independent by design</span>
        </div>
      </div>
    </section>
  )
}
