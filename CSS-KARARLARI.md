# CSS Kararları

## 1. Breakpoint Seçimi

- **Neden 640px ve 1024px seçtim?** Mobil, tablet ve masaüstü için föyde önerilen kırılım noktalarını kullandım: <640px mobil, 640–1024px tablet, >1024px masaüstü (`@media (min-width: 640px)` ve `@media (min-width: 1024px)`) ([`file://lab3.pdf`](file://lab3.pdf)).  
- **İçeriğim bu noktalarda nasıl değişiyor?** Mobilde tek sütun; 640px üstünde ana içerik ve aside iki sütuna ayrılıyor; 1024px üstünde grid boşlukları büyüyor ve kart ızgarası daha rahat nefes alacak şekilde genişliyor.

## 2. Layout Tercihleri

- **Header için neden Flexbox seçtim?** Navigasyon çubuğu ve marka alanı tek boyutlu hizalama gerektiriyor; Flexbox ile logo ve menüyü yatayda hizalayıp, dar ekranlarda kolayca dikey yığılan bir yapı kurmak daha basit oldu.  
- **Proje kartları için neden Grid seçtim?** Kartlar iki boyutlu bir ızgarada, satır/sütun kırılımlarıyla akmalı; CSS Grid’in `repeat(auto-fit, minmax(...))` deseni kartların satır sayısını ekrana göre otomatik ayarlamasını sağlıyor.  
- **auto-fit mi auto-fill mi kullandım, neden?** `repeat(auto-fit, minmax(220px, 1fr))` kullandım; auto-fit, yeterli alan olmadığında boş kolon bırakmadan kartları sıkıştırıp boşlukları gizleyerek daha akıcı bir düzen veriyor.

## 3. Design Tokens

- **Hangi renk paletini seçtim ve neden?** Açık, mavi ağırlıklı bir palet (`--color-accent`, `--color-bg`, `--color-text-soft`) seçtim; bu, ders föylerindeki örneklerle uyumlu ve erişilebilir kontrast sunuyor ([`file://lab3.pdf`](file://lab3.pdf)).  
- **Spacing skalasını nasıl belirledim?** Küçükten büyüğe `--space-1` ile `--space-5` arasında 4’lü ve 8’li px karşılığı olan değerler kullandım; böylece tüm padding/margin kararları rastgele değil, bu ölçekten seçiliyor.  
- **Fluid typography için clamp değerlerini nasıl ayarladım?** `clamp()` içinde minimum/maximum font boyutlarını okuması rahat değerler olarak seçip, orta değerde küçük bir `vw` payı bıraktım; böylece çok geniş ekranlarda yazı aşırı büyümeden, küçük ekranlarda da okunaklı kalıyor.

## 4. Responsive Stratejiler

- **Mobile-first yaklaşımını nasıl uyguladım?** Varsayılan CSS kurallarını mobil için yazdım; daha büyük ekranlar için yalnızca gerektiği yerde `@media (min-width: 640px)` ve `@media (min-width: 1024px)` ile ekstra kurallar ekleyerek mobile-first stratejisini izledim ([`file://lab3.pdf`](file://lab3.pdf)).  
- **Hangi elemanlar breakpoint’lerde değişiyor?** Ana `main` ızgarası tek sütundan iki sütuna geçiyor, proje kartları satırdan ızgaraya dönüşüyor ve header hizalaması mobilde dikey, tablet/masaüstünde yatay olacak şekilde ayarlanıyor.  
- **Görsel boyutlarını nasıl yönettim?** Global `img { max-width: 100%; height: auto; }` kuralı ile avatar ve ileride eklenecek resimlerin kapsayıcılarını taşmamasını, oranlarının bozulmadan ölçeklenmesini garanti altına aldım.


