import Alert from '../components/Alert'
import Button from '../components/Button'
import Card from '../components/Card'
import Input from '../components/Input'

export default function UIKit() {
  return (
    <div className="min-h-screen space-y-12 rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-950">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">UI Kit</h1>

      <section className="space-y-4">
        <h2 className="border-b pb-2 text-2xl font-semibold">Buttons</h2>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <div className="flex flex-wrap items-end gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      <section className="max-w-md space-y-4">
        <h2 className="border-b pb-2 text-2xl font-semibold">Inputs</h2>
        <Input id="ui-name" label="Normal Input" placeholder="Bir sey yazin..." />
        <Input id="ui-err" label="Hatali Input" error="Bu alan zorunludur" />
        <Input
          id="ui-help"
          label="Help Text"
          type="email"
          helpText="E-posta adresinizi girin"
        />
        <Input id="ui-dis" label="Disabled" disabled value="Duzenlenemez" />
      </section>

      <section className="space-y-4">
        <h2 className="border-b pb-2 text-2xl font-semibold">Cards</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card variant="elevated" title="Elevated Card">
            Golge ile yukseltilmis kart.
          </Card>
          <Card variant="outlined" title="Outlined Card">
            Cerceveli kart.
          </Card>
          <Card variant="filled" title="Filled Card">
            Dolgulu arka plan.
          </Card>
        </div>
      </section>

      <section className="max-w-xl space-y-4">
        <h2 className="border-b pb-2 text-2xl font-semibold">Alerts</h2>
        <Alert variant="info" title="Bilgi">
          Bilgilendirme mesaji.
        </Alert>
        <Alert variant="success" title="Basarili">
          Islem tamamlandi.
        </Alert>
        <Alert variant="warning" title="Uyari">
          Dikkat edilmesi gereken durum.
        </Alert>
        <Alert variant="error" title="Hata" dismissible>
          Bir hata olustu.
        </Alert>
      </section>
    </div>
  )
}
