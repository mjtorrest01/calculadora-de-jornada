# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack
React 19 + TypeScript + Vite 8, estilos con CSS Variables (sin framework de UI), Vitest para lógica pura. Desplegable como estática (Vercel/Netlify/GitHub Pages).

## Users
Trabajadores de turnos y horarios rotativos que entran en distintos momentos del día y necesitan conocer con precisión su hora de salida según la jornada que aplica a su caso. La app está en español y usa formato militar 24h.

## Product Purpose
Calculadora web que determina automáticamente el tipo de jornada laboral (nocturna, mixta, diurna/vespertina) a partir de la hora de entrada —con descanso de 40 min opcional— y devuelve la hora de salida en tiempo real. El éxito es que el usuario obtenga la hora de salida correcta de forma instantánea y sin errores manuales.

## Positioning
Detección automática del tipo de jornada en cascada y en tiempo real: la app evalúa sola (de la mayor a la menor carga de horas) qué jornada aplica según la hora de entrada, y actualiza el resultado con cada tecla, sin botones ni recálculos manuales.

## Operating Context
- Entrada por teclado numérico con auto-completado (`530` → `05:30`, `1430` → `14:30`), evitando el selector nativo AM/PM.
- Opción de descanso de 40 minutos activada por defecto.
- Uso en navegador de escritorio y móvil (diseño responsive).

## Capabilities and Constraints
- Reglas de jornada (horas / hito límite):
  - Nocturna: **7h** — entra ≥21:00 o si al sumar 7h cruza las 21:00.
  - Mixta: **7.5h** — si al sumar 7.5h cruza las 18:00, o si la entrada es en madrugada (<06:00).
  - Diurna/Vespertina: **8h** — cualquier otro caso sin cruzar las 18:00.
- Descanso de 40 min sumado al total y a la hora de salida.
- Formato de salida 24h (`HH:MM`), en horas enteras y en media (7:00, 7:30, 8:00).
- Modo claro/oscuro con preferencia persistida en `localStorage` y respeto a `prefers-color-scheme` inicial.
- La hora de salida cruza la medianoche con `% 24` (giro de día correcto).
- Son 14 tests de lógica pura (cálculo + auto-completado).

## Brand Commitments
- Nombre: "Calculadora de Jornada" (repo: calculadora-de-jornada).
- Idioma de la interfaz: español.
- Formato de hora: militar 24h, sin AM/PM.

## Evidence on Hand
- Implementación funcional en `src/` (App.tsx, index.css, logic/calcularJornada.ts, formatTimeInput.ts) con tests en Vitest.
- README.md y deploy público en GitHub (mjtorrest01/calculadora-de-jornada).
- No hay testimoniales, casos de estudio ni precios constatados; no fabricarlos.

## Product Principles
- La exactitud del cálculo prima sobre cualquier estética: la hora de salida debe ser siempre correcta y legible.
- Rapidez y fricción cero: resultado en tiempo real y entrada mínima de teclado.
- Determinismo simple y puro: la lógica de jornada vive en funciones puras testeadas, separadas de la UI.
- Respeto al idioma y contexto del usuario: español, formato 24h, terminología de jornadas.
- Accesibilidad y adaptabilidad: tema claro/oscuro y diseño responsive por defecto.

## Accessibility & Inclusion
Sin requisito normativo declarado, pero se mantiene navegación por teclado, `aria-label` en controles y contraste compatible con los dos temas.