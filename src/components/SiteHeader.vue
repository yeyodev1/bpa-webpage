<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { navLinks } from '@/data/content'

const open = ref(false)
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="header" :class="{ scrolled, open }">
    <div class="container inner">
      <a href="#inicio" class="logo" aria-label="BPA Directores en Redes, inicio" @click="open = false">
        <img src="/img/bpa-logo-white.png" alt="BPA Directores en Redes" class="on-dark" />
        <img src="/img/bpa-logo-color.png" alt="" class="on-light" aria-hidden="true" />
      </a>

      <nav id="menu" class="nav" aria-label="Principal">
        <a v-for="link in navLinks" :key="link.href" :href="link.href" @click="open = false">{{ link.label }}</a>
        <a href="#asesoria" class="btn btn-accent cta" @click="open = false">Reserva tu asesoría</a>
      </nav>

      <button
        type="button"
        class="toggle"
        :aria-expanded="open"
        aria-controls="menu"
        :aria-label="open ? 'Cerrar menú' : 'Abrir menú'"
        @click="open = !open"
      >
        <i :class="['fa-solid', open ? 'fa-xmark' : 'fa-bars']" aria-hidden="true"></i>
      </button>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 30;
  transition: background 0.25s ease, box-shadow 0.25s ease;

  &.scrolled,
  &.open {
    background: rgba(255, 255, 255, 0.96);
    backdrop-filter: blur(10px);
    box-shadow: 0 1px 0 var(--line);

    .on-dark {
      display: none;
    }

    .on-light {
      display: block;
    }

    .nav a:not(.cta),
    .toggle {
      color: var(--ink);
    }
  }
}

.inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  min-height: 76px;
}

.logo img {
  height: 40px;
  width: auto;
}

.on-light {
  display: none;
}

.nav {
  display: flex;
  align-items: center;
  gap: 26px;

  a:not(.cta) {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;

    &:hover {
      color: var(--accent);
    }
  }
}

.cta {
  padding: 12px 20px;
  font-size: 0.92rem;
}

.toggle {
  display: none;
  width: 44px;
  height: 44px;
  border: 0;
  background: transparent;
  color: #fff;
  font-size: 1.4rem;
  cursor: pointer;
}

@media (max-width: 960px) {
  .toggle {
    display: block;
  }

  .nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #fff;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 8px 16px 20px;
    box-shadow: 0 20px 30px rgba(1, 58, 93, 0.12);
    display: none;

    a:not(.cta) {
      color: var(--ink);
      padding: 14px 4px;
      border-bottom: 1px solid var(--line);
    }

    .cta {
      margin-top: 16px;
    }
  }

  .open .nav {
    display: flex;
  }
}
</style>
