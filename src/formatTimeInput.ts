export function formatTimeInput(valor: string): string {
  const digitos = valor.replace(/\D/g, '').slice(0, 4)

  if (!digitos) return ''
  if (digitos.length <= 2) return digitos

  const hora2Digitos = Number(digitos.slice(0, 2))

  if (digitos.length === 3) {
    if (hora2Digitos >= 10 && hora2Digitos <= 23) {
      return `${digitos.slice(0, 2)}:${digitos.slice(2)}`
    }
    return `0${digitos[0]}:${digitos.slice(1, 3)}`
  }

  return `${digitos.slice(0, 2)}:${digitos.slice(2)}`
}
