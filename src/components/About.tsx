import SectionHead from './SectionHead'
import Tag from './Tag'

const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'Markdown',
  'Vue.js',
  'React',
  'Nuxt',
  'Tailwind CSS',
  'Vite',
  'pnpm',
  'npm',
  'Git',
  'GitHub',
  'GitHub Actions',
  'Vercel',
  'ESLint',
  'Prettier',
  'Figma',
]

const principles = [
  ['01 / CLARITY', 'Make the useful thing easy to find.'],
  ['02 / CRAFT', 'Pay attention to the details.'],
  ['03 / CURIOSITY', 'Learn by building and testing.'],
  ['04 / PROGRESS', 'Improve the work, one iteration at a time.'],
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <SectionHead eyebrow="A little about me" title="Learning by building." />
        <div className="grid grid-cols-1 gap-6.25 tab:grid-cols-2 tab:gap-12.5">
          <div className="max-w-135 text-sm text-[#aaa]">
            <p className="my-4">
              I aim to make interfaces{' '}
              <strong className="font-semibold text-white">clear and easy to use</strong>. I start
              by identifying the task, build the smallest useful solution, and test what needs to
              improve.
            </p>
            <p className="my-4">
              I’m currently working with{' '}
              <strong className="font-semibold text-white">Vue, Vite, and Nuxt</strong> while
              strengthening my HTML, CSS, JavaScript, and TypeScript skills through projects.
            </p>
            <div aria-label="Technical skills" className="mt-5.5 flex flex-wrap gap-2.25">
              {skills.map((s) => (
                <Tag key={s} large>
                  {s}
                </Tag>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            {principles.map(([title, text]) => (
              <div key={title} className="border border-[#2e2e2e] bg-[#111] p-4.5">
                <b className="mb-1.75 block text-xs tracking-widest">{title}</b>
                <span className="text-[11px] text-[#888]">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
