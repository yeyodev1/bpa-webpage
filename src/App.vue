<script setup lang="ts">
import SiteHeader from '@/components/SiteHeader.vue'
import ContactSection from '@/components/ContactSection.vue'
import { contact, industries, navLinks, projects, services, smartmedicLandingUrl, steps } from '@/data/content'

const year = new Date().getFullYear()
</script>

<template>
  <SiteHeader />

  <main>
    <section id="inicio" class="hero">
      <svg class="pulse" viewBox="0 0 1200 200" preserveAspectRatio="none" aria-hidden="true">
        <polyline points="0,120 420,120 470,120 500,40 540,190 575,80 600,120 1200,120" />
      </svg>
      <div class="container hero-inner">
        <div class="hero-copy">
          <span class="eyebrow light">Desarrollo de software a la medida</span>
          <h1>Creamos el software que <span>hace crecer</span> tu operación</h1>
          <p>
            Diseñamos y desarrollamos sistemas a la medida para empresas de cualquier industria: logística,
            operaciones, ventas, salud y más. Somos los creadores de SmartMedic.
          </p>
          <div class="actions">
            <a href="#asesoria" class="btn btn-accent">Reserva tu asesoría</a>
            <a href="#desarrollos" class="btn btn-outline-light">Ver desarrollos</a>
          </div>
        </div>
        <img src="/img/sistema-general.webp" alt="Sistema desarrollado por BPA en computador, tablet y celular" class="hero-img" fetchpriority="high" />
      </div>
    </section>

    <section id="nosotros" class="section about">
      <div class="container about-inner">
        <div>
          <span class="eyebrow">Quiénes somos</span>
          <h2>Tecnología hecha en Guayaquil para empresas que quieren crecer</h2>
        </div>
        <div class="about-text">
          <p>
            BPA Directores en Redes es una empresa desarrolladora de software. Nos especializamos en entender cómo
            opera cada negocio y convertirlo en un sistema que ahorra tiempo, ordena procesos y da control.
            Nuestros sistemas ya funcionan en clínicas, redes de servicios y cientos de profesionales; hoy damos
            la cara para construir también el tuyo.
          </p>
          <p class="mission">
            <i class="fa-solid fa-quote-left" aria-hidden="true"></i>
            Facilitar el trabajo de nuestros clientes y contribuir a su crecimiento, ¡es nuestra misión!
          </p>
          <ul class="facts">
            <li><b>3</b><span>sistemas desarrollados y en uso</span></li>
            <li><b>+300</b><span>usuarios trabajan con nuestro software</span></li>
            <li><b>100%</b><span>en la nube, desde cualquier dispositivo</span></li>
          </ul>
        </div>
      </div>
    </section>

    <section id="servicios" class="section services">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Servicios</span>
          <h2>Lo que podemos construir para ti</h2>
          <p>Si tu empresa necesita un sistema para organizar su operación, lo desarrollamos contigo, sin importar tu industria.</p>
        </div>
        <ul class="service-grid">
          <li v-for="service in services" :key="service.title">
            <span class="icon"><i :class="['fa-solid', service.icon]" aria-hidden="true"></i></span>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </li>
        </ul>
        <div class="industries">
          <p>Trabajamos con empresas de</p>
          <ul>
            <li v-for="industry in industries" :key="industry.label">
              <i :class="['fa-solid', industry.icon]" aria-hidden="true"></i> {{ industry.label }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section id="desarrollos" class="section projects">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Desarrollos</span>
          <h2>Sistemas que ya están funcionando</h2>
        </div>
        <div class="project-grid">
          <article v-for="(project, index) in projects" :key="project.name" class="project" :class="{ featured: index === 0 }">
            <img v-if="project.image" :src="project.image" :alt="`Pantalla de ${project.name}`" loading="lazy" />
            <span v-else class="project-icon"><i :class="['fa-solid', project.icon]" aria-hidden="true"></i></span>
            <div class="project-body">
              <span class="tag">{{ project.tag }}</span>
              <h3>{{ project.name }}</h3>
              <p>{{ project.description }}</p>
              <a v-if="project.href" :href="project.href" class="more">Conocer {{ project.name }} <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="smartmedic" class="section smartmedic">
      <div class="container sm-inner">
        <div class="sm-copy">
          <img src="/img/smartmedic-logo.png" alt="SmartMedic Software Médico" class="sm-logo" loading="lazy" />
          <h2>Administrar tu clínica nunca fue tan fácil</h2>
          <p>
            Nuestro producto estrella. Agenda digital, historia clínica, odontograma, recetas y certificados,
            facturación electrónica y recordatorios por WhatsApp en una sola plataforma.
          </p>
          <ul class="sm-stats">
            <li><b>300%</b> más rapidez entre consultas</li>
            <li><b>20%</b> más pacientes recurrentes</li>
          </ul>
          <div class="sm-price">Desde <b>$30 + IVA</b> por profesional al mes</div>
          <a :href="smartmedicLandingUrl" class="btn btn-accent">
            Compra tu licencia <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <img src="/img/flyer.webp" alt="Doctora usando SmartMedic con su paciente" class="sm-img" loading="lazy" />
      </div>
    </section>

    <section id="proceso" class="section process">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Cómo trabajamos</span>
          <h2>De la idea al sistema funcionando</h2>
        </div>
        <ol class="steps">
          <li v-for="(step, index) in steps" :key="step.title">
            <span class="num">{{ index + 1 }}</span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </li>
        </ol>
      </div>
    </section>

    <ContactSection />
  </main>

  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <img src="/img/bpa-logo-white.png" alt="BPA Directores en Redes" loading="lazy" />
        <p>Software a la medida para empresas de cualquier industria.</p>
      </div>
      <nav aria-label="Pie de página">
        <a v-for="link in navLinks" :key="link.href" :href="link.href">{{ link.label }}</a>
      </nav>
      <ul class="footer-contact">
        <li><i class="fa-solid fa-location-dot" aria-hidden="true"></i> {{ contact.city }}</li>
        <li><i class="fa-brands fa-whatsapp" aria-hidden="true"></i> <a :href="`https://wa.me/${contact.whatsapp}`" target="_blank" rel="noopener">{{ contact.whatsappLabel }}</a></li>
        <li><i class="fa-regular fa-clock" aria-hidden="true"></i> {{ contact.hours }}</li>
      </ul>
    </div>
    <p class="copy container">© {{ year }} BPA Directores en Redes. Todos los derechos reservados.</p>
  </footer>
</template>

<style scoped lang="scss">
.eyebrow.light {
  color: #fff;
  background: rgba(255, 255, 255, 0.12);
  justify-self: start;
}

.btn-outline-light {
  color: #fff;
  border: 1.5px solid rgba(255, 255, 255, 0.4);
  background: transparent;

  &:hover {
    border-color: #fff;
    background: rgba(255, 255, 255, 0.08);
  }
}

.hero {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #013a5d 0%, #02609a 55%, #0270b4 100%);
  color: rgba(255, 255, 255, 0.85);
  padding: 140px 0 90px;
}

.pulse {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 12%;
  width: 100%;
  height: 160px;
  opacity: 0.14;

  polyline {
    fill: none;
    stroke: #fff;
    stroke-width: 3;
    vector-effect: non-scaling-stroke;
  }
}

.hero-inner {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  gap: 48px;
  align-items: center;
}

.hero-copy {
  display: grid;
  gap: 22px;

  h1 {
    color: #fff;
    font-size: clamp(2.2rem, 5vw, 3.6rem);
    font-weight: 800;

    span {
      color: var(--accent);
    }
  }

  p {
    font-size: 1.12rem;
    max-width: 540px;
  }
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.hero-img {
  width: 100%;
  height: auto;
  background: #fff;
  border-radius: 24px;
  padding: clamp(12px, 2.5vw, 24px);
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.3);
}

.about-inner {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: clamp(32px, 6vw, 80px);

  > div:first-child {
    display: grid;
    gap: 16px;
    align-content: start;
  }

  .eyebrow {
    justify-self: start;
  }

  h2 {
    font-size: clamp(1.8rem, 3.4vw, 2.5rem);
  }
}

.about-text {
  display: grid;
  gap: 22px;
  font-size: 1.08rem;
}

.mission {
  border-left: 4px solid var(--accent);
  padding: 6px 0 6px 20px;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--ink);

  i {
    color: var(--accent);
    margin-right: 6px;
  }
}

.facts {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;

  li {
    background: var(--bg-soft);
    border-radius: var(--radius);
    padding: 18px;
    display: grid;
    gap: 2px;
  }

  b {
    font-size: 1.9rem;
    color: var(--primary);
    font-weight: 800;
  }

  span {
    font-size: 0.9rem;
  }
}

.services {
  background: var(--bg-soft);

  .section-head p {
    color: var(--muted);
  }
}

.service-grid {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
  gap: 20px;

  li {
    background: #fff;
    border-radius: var(--radius);
    padding: 28px;
    display: grid;
    gap: 12px;
    align-content: start;
    border: 1px solid var(--line);
  }

  h3 {
    font-size: 1.15rem;
  }
}

.icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  font-size: 1.3rem;
  color: #fff;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
}

.industries {
  margin-top: 40px;
  display: grid;
  justify-items: center;
  gap: 14px;
  text-align: center;

  p {
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--muted);
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }

  li {
    background: #fff;
    border: 1px solid var(--line);
    border-radius: 999px;
    padding: 9px 16px;
    font-weight: 600;
    color: var(--ink);
    font-size: 0.92rem;
  }

  i {
    color: var(--accent);
    margin-right: 4px;
  }
}

.project-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  grid-template-rows: auto auto;
  gap: 22px;
}

.project {
  border: 1px solid var(--line);
  border-radius: 22px;
  overflow: hidden;
  display: grid;
  align-content: start;
  background: #fff;

  img {
    width: 100%;
    height: 260px;
    object-fit: cover;
    object-position: top;
    background: var(--bg-soft);
    border-bottom: 1px solid var(--line);
  }

  &.featured {
    grid-row: span 2;
  }
}

.project-icon {
  margin: 28px 28px 0;
  width: 60px;
  height: 60px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  color: var(--accent);
  background: rgba(238, 139, 5, 0.12);
}

.project-body {
  padding: 24px 28px 28px;
  display: grid;
  gap: 10px;

  h3 {
    font-size: 1.4rem;
  }
}

.tag {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--primary);
}

.more {
  color: var(--accent-dark);
  font-weight: 700;
  text-decoration: none;

  i {
    margin-left: 6px;
    transition: transform 0.2s ease;
  }

  &:hover i {
    transform: translateX(4px);
  }
}

.smartmedic {
  background: linear-gradient(180deg, #fff 0%, #fff6ea 100%);
}

.sm-inner {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: clamp(32px, 6vw, 72px);
  align-items: center;
}

.sm-copy {
  display: grid;
  gap: 20px;
  justify-items: start;

  h2 {
    font-size: clamp(1.9rem, 3.8vw, 2.8rem);
  }
}

.sm-logo {
  height: 64px;
  width: auto;
}

.sm-stats {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  li {
    background: #fff;
    border: 1px solid var(--line);
    border-radius: 12px;
    padding: 10px 14px;
    font-size: 0.92rem;
  }

  b {
    color: var(--accent-dark);
  }
}

.sm-price {
  font-size: 1.05rem;

  b {
    color: var(--ink);
  }
}

.sm-img {
  width: 100%;
  max-width: 440px;
  justify-self: center;
  border-radius: 24px;
  box-shadow: var(--shadow);
}

.steps {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  counter-reset: step;

  li {
    position: relative;
    display: grid;
    gap: 10px;
    align-content: start;
    padding: 26px 22px;
    border-radius: var(--radius);
    background: var(--bg-soft);
  }

  h3 {
    font-size: 1.12rem;
  }
}

.num {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-weight: 800;
  color: #fff;
  background: var(--accent);
}

.footer {
  background: #01263d;
  color: rgba(255, 255, 255, 0.7);
  padding: 56px 0 24px;
  font-size: 0.94rem;

  a {
    color: rgba(255, 255, 255, 0.85);
    text-decoration: none;

    &:hover {
      color: var(--accent);
    }
  }
}

.footer-inner {
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr;
  gap: 36px;
}

.footer-brand {
  display: grid;
  gap: 14px;
  align-content: start;

  img {
    height: 46px;
    width: auto;
  }
}

.footer nav {
  display: grid;
  gap: 10px;
  align-content: start;
}

.footer-contact {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;

  i {
    width: 18px;
    color: var(--accent);
  }
}

.copy {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 40px;
  padding-top: 20px;
  font-size: 0.84rem;
  text-align: center;
}

@media (max-width: 960px) {
  .hero {
    padding-top: 120px;
  }

  .hero-inner,
  .about-inner,
  .sm-inner {
    grid-template-columns: 1fr;
  }

  .project-grid {
    grid-template-columns: 1fr;

    .featured {
      grid-row: auto;
    }
  }

  .steps {
    grid-template-columns: 1fr 1fr;
  }

  .footer-inner {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .facts,
  .steps {
    grid-template-columns: 1fr;
  }

  .actions .btn {
    width: 100%;
  }
}
</style>
