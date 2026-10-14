<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { contact, interests } from '@/data/content'
import { errorMessage, isServiceDown, sendLead, type LeadInput } from '@/services/api'

const form = reactive<LeadInput>({
  name: '',
  company: '',
  email: '',
  phone: '',
  interest: 'software-a-medida',
  preferredDate: '',
  message: '',
  website: '',
})
const sending = ref(false)
const sent = ref(false)
const error = ref('')
const offline = ref(false)

const today = new Date().toISOString().slice(0, 10)

const whatsappUrl = computed(() => {
  const interest = interests.find((item) => item.value === form.interest)?.label || ''
  const text = `Hola BPA, soy ${form.name.trim() || '…'}${form.company.trim() ? ` de ${form.company.trim()}` : ''}. Quiero reservar una asesoría sobre: ${interest}.`
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`
})

function validate() {
  if (form.name.trim().length < 3) return 'Escribe tu nombre.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) return 'Revisa tu correo electrónico.'
  if (!/^(09\d{8}|\+?5939\d{8}|\+[1-9]\d{6,14})$/.test(form.phone.replace(/[\s()-]/g, ''))) {
    return 'Escribe un celular válido, por ejemplo 0991234567.'
  }
  return ''
}

async function submit() {
  error.value = validate()
  if (error.value) return
  sending.value = true
  try {
    await sendLead(form)
    sent.value = true
  } catch (err) {
    // Si el servidor no responde, la reserva sigue por WhatsApp en vez de mostrar un error.
    if (isServiceDown(err)) offline.value = true
    else error.value = errorMessage(err)
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <section id="asesoria" class="section contact">
    <div class="container inner">
      <div class="copy">
        <span class="eyebrow light">Reserva tu asesoría</span>
        <h2>Cuéntanos qué necesita tu empresa</h2>
        <p>
          Agenda una asesoría sin costo. Te contactamos para entender tu operación y proponerte la mejor solución.
        </p>
        <ul>
          <li><i class="fa-solid fa-check" aria-hidden="true"></i> Respuesta en horario laboral</li>
          <li><i class="fa-solid fa-check" aria-hidden="true"></i> Presencial en Guayaquil o virtual</li>
          <li><i class="fa-solid fa-check" aria-hidden="true"></i> Propuesta clara de alcance y tiempos</li>
        </ul>
      </div>

      <div class="card">
        <div v-if="sent" class="done" role="status">
          <span class="ok"><i class="fa-solid fa-check" aria-hidden="true"></i></span>
          <h3>¡Solicitud recibida!</h3>
          <p>Te escribiremos muy pronto. Si prefieres, adelanta la conversación por WhatsApp.</p>
          <a :href="whatsappUrl" target="_blank" rel="noopener" class="btn btn-accent">
            <i class="fa-brands fa-whatsapp" aria-hidden="true"></i> Escribir por WhatsApp
          </a>
        </div>

        <div v-else-if="offline" class="done" role="status">
          <span class="ok"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i></span>
          <h3>Confirma tu asesoría por WhatsApp</h3>
          <p>Ya preparamos el mensaje con tus datos. Envíalo y te respondemos en horario laboral.</p>
          <a :href="whatsappUrl" target="_blank" rel="noopener" class="btn btn-accent">
            <i class="fa-brands fa-whatsapp" aria-hidden="true"></i> Enviar por WhatsApp
          </a>
        </div>

        <form v-else novalidate @submit.prevent="submit">
          <div class="fields">
            <label>
              Nombre
              <input v-model="form.name" type="text" autocomplete="name" maxlength="120" required />
            </label>
            <label>
              Empresa <span class="optional">(opcional)</span>
              <input v-model="form.company" type="text" autocomplete="organization" maxlength="120" />
            </label>
            <label>
              Correo
              <input v-model="form.email" type="email" autocomplete="email" maxlength="254" required />
            </label>
            <label>
              Celular (WhatsApp)
              <input v-model="form.phone" type="tel" autocomplete="tel" placeholder="0991234567" maxlength="16" required />
            </label>
            <label>
              ¿Qué te interesa?
              <select v-model="form.interest">
                <option v-for="item in interests" :key="item.value" :value="item.value">{{ item.label }}</option>
              </select>
            </label>
            <label>
              Fecha preferida <span class="optional">(opcional)</span>
              <input v-model="form.preferredDate" type="date" :min="today" />
            </label>
            <label class="wide">
              Cuéntanos brevemente <span class="optional">(opcional)</span>
              <textarea v-model="form.message" rows="4" maxlength="1500"></textarea>
            </label>
            <label class="hp" aria-hidden="true">
              Sitio web
              <input v-model="form.website" type="text" tabindex="-1" autocomplete="off" />
            </label>
          </div>
          <p v-if="error" class="error" role="alert">{{ error }}</p>
          <button type="submit" class="btn btn-accent submit" :disabled="sending">
            {{ sending ? 'Enviando…' : 'Reservar asesoría' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.contact {
  background: linear-gradient(135deg, #013a5d 0%, #02609a 100%);
  color: rgba(255, 255, 255, 0.85);
  scroll-margin-top: 60px;
}

.inner {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: clamp(32px, 6vw, 72px);
  align-items: center;
}

.copy {
  display: grid;
  gap: 20px;

  h2 {
    color: #fff;
    font-size: clamp(1.9rem, 3.6vw, 2.6rem);
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 10px;
  }

  i {
    color: var(--accent);
    margin-right: 8px;
  }
}

.eyebrow.light {
  color: #fff;
  background: rgba(255, 255, 255, 0.12);
  justify-self: start;
}

.card {
  background: #fff;
  color: var(--text);
  border-radius: 24px;
  padding: clamp(22px, 4vw, 36px);
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.25);
}

.fields {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;

  label {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 6px 4px;
    font-size: 0.88rem;
    font-weight: 600;
    color: var(--ink);
    min-width: 0;
  }

  .wide {
    grid-column: 1 / -1;
  }

  input,
  select,
  textarea {
    width: 100%;
    border: 1.5px solid var(--line);
    border-radius: 12px;
    padding: 13px 14px;
    font-size: 1rem;
    color: var(--ink);
    background: #fff;
    resize: vertical;

    &:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 4px rgba(2, 112, 180, 0.1);
    }
  }
}

.hp {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.optional {
  font-weight: 400;
  color: var(--muted);
}

.error {
  margin-top: 14px;
  background: rgba(217, 58, 58, 0.08);
  color: var(--danger);
  border-radius: 10px;
  padding: 10px 14px;
  font-weight: 600;
  font-size: 0.9rem;
}

.submit {
  width: 100%;
  margin-top: 18px;
}

.done {
  display: grid;
  justify-items: center;
  gap: 14px;
  text-align: center;
  padding: 20px 0;

  h3 {
    font-size: 1.5rem;
  }
}

.ok {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 1.7rem;
  color: #fff;
  background: var(--success);
}

@media (max-width: 900px) {
  .inner {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .fields {
    grid-template-columns: 1fr;
  }
}
</style>
