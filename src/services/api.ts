import axios from 'axios'

const http = axios.create({
  baseURL: (import.meta.env.VITE_API_BASE_URL || 'http://localhost:8190/api').replace(/\/+$/, ''),
  timeout: 15000,
})

export interface LeadInput {
  name: string
  company: string
  email: string
  phone: string
  interest: string
  preferredDate: string
  message: string
  website: string
}

export async function sendLead(input: LeadInput) {
  await http.post('/leads', { ...input, source: 'web' })
}

export function errorMessage(error: unknown) {
  if (axios.isAxiosError(error)) return error.response?.data?.message || 'No pudimos enviar tu solicitud. Intenta de nuevo.'
  return 'Ocurrió un error inesperado.'
}
