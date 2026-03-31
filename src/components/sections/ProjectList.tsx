import { useEffect, useMemo, useState } from 'react'
import ProjectFilter from '../forms/ProjectFilter'
import { fetchProjects } from '../../services/projectService'
import type { Category, Project, SortField, SortOrder } from '../../types/project'
import { applyFilters } from '../../utils/projectHelpers'

export default function ProjectList() {
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
        setError(err instanceof Error ? err.message : 'Bilinmeyen hata olustu')
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

  return (
    <section id="projects" className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Projelerim</h2>
        <p className="mb-8 text-gray-600 dark:text-gray-400">Uzerinde calistigim projeler</p>

        {error && (
          <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4">
            <p className="text-red-800">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-2 text-sm text-red-600 underline"
            >
              Tekrar dene
            </button>
          </div>
        )}

        {!loading && !error && (
          <ProjectFilter
            search={search}
            onSearchChange={setSearch}
            category={category}
            onCategoryChange={setCategory}
            sortField={sortField}
            onSortFieldChange={setSortField}
            sortOrder={sortOrder}
            onSortOrderChange={setSortOrder}
            resultCount={filtered.length}
            totalCount={projects.length}
          />
        )}

        {loading && (
          <div className="flex justify-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-blue-600" />
          </div>
        )}

        {!loading && !error && filtered.length === 0 && (
          <p className="py-12 text-center text-gray-500">Eslesen proje bulunamadi.</p>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-700 dark:to-gray-600">
                <span className="text-4xl opacity-50">&#128187;</span>
              </div>

              <div className="p-4">
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  {project.featured && (
                    <span className="rounded-full bg-yellow-100 px-2 py-0.5 text-xs text-yellow-800">
                      One Cikan
                    </span>
                  )}
                </div>
                <p className="mb-3 text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
                <div className="mb-3 flex flex-wrap gap-1">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-400">
                  {project.year} {' · '} {project.category}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
