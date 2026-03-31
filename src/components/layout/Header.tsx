import { useState } from 'react'

const navLinks = [
  { href: '#hero', label: 'Ana Sayfa' },
  { href: '#about', label: 'Hakkimda' },
  { href: '#projects', label: 'Projeler' },
  { href: '#contact', label: 'Iletisim' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#hero" className="text-xl font-bold text-blue-600">
          Portfolyo
        </a>

        <ul className="hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="p-2 md:hidden"
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span className="mb-1 block h-0.5 w-6 bg-gray-600" />
          <span className="mb-1 block h-0.5 w-6 bg-gray-600" />
          <span className="block h-0.5 w-6 bg-gray-600" />
        </button>
      </nav>

      {menuOpen && (
        <ul className="border-t border-gray-200 bg-white px-4 pb-4 dark:border-gray-700 dark:bg-gray-900 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-gray-600 hover:text-blue-600 dark:text-gray-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
