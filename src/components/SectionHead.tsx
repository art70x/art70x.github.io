type Props = { eyebrow: string; title: string; intro?: string }

export default function SectionHead({ eyebrow, title, intro }: Props) {
  return (
    <div className="mb-7.5 flex flex-col items-start gap-5 tab:flex-row tab:items-end tab:justify-between">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h2 className="mt-2.5 text-[clamp(26px,3vw,38px)] leading-[1.1] font-bold tracking-[-.04em] text-balance">
          {title}
        </h2>
      </div>
      {intro && <p className="max-w-107.5 text-[13px] text-[#999]">{intro}</p>}
    </div>
  )
}
