# 🕐 Calculadora de Jornada

> Calculadora web que determina automáticamente el **tipo de jornada laboral** y la **hora de salida** a partir de la hora de entrada, en formato militar (24h).

---

## ✨ Funcionalidades

### ⏰ Hora de salida automática
Ingresa tu hora de entrada y la app calcula en tiempo real la hora exacta de salida según el tipo de jornada aplicable.

### 🧠 Detección automática del tipo de jornada
La aplicación evalúa la hora de entrada en cascada (del mayor al menor beneficio) y aplica la jornada correcta:

| Tipo de jornada | Horas | Regla |
|-----------------|-------|-------|
| 🌙 **Nocturna** | 7:00 | Entra a las **21:00 o después**, o si al sumar 7h cruza las 21:00 |
| 🌗 **Mixta** | 7:30 | Si al sumar 7.5h cruza las **18:00** |
| 🌆 **Mixta (Madrugada)** | 7:30 | Entrada entre las **00:00 y 05:59** |
| ☀️ **Diurna/Vespertina** | 8:00 | Cualquier otro caso que no cruza las 18:00 |

### ☕ Descanso configurable
Casilla opcional para sumar el **descanso de 40 minutos** al cálculo final.

### ⌨️ Entrada por teclado con auto-completado
- Formato 24 horas (`00:00` – `23:59`), sin AM/PM.
- Escribe solo con teclado: al poner `530` se completa automáticamente a **`05:30`** (agrega el cero inicial).
- Al escribir `1430` se muestra como `14:30`.

### 🌓 Modo oscuro / claro
- Botón 🌙 / ☀️ para alternar entre ambos temas.
- La preferencia se guarda en `localStorage`.
- Respeta `prefers-color-scheme` del sistema al primer arranque.

### ⚡ Resultado en tiempo real
La hora de salida se actualiza instantáneamente con cada cambio, sin botones ni recargas.

---

## 🛠️ Tecnología usada

| Tecnología | Propósito |
|------------|-----------|
| ⚛️ **React 19** | Interfaz de usuario (componentes con estado y hooks) |
| 🟦 **TypeScript** | Tipado estático de todo el código |
| ⚡ **Vite 8** | Servidor de desarrollo y build de producción |
| 🧪 **Vitest** | Tests unitarios de la lógica pura |
| 🛡️ **Oxlint** | Linter y análisis de código |
| 🎨 **CSS (CSS Variables)** | Estilos con temas claro/oscuro sin frameworks |

---

## 📁 Estructura del proyecto

```
calculadora_de_jornada/
├── index.html                      # HTML de entrada (SPA)
├── package.json                    # Dependencias y scripts
├── vite.config.ts                  # Configuración de Vite
├── public/
│   └── favicon.svg                 # Icono de la aplicación
└── src/
    ├── main.tsx                    # Punto de montaje de React
    ├── App.tsx                     # Componente principal de la UI
    ├── index.css                   # Estilos globales (temas claro/oscuro)
    ├── formatTimeInput.ts          # Auto-completado de la hora (24h)
    ├── formatTimeInput.test.ts     # Tests del auto-completado
    └── logic/
        ├── calcularJornada.ts      # Lógica pura de cálculo de jornada
        └── calcularJornada.test.ts # Tests de la lógica de cálculo
```

---

## 🧩 Funciones clave

### `calcularJornada({ horaEntrada, tomaDescanso })` — `src/logic/calcularJornada.ts`
Función pura que recibe la hora de entrada (`"HH:MM"`) y si se toma descanso, y devuelve:

```ts
{
  horasJornada: number   // 7, 7.5 u 8 horas
  tipoJornada: string    // "Nocturna" | "Mixta" | "Diurna/Vespertina"
  detalle: string        // "*Alcanza las 21:00*", "*Madrugada*", etc.
  horaSalida: string     // Hora de salida en formato 24h, ej. "18:10"
}
```

### `formatTimeInput(valor)` — `src/formatTimeInput.ts`
Normaliza lo que el usuario escribe: extrae solo dígitos (máx. 4), inserta el `:` automáticamente y completa ceros iniciales (`530` → `05:30`, `1430` → `14:30`).

---

## 🚀 Cómo ejecutar

### Requisitos previos
- [Node.js](https://nodejs.org/) v18 o superior

### Instalación y desarrollo

```bash
npm install       # Instala dependencias
npm run dev       # Servidor de desarrollo (http://localhost:5173)
```

### Build de producción

```bash
npm run build     # Genera la carpeta dist/
npm run preview   # Previsualiza el build localmente
```

### Tests y calidad

```bash
npm test          # Ejecuta los tests unitarios (Vitest)
npm run lint      # Ejecuta el linter (Oxlint)
```

---

## 🧪 Tests

La lógica de cálculo está cubierta por **14 tests** que verifican los casos límite:

- 🕛 Madrugada (`00:00`, `05:59`)
- ☀️ Jornada diurna límite (`06:00`)
- 🌗 Cruce de las 18:00 (jornada mixta)
- 🌙 Cruce y entrada en jornada nocturna (≥ 21:00)
- ☕ Con y sin descanso de 40 min
- ⌨️ Auto-completado de la hora (`530` → `05:30`)

---

## 🌐 Despliegue

App 100% estática (sin backend). Se puede desplegar gratis en:

- **Vercel** → build: `npm run build`, salida: `dist`
- **Netlify** → build: `npm run build`, publish: `dist`
- **GitHub Pages** → mediante actions del repositorio

---

## 📝 Licencia

Este proyecto se distribuye bajo la licencia **MIT**. Consulta el archivo `LICENSE` para más detalles.

---

Hecho con ❤️ y ☕
