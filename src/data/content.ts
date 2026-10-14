// Contenido del sitio de BPA. Fuente: "datos de pba.docx", brochure SmartMedic y reunión del 8 oct 2026.
export const contact = {
  // Línea comercial del brochure de SmartMedic. Confirmar con David si BPA usa otra.
  whatsapp: '593995640953',
  whatsappLabel: '+593 99 564 0953',
  city: 'Guayaquil, Ecuador',
  hours: 'Lunes a viernes · 9h30 a 17h30',
}

export const smartmedicLandingUrl = (import.meta.env.VITE_SMARTMEDIC_LANDING_URL || 'http://localhost:5198').replace(/\/+$/, '')

export const navLinks = [
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#desarrollos', label: 'Desarrollos' },
  { href: '#smartmedic', label: 'SmartMedic' },
  { href: '#proceso', label: 'Cómo trabajamos' },
]

export const services = [
  {
    icon: 'fa-code',
    title: 'Software a la medida',
    description: 'Construimos desde cero el sistema que tu empresa necesita, pensado para tu forma de trabajar y no al revés.',
  },
  {
    icon: 'fa-truck-ramp-box',
    title: 'Logística y operaciones',
    description: 'Inventarios, bodegas, despachos, rutas y trazabilidad: control total de tu operación en tiempo real.',
  },
  {
    icon: 'fa-chart-line',
    title: 'Plataformas de gestión',
    description: 'Paneles administrativos, CRM, control de ventas, reportes y procesos internos en una sola herramienta.',
  },
  {
    icon: 'fa-plug',
    title: 'Integraciones y facturación electrónica',
    description: 'Conectamos tus sistemas con facturación electrónica, pasarelas de pago, WhatsApp, email y apps contables.',
  },
  {
    icon: 'fa-hospital',
    title: 'Sistemas para salud',
    description: 'Nuestra especialidad probada: historia clínica, agenda, admisiones y facturación para clínicas y redes médicas.',
  },
  {
    icon: 'fa-headset',
    title: 'Implementación y soporte',
    description: 'Capacitamos a tu equipo y te acompañamos con soporte presencial en Guayaquil y virtual en todo el país.',
  },
]

export const industries = [
  { icon: 'fa-truck-fast', label: 'Logística y distribución' },
  { icon: 'fa-industry', label: 'Manufactura' },
  { icon: 'fa-store', label: 'Comercio y retail' },
  { icon: 'fa-briefcase', label: 'Servicios profesionales' },
  { icon: 'fa-graduation-cap', label: 'Educación' },
  { icon: 'fa-heart-pulse', label: 'Salud' },
]

export const projects = [
  {
    name: 'SmartMedic',
    tag: 'Producto propio · SaaS',
    description:
      'Software médico y odontológico en la nube: agenda, historia clínica, odontograma, recetas, facturación electrónica y recordatorios por WhatsApp. Lo usan más de 300 profesionales.',
    image: '/img/web.webp',
    href: '#smartmedic',
  },
  {
    name: 'Sistema Médico Colón',
    tag: 'Desarrollo a la medida',
    description:
      'Sistema creado para la Clínica de Especialidades Colón, en Guayaquil, para gestionar su operación médica y administrativa.',
    icon: 'fa-house-medical',
  },
  {
    name: 'Red.Med',
    tag: 'Desarrollo a la medida',
    description:
      'Sistema para gestionar la trazabilidad de los servicios de intermediación médica, de la solicitud a la atención.',
    icon: 'fa-diagram-project',
  },
]

export const steps = [
  { title: 'Asesoría', description: 'Conversamos sobre tu operación, tus problemas y lo que quieres lograr. Sin costo.' },
  { title: 'Levantamiento', description: 'Definimos módulos, usuarios, integraciones, tiempos y presupuesto.' },
  { title: 'Desarrollo', description: 'Construimos por etapas y te mostramos avances para que el sistema quede a tu medida.' },
  { title: 'Implementación y soporte', description: 'Capacitamos a tu equipo, lo ponemos en marcha y te acompañamos.' },
]

export const interests = [
  { value: 'software-a-medida', label: 'Software a la medida' },
  { value: 'logistica', label: 'Logística y operaciones' },
  { value: 'sistema-medico', label: 'Sistema para salud' },
  { value: 'smartmedic', label: 'SmartMedic' },
  { value: 'integraciones', label: 'Integraciones y facturación electrónica' },
  { value: 'otro', label: 'Otro' },
]
