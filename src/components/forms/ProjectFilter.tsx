import type { Category, SortField, SortOrder } from '../../types/project'

interface ProjectFilterProps {
  search: string
  onSearchChange: (value: string) => void
  category: Category | 'all'
  onCategoryChange: (value: Category | 'all') => void
  sortField: SortField
  onSortFieldChange: (value: SortField) => void
  sortOrder: SortOrder
  onSortOrderChange: (value: SortOrder) => void
  resultCount: number
  totalCount: number
}

const categories: { value: Category | 'all'; label: string }[] = [
  { value: 'all', label: 'Tumu' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'fullstack', label: 'Full Stack' },
  { value: 'backend', label: 'Backend' },
]

export default function ProjectFilter({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  sortField,
  onSortFieldChange,
  sortOrder,
  onSortOrderChange,
  resultCount,
  totalCount,
}: ProjectFilterProps) {
  return (
    <div className="mb-8 space-y-4">
      <div className="relative">
        <input
          type="text"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Proje ara (baslik, aciklama, teknoloji)..."
          className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          aria-label="Proje ara"
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">&#128269;</span>
      </div>

      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Kategori filtresi">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => onCategoryChange(cat.value)}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                category === cat.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
              aria-pressed={category === cat.value}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <select
            value={sortField}
            onChange={(event) => onSortFieldChange(event.target.value as SortField)}
            className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            aria-label="Siralama alani"
          >
            <option value="year">Yil</option>
            <option value="title">Baslik</option>
          </select>
          <button
            onClick={() => onSortOrderChange(sortOrder === 'asc' ? 'desc' : 'asc')}
            className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm hover:bg-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
            aria-label={`Siralama yonu: ${sortOrder === 'asc' ? 'artan' : 'azalan'}`}
          >
            {sortOrder === 'asc' ? '↑ Artan' : '↓ Azalan'}
          </button>
        </div>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400">
        {resultCount} / {totalCount} proje gosteriliyor
      </p>
    </div>
  )
}
