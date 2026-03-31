import { useEffect, useMemo, useState } from 'react'
import Alert from './components/Alert'
import Button from './components/Button'
import Card from './components/Card'
import Input from './components/Input'
import { fetchProjects } from './services/projectService'
import type { Category, Project, SortField, SortOrder } from './types/project'
import { applyFilters } from './utils/projectHelpers'

export default function App() {
  const [projects, setProjects] = useState<Project[]>([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<Category | 'all'>('all')
  const [sortField, setSortField] = useState<SortField>('year')
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchProjects()
        setProjects(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Bilinmeyen hata')
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])

  const filtered = useMemo(
    () => applyFilters(projects, search, category, sortField, sortOrder),
    [projects, search, category, sortField, sortOrder],
  )

  const categories: (Category | 'all')[] = ['all', 'frontend', 'fullstack', 'backend']

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 dark:bg-gray-950 md:p-8">
      <button
        onClick={toggleTheme}
        className="fixed right-4 top-4 z-50 rounded-full bg-gray-200 p-2 text-gray-800 shadow-lg transition-transform hover:scale-110 dark:bg-gray-700 dark:text-gray-200"
        aria-label="Tema degistir"
      >
        <span className="dark:hidden">&#9790;</span>
        <span className="hidden dark:inline">&#9728;</span>
      </button>

      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Projelerim</h1>
        <p className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          LAB-5: JSON veri cekme, filtreleme, siralama ve TypeScript tip guvenligi.
        </p>

        {error && (
          <div className="mb-4">
            <Alert variant="error" title="Hata">
              {error}
            </Alert>
          </div>
        )}

        <div className="mb-8 flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900 sm:flex-row sm:items-center">
          <div className="sm:min-w-72 sm:flex-1">
            <Input
              id="search"
              label="Proje Ara"
              placeholder="Baslik, aciklama veya teknoloji ara..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={category === cat ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => setCategory(cat)}
              >
                {cat === 'all' ? 'Tumu' : cat}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <select
              value={sortField}
              onChange={(event) => setSortField(event.target.value as SortField)}
              className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              aria-label="Siralama alani"
            >
              <option value="year">Yil</option>
              <option value="title">Baslik</option>
            </select>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setSortOrder((order) => (order === 'asc' ? 'desc' : 'asc'))}
            >
              {sortOrder === 'asc' ? 'A-Z / Eski-Yeni' : 'Z-A / Yeni-Eski'}
            </Button>
          </div>
        </div>

        {loading && <p className="text-center text-gray-500">Yukleniyor...</p>}

        {!loading && filtered.length === 0 && (
          <p className="text-center text-gray-500">Eslesen proje bulunamadi.</p>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <Card
              key={project.id}
              variant="elevated"
              title={project.title}
              image={project.image}
              imageAlt={`${project.title} gorseli`}
            >
              <p className="mb-3 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-1">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="mt-2 text-xs text-gray-400">
                {project.year} · {project.category} · {project.featured ? 'featured' : 'standard'}
              </p>
            </Card>
          ))}
        </div>

        <p className="mt-4 text-center text-sm text-gray-500">
          {filtered.length} / {projects.length} proje gosteriliyor
        </p>
      </div>
    </div>
  )
}
