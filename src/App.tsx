import { useEffect, useMemo, useState } from 'react'
import { calcularJornada } from './logic/calcularJornada'
import { formatTimeInput } from './formatTimeInput'

type Tema = 'light' | 'dark'

export default function App() {
  const [horaEntrada, setHoraEntrada] = useState('')
  const [tomaDescanso, setTomaDescanso] = useState(true)
  const [tema, setTema] = useState<Tema>(() => {
    const guardado = localStorage.getItem('tema')
    if (guardado === 'light' || guardado === 'dark') return guardado
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tema)
    localStorage.setItem('tema', tema)
  }, [tema])

  function handleInputChange(valor: string) {
    setHoraEntrada(formatTimeInput(valor))
  }

  const resultado = useMemo(
    () => calcularJornada({ horaEntrada, tomaDescanso }),
    [horaEntrada, tomaDescanso],
  )

  const jornadaText =
    resultado && resultado.detalle
      ? `Jornada ${resultado.tipoJornada} (${formatHoras(resultado.horasJornada)}) ${resultado.detalle}`
      : resultado
        ? `Jornada ${resultado.tipoJornada} (${formatHoras(resultado.horasJornada)})`
        : null

  return (
    <>
      <button
        type="button"
        className="theme-toggle"
        onClick={() => setTema((t) => (t === 'light' ? 'dark' : 'light'))}
        aria-label="Cambiar tema"
        title={tema === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
      >
        {tema === 'light' ? '🌙' : '☀️'}
      </button>

      <div className="card">
        <h2>Consulta de Salida</h2>

        <div className="form-group">
          <label htmlFor="horaEntrada">Hora de entrada (24h, ej. 14:30):</label>
          <input
            type="text"
            id="horaEntrada"
            className="hora-input"
            value={horaEntrada}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder="HH:MM"
            inputMode="numeric"
            autoComplete="off"
          />
        </div>

        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            id="tomaDescanso"
            checked={tomaDescanso}
            onChange={(e) => setTomaDescanso(e.target.checked)}
          />
          <label htmlFor="tomaDescanso" style={{ margin: 0, cursor: 'pointer' }}>
            Toma descanso (40 min)
          </label>
        </div>

        <div className="form-group">
          <label>Tipo de Jornada Aplicada:</label>
          <div className="info-box" data-pending={!horaEntrada}>
            {jornadaText ?? 'Esperando hora de entrada...'}
          </div>
        </div>

        {resultado && (
          <div id="resultado">Hora de salida: {resultado.horaSalida}</div>
        )}
      </div>
    </>
  )
}

function formatHoras(horas: number): string {
  if (horas % 1 !== 0) return '7:30'
  return `${horas}:00`
}