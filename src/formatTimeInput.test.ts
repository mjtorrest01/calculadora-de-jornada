import { describe, expect, it } from 'vitest'
import { formatTimeInput } from './formatTimeInput'

describe('formatTimeInput', () => {
  it('completa la hora con cero inicial cuando se omiten 3 dígitos', () => {
    expect(formatTimeInput('530')).toBe('05:30')
    expect(formatTimeInput('830')).toBe('08:30')
  })

  it('deja 4 dígitos como HH:MM normal', () => {
    expect(formatTimeInput('1430')).toBe('14:30')
    expect(formatTimeInput('0530')).toBe('05:30')
    expect(formatTimeInput('0905')).toBe('09:05')
  })

  it('mantiene horas de 2 dígitos en progreso con minuto incompleto', () => {
    expect(formatTimeInput('143')).toBe('14:3')
    expect(formatTimeInput('14')).toBe('14')
    expect(formatTimeInput('1')).toBe('1')
  })

  it('devuelve vacío para entrada vacía', () => {
    expect(formatTimeInput('')).toBe('')
  })

  it('ignora caracteres no numéricos y limita a 4 dígitos', () => {
    expect(formatTimeInput('05:30')).toBe('05:30')
    expect(formatTimeInput('123456')).toBe('12:34')
  })
})
