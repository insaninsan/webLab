import './App.css'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <div className="app-shell">
        <div className="layout">
          <header className="site-header">
            <div className="brand">
              <span className="brand-mark">
                <span className="brand-dot" />
                LAB-2 · Semantik Portföy
              </span>
              <div>
                <div aria-hidden="true" style={{ fontSize: '0.8rem', color: '#6b7280' }}>
                  Web Tasarımı ve Programlama
                </div>
                <p className="sr-only">Semantik HTML5 ve erişilebilir portföy sayfası</p>
              </div>
            </div>

            <nav aria-label="Ana navigasyon">
              <ul>
                <li>
                  <a href="#about">Hakkımda</a>
                </li>
                <li>
                  <a href="#projects">Projeler</a>
                </li>
                <li>
                  <a href="#contact">İletişim</a>
                </li>
              </ul>
            </nav>
          </header>

          <main id="main-content">
            <section id="about" className="hero" aria-labelledby="about-title">
              <header>
                <h1 id="about-title" className="hero-title">
                  Şerif Bayram · Frontend Geliştirici Adayı
                </h1>
                <p className="hero-subtitle">
                  HTML, CSS ve JavaScript temelleri üzerine, React ve TypeScript ile modern
                  web arayüzleri geliştirmeye odaklanan bir bilgisayar programcılığı
                  öğrencisiyim.
                </p>
              </header>

              <div className="hero-meta">
                <p className="pill">
                  <span className="pill-dot" />
                  Öğrenci No: 225541018
                </p>
                <p className="pill pill-soft">LAB-2 · Semantik HTML &amp; a11y</p>
                <p className="pill pill-soft">React · TypeScript · Vite</p>
              </div>

              <article className="about-section" aria-label="Kısa biyografi">
                <h2>Hakkımda</h2>
                <p>
                  Web geliştirme alanında kendimi sürekli geliştirmeyi hedefliyorum. Temiz
                  kod, erişilebilirlik ve kullanıcı deneyimi benim için sadece ders konusu
                  değil, aynı zamanda mesleki hedefimin temel parçaları.
                </p>
                <p>
                  Bu sayfa, LAB-2 kapsamında semantik HTML, heading hiyerarşisi ve
                  erişilebilir form pratiklerini uygulamak için hazırlanmış kişisel bir
                  portföy taslağıdır.
                </p>
              </article>

              <section id="projects" aria-labelledby="projects-title">
                <h2 id="projects-title">Öne Çıkan Çalışmalar</h2>
                <p className="helper-text">
                  Aşağıdaki projeler, HTML/CSS temelleri ve modern araçlarla yaptığım
                  çalışmaları temsil eder.
                </p>
                <ul className="info-list">
                  <li>
                    <strong>Web LAB-1 - Hello Project:</strong> Vite ile oluşturulmuş, React
                    + TypeScript tabanlı başlangıç projesi.
                  </li>
                  <li>
                    <strong>LAB-2 Semantik Portföy:</strong> Bu sayfa; semantik HTML5,
                    erişilebilirlik ve form doğrulama örneklerini içeriyor.
                  </li>
                </ul>
              </section>
            </section>

            <aside className="info-panel" aria-label="İletişim ve öğrenci bilgileri">
              <section aria-labelledby="student-info-title">
                <h2 id="student-info-title" className="info-tag">
                  Öğrenci Bilgileri
                </h2>

                <div className="student-card">
                  <div className="avatar" aria-hidden="true">
                    ŞB
                  </div>
                  <div className="student-name">Şerif Bayram</div>
                  <div className="student-id">Öğrenci No: 225541018</div>
                </div>
              </section>

              <section
                id="contact"
                className="contact-section"
                aria-labelledby="contact-title"
              >
                <div className="contact-header">
                  <h2 id="contact-title">İletişim Formu</h2>
                  <p>
                    Bu form, LAB-2 kapsamında erişilebilir, semantik ve doğrulama öznitelikli
                    bir örnek olarak hazırlanmıştır.
                  </p>
                </div>

                <form
                  aria-label="İletişim formu"
                  noValidate
                  onSubmit={(event) => event.preventDefault()}
                >
                  <div className="form-row-inline">
                    <div className="form-row">
                      <label className="field-label" htmlFor="fullName">
                        Ad Soyad <span>*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        minLength={3}
                        aria-describedby="fullName-help"
                      />
                      <small id="fullName-help" className="field-description">
                        En az 3 karakter giriniz.
                      </small>
                      <small
                        id="fullName-error"
                        className="field-error"
                        role="alert"
                        aria-live="polite"
                      />
                    </div>

                    <div className="form-row">
                      <label className="field-label" htmlFor="email">
                        E-posta <span>*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        aria-describedby="email-help"
                      />
                      <small id="email-help" className="field-description">
                        Geçerli bir e-posta adresi giriniz (ornek@site.com).
                      </small>
                      <small
                        id="email-error"
                        className="field-error"
                        role="alert"
                        aria-live="polite"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <label className="field-label" htmlFor="subject">
                      Konu <span>*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      minLength={5}
                      aria-describedby="subject-help"
                    />
                    <small id="subject-help" className="field-description">
                      Mesajınızı özetleyen kısa bir başlık yazın (en az 5 karakter).
                    </small>
                    <small
                      id="subject-error"
                      className="field-error"
                      role="alert"
                      aria-live="polite"
                    />
                  </div>

                  <div className="form-row">
                    <label className="field-label" htmlFor="message">
                      Mesajınız <span>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      minLength={10}
                      aria-describedby="message-help"
                    />
                    <small id="message-help" className="field-description">
                      Kısa ama açıklayıcı bir mesaj yazınız (en az 10 karakter).
                    </small>
                    <small
                      id="message-error"
                      className="field-error"
                      role="alert"
                      aria-live="polite"
                    />
                  </div>

                  <div className="form-footer">
                    <button type="submit">Mesajı Gönder (Örnek)</button>
                    <p className="form-helper">
                      Bu form sadece LAB-2 için ön yüzde çalışan bir örnektir; gönderilen
                      veriler herhangi bir sunucuya iletilmez.
                    </p>
                  </div>
                </form>
              </section>

              <footer className="footer-note">
                <span>Bu sayfa, LAB-2 semantik HTML ve erişilebilirlik gereksinimlerini hedefler.</span>
                <div className="footer-badges">
                  <span className="footer-chip">Semantik HTML5</span>
                  <span className="footer-chip">a11y · ARIA · Tab ile gezinme</span>
                </div>
              </footer>
            </aside>
          </main>
        </div>
      </div>
    </>
  )
}

export default App
