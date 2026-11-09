import type { Icon } from '@phosphor-icons/react'
import { ArrowUpRightIcon } from '@phosphor-icons/react'

import Tag from './Tag'

type Props = {
  icon: Icon
  name: string
  href: string
  description: string
  tags: Array<string>
}

export default function ProjectCard({ icon: Glyph, name, href, description, tags }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex min-h-52.5 flex-col border border-[#2d2d2d] bg-[linear-gradient(145deg,#171717,#101010)] p-6.25 transition duration-200 hover:-translate-y-0.75 hover:border-[#777]"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="grid size-9.5 place-items-center border border-[#444] text-[#ddd]">
          <Glyph size={21} aria-hidden />
        </div>
        <span className="text-[#888]">
          <ArrowUpRightIcon size={20} aria-hidden />
        </span>
      </div>
      <h3 className="mt-5.5 mb-1.75 text-[19px] font-bold">{name}</h3>
      <p className="mb-5.5 max-w-125 text-[13px] text-[#a5a5a5]">{description}</p>
      <div className="mt-auto flex flex-wrap gap-1.75">
        {tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </a>
  )
}
