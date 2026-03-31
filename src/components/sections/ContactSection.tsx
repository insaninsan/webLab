import ContactForm from '../forms/ContactForm'

export default function ContactSection() {
  return (
    <section id="contact" className="bg-gray-50 px-4 py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Iletisim</h2>
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          Sorulariniz veya is birligi teklifleri icin benimle iletisime gecebilirsiniz.
        </p>
        <ContactForm />
      </div>
    </section>
  )
}
