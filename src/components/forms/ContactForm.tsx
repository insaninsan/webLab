import { useState, type FormEvent } from 'react'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

function validate(data: ContactFormData): FormErrors {
  const newErrors: FormErrors = {}

  if (!data.name.trim()) {
    newErrors.name = 'Ad soyad zorunludur.'
  } else if (data.name.trim().length < 2) {
    newErrors.name = 'Ad soyad en az 2 karakter olmalidir.'
  }

  if (!data.email.trim()) {
    newErrors.email = 'E-posta zorunludur.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    newErrors.email = 'Gecerli bir e-posta adresi giriniz.'
  }

  if (!data.subject.trim()) {
    newErrors.subject = 'Konu zorunludur.'
  }

  if (!data.message.trim()) {
    newErrors.message = 'Mesaj zorunludur.'
  } else if (data.message.trim().length < 10) {
    newErrors.message = 'Mesaj en az 10 karakter olmalidir.'
  }

  return newErrors
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  function handleChange(field: keyof ContactFormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const newErrors = validate(formData)
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log('Form verisi:', formData)
      setSubmitSuccess(true)
      setFormData(initialFormData)
    } catch {
      alert('Gonderim basarisiz. Tekrar deneyin.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center">
        <p className="font-medium text-green-800">Mesajiniz basariyla gonderildi!</p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="mt-4 text-sm text-green-600 underline"
        >
          Yeni mesaj gonder
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg space-y-4" noValidate>
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">
          Ad Soyad
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(event) => handleChange('name', event.target.value)}
          className={`w-full rounded-lg border px-3 py-2 ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Adiniz Soyadiniz"
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">
          E-posta
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(event) => handleChange('email', event.target.value)}
          className={`w-full rounded-lg border px-3 py-2 ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="ornek@mail.com"
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="subject" className="mb-1 block text-sm font-medium">
          Konu
        </label>
        <select
          id="subject"
          value={formData.subject}
          onChange={(event) => handleChange('subject', event.target.value)}
          className={`w-full rounded-lg border px-3 py-2 ${
            errors.subject ? 'border-red-500' : 'border-gray-300'
          }`}
        >
          <option value="">Konu seciniz...</option>
          <option value="genel">Genel</option>
          <option value="destek">Teknik Destek</option>
          <option value="oneri">Oneri</option>
          <option value="isbirligi">Is Birligi</option>
        </select>
        {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">
          Mesaj
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(event) => handleChange('message', event.target.value)}
          className={`w-full resize-y rounded-lg border px-3 py-2 ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Mesajinizi yaziniz..."
        />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-blue-600 py-2 font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? 'Gonderiliyor...' : 'Gonder'}
      </button>
    </form>
  )
}
