import {
  BracketsCurlyIcon,
  BracketsSquareIcon,
  CodeIcon,
  FunctionIcon,
} from '@phosphor-icons/react'
import type { Icon } from '@phosphor-icons/react'

export const GITHUB_USER = 'art70x'

export type Featured = {
  /** GitHub repo name; matched case-insensitively against the live API. */
  name: string
  icon: Icon
  /** Snapshot shown until (or instead of) the live GitHub data. */
  description: string
  tags: Array<string>
}

export const featured: Array<Featured> = [
  {
    name: 'Plain2TeX',
    icon: FunctionIcon,
    description:
      'Convert plain-text math expressions into professionally typeset LaTeX, with export and copy options.',
    tags: ['TypeScript', 'Math tools', 'Web app'],
  },
  {
    name: 'json-builder',
    icon: BracketsCurlyIcon,
    description:
      'A visual way to construct JSON objects and arrays, preview results, reorder fields, and work with datasets.',
    tags: ['TypeScript', 'JSON', 'Developer tool'],
  },
  {
    name: 'Vuetrix',
    icon: CodeIcon,
    description:
      'A modern Vue 3 and TypeScript starter template designed to help kick-start clean frontend projects.',
    tags: ['Vue 3', 'Vite', 'TypeScript'],
  },
  {
    name: 'JSONotations',
    icon: BracketsSquareIcon,
    description:
      'A JSON visualization concept focused on making structured data easier to inspect and understand.',
    tags: ['JSON', 'Visualization', 'Interface'],
  },
]
