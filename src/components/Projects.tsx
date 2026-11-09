import { GITHUB_USER, featured } from '../data/projects'
import { useRepos } from '../data/useRepos'
import ProjectCard from './ProjectCard'
import SectionHead from './SectionHead'

export default function Projects() {
  const repos = useRepos()

  return (
    <section id="work" className="section">
      <div className="wrap">
        <SectionHead
          eyebrow="Selected projects"
          title="Tools I’ve been building."
          intro="These projects explore math formatting, JSON editing, and frontend tooling. Each started with a specific task I wanted to make easier."
        />
        <div className="grid grid-cols-1 gap-3.5 tab:grid-cols-2">
          {featured.map((p) => {
            const repo = repos.find((r) => r.name.toLowerCase() === p.name.toLowerCase())
            const lang = repo?.language
            return (
              <ProjectCard
                key={p.name}
                icon={p.icon}
                name={p.name}
                href={repo?.html_url ?? `https://github.com/${GITHUB_USER}/${p.name}`}
                description={repo?.description || p.description}
                tags={lang && !p.tags.includes(lang) ? [lang, ...p.tags] : p.tags}
              />
            )
          })}
        </div>
        <p className="mt-3.5 text-[10px] text-mute">
          Featured repositories are linked directly to GitHub. Explore the profile for more
          projects.
        </p>
      </div>
    </section>
  )
}
