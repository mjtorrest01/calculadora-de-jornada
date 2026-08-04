export interface CalcularJornadaParams {
  horaEntrada: string
  tomaDescanso: boolean
}

export type TipoJornada = 'Nocturna' | 'Mixta' | 'Diurna/Vespertina'

export interface CalcularJornadaResult {
  horasJornada: number
  tipoJornada: TipoJornada
  detalle: string
  horaSalida: string
}

export const DESCANSO_MIN = 40
export const VEINTIUNO = 21 * 60
export const DIECIOCHO = 18 * 60
export const SEIS = 6 * 60

export function calcularJornada({
  horaEntrada,
  tomaDescanso,
}: CalcularJornadaParams): CalcularJornadaResult | null {
  const match = /^(\d{1,2}):(\d{2})$/.exec(horaEntrada)
  if (!match) return null

  const entradaMin = Number(match[1]) * 60 + Number(match[2])
  const descansoMin = tomaDescanso ? DESCANSO_MIN : 0

  const salidaCon7Horas = entradaMin + 7 * 60 + descansoMin
  const salidaCon7yMedia = entradaMin + 7.5 * 60 + descansoMin

  let horasJornada: number
  let tipoJornada: TipoJornada
  let detalle = ''

  if (entradaMin >= VEINTIUNO || salidaCon7Horas >= VEINTIUNO) {
    horasJornada = 7
    tipoJornada = 'Nocturna'
    if (entradaMin < VEINTIUNO) detalle = '*Alcanza las 21:00*'
  } else if (entradaMin >= DIECIOCHO || salidaCon7yMedia >= DIECIOCHO) {
    horasJornada = 7.5
    tipoJornada = 'Mixta'
    detalle = '*Alcanza las 18:00*'
  } else if (entradaMin < SEIS) {
    horasJornada = 7.5
    tipoJornada = 'Mixta'
    detalle = '*Madrugada*'
  } else {
    horasJornada = 8
    tipoJornada = 'Diurna/Vespertina'
  }

  const totalMinutosSalida = entradaMin + horasJornada * 60 + descansoMin
  const horasSalida = Math.floor(totalMinutosSalida / 60) % 24
  const minutosSalida = Math.round(totalMinutosSalida % 60)

  return {
    horasJornada,
    tipoJornada,
    detalle,
    horaSalida: `${String(horasSalida).padStart(2, '0')}:${String(minutosSalida).padStart(2, '0')}`,
  }
}
