import { useEffect, useState } from 'react'

import { GITHUB_USER } from './projects'

export type Repo = {
  name: string
  html_url: string
  description: string | null
  language: string | null
}

const URL = `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`

/** Live repos from GitHub. Stays empty on failure or rate limit (60 req/h unauthenticated). */
export function useRepos(): Array<Repo> {
  const [repos, setRepos] = useState<Array<Repo>>([])

  useEffect(() => {
    const ctrl = new AbortController()
    fetch(URL, { signal: ctrl.signal })
      .then((r) => {
        if (!r.ok) throw new Error('GitHub API unavailable')
        return r.json() as Promise<Array<Repo>>
      })
      .then(setRepos)
      .catch(() => {}) // snapshot in projects.ts stays on screen
    return () => ctrl.abort()
  }, [])

  return repos
}
