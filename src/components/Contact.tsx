import { ArrowUpRightIcon } from '@phosphor-icons/react'

import Btn from './Btn'

const links = [
  { label: 'CONNECT ON GITHUB', href: 'https://github.com/art70x', primary: true },
  { label: 'CODEPEN', href: 'https://codepen.io/art70x' },
  { label: 'DEV.TO', href: 'https://dev.to/art70x' },
]

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="wrap flex flex-col items-start justify-between gap-7 border border-[#3a3a3a] bg-[linear-gradient(110deg,#171717,#0d0d0d)] p-[clamp(26px,5vw,52px)] tab:flex-row tab:items-center">
        <div>
          <div className="eyebrow">Have an idea?</div>
          <h2 className="mt-2 mb-2.5 text-[clamp(28px,4vw,44px)] leading-[1.1] font-bold tracking-tighter text-balance">
            Have a project in mind?
          </h2>
          <p className="text-[13px] text-[#999]">
            I’m open to collaborating, learning from other developers, and building useful frontend
            projects.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {links.map(({ label, href, primary }) => (
            <Btn key={label} href={href} primary={primary}>
              {label} <ArrowUpRightIcon size="1.15em" aria-hidden />
            </Btn>
          ))}
        </div>
      </div>
    </section>
  )
}
