import { useState } from 'react'
import Alert from './components/Alert'
import Button from './components/Button'
import Card from './components/Card'
import Input from './components/Input'
import UIKit from './pages/UIKit'

function App() {
  const [showAlert, setShowAlert] = useState(true)
  const currentYear = new Date().getFullYear()

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="min-h-screen bg-surface text-gray-900 transition-colors dark:bg-gray-950 dark:text-gray-100">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-0 focus:top-0 focus:z-50 bg-primary p-2 text-white"
      >
        Ana icerige atla
      </a>

      <button
        onClick={toggleTheme}
        className="fixed right-4 top-4 z-50 rounded-full bg-gray-200 p-2 text-gray-800 shadow-lg transition-transform hover:scale-110 dark:bg-gray-700 dark:text-gray-200"
        aria-label="Tema degistir"
      >
        <span className="dark:hidden">&#9790;</span>
        <span className="hidden dark:inline">&#9728;</span>
      </button>

      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur dark:border-gray-700 dark:bg-gray-900/95">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-3 sm:flex-row">
          <h1 className="text-xl font-bold text-primary dark:text-blue-300">Serif Bayram</h1>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2">
              <li>
                <a
                  href="#hakkimda"
                  className="rounded-md px-3 py-1 text-gray-700 transition-colors hover:bg-blue-100 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  Hakkimda
                </a>
              </li>
              <li>
                <a
                  href="#projeler"
                  className="rounded-md px-3 py-1 text-gray-700 transition-colors hover:bg-blue-100 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  Projeler
                </a>
              </li>
              <li>
                <a
                  href="#iletisim"
                  className="rounded-md px-3 py-1 text-gray-700 transition-colors hover:bg-blue-100 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  Iletisim
                </a>
              </li>
              <li>
                <a
                  href="#uikit"
                  className="rounded-md px-3 py-1 text-gray-700 transition-colors hover:bg-blue-100 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  UI Kit
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section id="hakkimda" className="px-4 py-16">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 md:flex-row md:items-start">
            <figure className="h-40 w-40 shrink-0 overflow-hidden rounded-full shadow-lg">
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 text-3xl font-bold text-white">
                SB
              </div>
            </figure>
            <div>
              <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 dark:text-white md:text-left">
                Hakkimda
              </h2>
              <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
                Frontend gelistirici olarak modern web teknolojileriyle kullanici dostu
                arayuzler olusturuyorum.
              </p>
              <ul className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Tailwind', 'Vite'].map((item) => (
                  <li key={item} className="rounded-full bg-primary px-3 py-1 text-sm text-white">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler" className="bg-gray-50 px-4 py-16 dark:bg-gray-900">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 dark:text-white">
              Projelerim
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card variant="elevated" title="LAB-1 Hello">
                Vite ile gelistirme ortami kuruldu ve temel React uygulamasi olusturuldu.
              </Card>
              <Card variant="outlined" title="LAB-2 Semantik Portfoy">
                Semantik HTML ve erisilebilirlik kurallariyla portfoy yapisi kuruldu.
              </Card>
              <Card
                variant="filled"
                title="LAB-3 Responsive"
                footer={<Button size="sm">Detay</Button>}
              >
                Mobile-first, Flexbox ve Grid ile 3 breakpoint responsive duzen olusturuldu.
              </Card>
            </div>
          </div>
        </section>

        <section id="iletisim" className="px-4 py-16">
          <div className="mx-auto max-w-lg">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">
              Iletisim
            </h2>
            {showAlert && (
              <div className="mb-4">
                <Alert
                  variant="info"
                  title="Bilgi"
                  dismissible
                  onDismiss={() => setShowAlert(false)}
                >
                  Form ornek amaclidir, gonderim yapmaz.
                </Alert>
              </div>
            )}
            <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
              <Input id="name" label="Ad Soyad" placeholder="Ahmet Yilmaz" required />
              <Input
                id="email"
                label="E-posta"
                type="email"
                helpText="Ornek: ad@mail.com"
                required
              />
              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Mesajiniz
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
                />
              </div>
              <Button variant="primary" size="lg" type="submit">
                Gonder
              </Button>
            </form>
          </div>
        </section>

        <section id="uikit" className="px-4 py-8">
          <UIKit />
        </section>
      </main>

      <footer className="border-t border-gray-200 bg-gray-100 px-4 py-6 text-center text-sm text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400">
        <p>&copy; {currentYear} Serif Bayram. Tum haklari saklidir.</p>
      </footer>
    </div>
  )
}

export default App
