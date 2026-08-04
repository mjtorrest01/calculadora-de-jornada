import { describe, expect, it } from 'vitest'
import { calcularJornada } from './calcularJornada'

describe('calcularJornada', () => {
  it('devuelve null con hora de entrada vacía o inválida', () => {
    expect(calcularJornada({ horaEntrada: '', tomaDescanso: true })).toBeNull()
    expect(calcularJornada({ horaEntrada: 'abc', tomaDescanso: true })).toBeNull()
  })

  it('madrugada: 00:00 con descanso -> Mixta, sale a las 08:10', () => {
    expect(calcularJornada({ horaEntrada: '00:00', tomaDescanso: true })).toEqual({
      horasJornada: 7.5,
      tipoJornada: 'Mixta',
      detalle: '*Madrugada*',
      horaSalida: '08:10',
    })
  })

  it('madrugada límite: 05:59 con descanso -> Mixta, sale a las 14:09', () => {
    const res = calcularJornada({ horaEntrada: '05:59', tomaDescanso: true })
    expect(res).not.toBeNull()
    expect(res!.tipoJornada).toBe('Mixta')
    expect(res!.detalle).toBe('*Madrugada*')
    expect(res!.horaSalida).toBe('14:09')
  })

  it('jornada diurna/vespertina: 10:00 sin descanso -> 8h, sale a las 18:00', () => {
    expect(calcularJornada({ horaEntrada: '10:00', tomaDescanso: false })).toEqual({
      horasJornada: 8,
      tipoJornada: 'Diurna/Vespertina',
      detalle: '',
      horaSalida: '18:00',
    })
  })

  it('jornada diurna límite: 06:00 sin descanso -> 8h, sale a las 14:00', () => {
    const res = calcularJornada({ horaEntrada: '06:00', tomaDescanso: false })
    expect(res).not.toBeNull()
    expect(res!.tipoJornada).toBe('Diurna/Vespertina')
    expect(res!.horasJornada).toBe(8)
    expect(res!.horaSalida).toBe('14:00')
  })

  it('mixta por cruce de 18:00: 10:00 con descanso -> 7.5h, sale a las 18:10', () => {
    expect(calcularJornada({ horaEntrada: '10:00', tomaDescanso: true })).toEqual({
      horasJornada: 7.5,
      tipoJornada: 'Mixta',
      detalle: '*Alcanza las 18:00*',
      horaSalida: '18:10',
    })
  })

  it('nocturna por alcance de 21:00: 13:30 con descanso -> 7h, sale a las 21:10', () => {
    expect(calcularJornada({ horaEntrada: '13:30', tomaDescanso: true })).toEqual({
      horasJornada: 7,
      tipoJornada: 'Nocturna',
      detalle: '*Alcanza las 21:00*',
      horaSalida: '21:10',
    })
  })

  it('nocturna: 21:00 sin descanso -> 7h, sale a las 04:00', () => {
    expect(calcularJornada({ horaEntrada: '21:00', tomaDescanso: false })).toEqual({
      horasJornada: 7,
      tipoJornada: 'Nocturna',
      detalle: '',
      horaSalida: '04:00',
    })
  })

  it('nocturna: 22:00 con descanso -> 7h, sale a las 05:40', () => {
    const res = calcularJornada({ horaEntrada: '22:00', tomaDescanso: true })
    expect(res).not.toBeNull()
    expect(res!.tipoJornada).toBe('Nocturna')
    expect(res!.horasJornada).toBe(7)
    expect(res!.horaSalida).toBe('05:40')
  })
})
