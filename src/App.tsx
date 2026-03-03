import './App.css'

function App() {
  return (
    <div className="app-shell">
      <main className="hero">
        <section>
          <header className="hero-header">
            <span className="pill">
              <span className="pill-dot" />
              Web Tasarımı ve Programlama
            </span>
          </header>

          <h1 className="hero-title">LAB-1 · Hello React + TypeScript</h1>
          <p className="hero-subtitle">
            Modern web geliştirme ortamın hazır. Bu proje, Vite ile oluşturulmuş bir{' '}
            <strong>React + TypeScript</strong> başlangıç uygulamasıdır.
          </p>

          <div className="badge-row">
            <span className="badge">
              <span className="badge-dot" />
              Çevre hazır
            </span>
            <span className="badge badge-soft">React 18</span>
            <span className="badge badge-soft">TypeScript</span>
            <span className="badge badge-soft">Vite Dev Server</span>
          </div>

          <div className="primary-actions">
            <button type="button">LAB-1 Projeni Çalıştır</button>
            <button type="button" className="secondary-button">
              npm run dev komutunu dene
            </button>
          </div>

          <p className="helper-text">
            <span className="helper-strong">İpucu:</span> Terminalde{' '}
            <code>npm run dev</code> çalıştır ve tarayıcıda{' '}
            <code>http://localhost:5173</code> adresini aç.
          </p>
        </section>

        <aside className="info-panel">
          <div className="info-tag">Öğrenci Bilgileri</div>

          <div className="student-card">
            <div className="avatar">ŞB</div>
            <div className="student-name">Şerif Bayram</div>
            <div className="student-id">Öğrenci No: 225541018</div>
          </div>

          <ul className="info-list">
            <li>
              <strong>Proje:</strong> Web LAB-1 - Hello Project
            </li>
            <li>
              <strong>Teknolojiler:</strong> React 18 · TypeScript · Vite
            </li>
            <li>
              <span className="status-dot">
                <span className="status-pulse" />
                <span>Geliştirme sunucusu: npm run dev</span>
              </span>
            </li>
          </ul>

          <div className="footer-note">
            <span>Bu kart, LAB-1 kişiselleştirme gereksinimini karşılar.</span>
            <div className="footer-badges">
              <span className="footer-chip">main + feature branch</span>
              <span className="footer-chip">README hazır</span>
            </div>
          </div>
        </aside>
      </main>
    </div>
  )
}

export default App
