---
name: Calculadora de Jornada
description: Calculadora web de hora de salida según jornada (nocturna/mixta/diurna), en formato 24h, con tema claro/oscuro
colors:
  bg: "#f4f7f6"
  bg-dark: "#121212"
  surface: "#ffffff"
  surface-dark: "#1e1e1e"
  text-primary: "#333333"
  text-primary-dark: "#e6e6e6"
  text-muted: "#555555"
  text-muted-dark: "#aaaaaa"
  info-bg: "#e3f2fd"
  info-text: "#0d47a1"
  success-bg: "#d4edda"
  success-text: "#155724"
  success-border: "#c3e6cb"
  result-bg: "#e9ecef"
  result-text: "#28a745"
  input-bg: "#ffffff"
  input-border: "#cccccc"
  control-bg: "#f8f9fa"
  control-border: "#dddddd"
  accent-bg: "#333333"
  accent-text: "#ffffff"
typography:
  display:
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 700
  body:
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
    fontSize: "16px"
    fontWeight: 400
  label:
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
    fontWeight: 700
rounded:
  sm: "5px"
  md: "10px"
  full: "50%"
spacing:
  xs: "8px"
  sm: "10px"
  md: "16px"
  lg: "30px"
  xl: "20px"
components:
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "30px"
  hora-input:
    backgroundColor: "{colors.input-bg}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    padding: "10px 10px"
  theme-toggle:
    backgroundColor: "{colors.accent-bg}"
    textColor: "{colors.accent-text}"
    rounded: "{rounded.full}"
---

# Design System: Calculadora de Jornada

## Overview

**Creative North Star: "El Reloj de Turno"**

Una herramienta de utilidad que se comporta como un reloj de fichar digital: precisa, serena y sin fricción. La interfaz es una única tarjeta centrada que concentra toda la atención en una sola tarea —conocer la hora de salida— y actualiza el resultado en tiempo real conforme el usuario escribe. No hay navegación, ni colas, ni ruido: el diseño se retira para que el dato mande.

La densidad es ligera, con amplia respiración y pocos elementos por pantalla. La personalidad es clínica pero cálida: grises suaves con acentos semánticos (azul para información, verde para éxito) que comunican estado sin depender del texto. Todo el sistema adopta un modo oscuro equivalente que preserva exactamente los mismos roles de color.

**Key Characteristics:**
- Centrado editorial: tarjeta única, superficie y espaciado generosos.
- Acentos semánticos únicamente: azul = información, verde = resultado/hora de salida.
- Neutros suaves y cálidos como base, en tema claro y oscuro.
- Estados de control refinados: suaves, discretos, orientados a lectura rápida.
- Tipografía de sistema (Segoe UI) legible a 16px, sin dependencias externas.

## Colors

Paleta fría y semántica: neutros suaves sostienen la interfaz y los acentos solo aparecen donde comunican estado.

### Primary
- **Accent Neutro** (#333333): botones y controles de acción; contraste fuerte sobre superficies claras. En tema oscuro se invierte a neutro claro (#f0f0f0) con texto oscuro.

### Neutral
- **Fondo de Marco** (#f4f7f6): fondo de página en tema claro; casi blanco con matiz frío. / **Fondo Nocturno** (#121212): fondo en tema oscuro.
- **Superficie** (#ffffff): fondo de la tarjeta y de inputs. / **Superficie Nocturna** (#1e1e1e): tarjeta en tema oscuro.
- **Texto Principal** (#333333): cuerpo de texto y títulos. / **Texto Nocturno** (#e6e6e6): texto en tema oscuro.
- **Texto Atenuado** (#555555): etiquetas y rótulos secundarios. / **Atenuado Nocturno** (#aaaaaa): etiquetas en tema oscuro.
- **Borde de Control** (#cccccc / #444444): borde predeterminado de inputs en claridad / oscuridad.

### Info
- **Fondo Info** (#e3f2fd / #16324f): caja que describe la jornada aplicada y su detalle.
- **Texto Info** (#0d47a1 / #8fbeeb): azul profundo de lectura sobre el fondo de información.

### Success
- **Fondo Éxito** (#d4edda / #16352a): caja de jornada válida (hay hora de entrada).
- **Texto Éxito** (#155724 / #7fd09a): verde de confirmación. 
- **Borde Éxito** (#c3e6cb / #2c5a44): contorno tenue de la caja de éxito.

### Result
- **Fondo Resultado** (#e9ecef / #2a2a2a): franja que muestra la hora de salida calculada.
- **Éxito Resultado** (#28a745 / #4caf50): verde que resalta la hora de salida. 
- **Borde Resultado**: dashed verde (#28a745 / #4caf50) que marca la franja como resultado vivo.

### Named Rules
**The Semantic-Mute Rule.** Los acentos (azul y verde) se usan solo donde indican estado (información y resultado). El resto de la interfaz permanece en neutros; cuando todo es color, nada comunica.

## Typography

**Display Font:** Segoe UI (Tahoma, Geneva, Verdana, sans-serif) — pila de sistema, sin cargas externas, maximiza rendimiento y legibilidad local.

**Character:** una sola familia utilitaria de la plataforma. La jerarquía se sostiene por peso y tamaño más que por cambio de fuente, manteniendo la lectura técnica rápida y sobria.

### Hierarchy
- **Display** (700, 1.35rem): título de la tarjeta (h2), centrado.
- **Body** (400, 16px): entrada de hora y contenido general; medida confortable dentro de la tarjeta de 400px.
- **Label** (700, tamaño heredado): rótulos de formulario y cajas de estado en negrita para escaneo rápido.

## Layout

Modelo de una sola columna centrada. El `body` usa flexbox para centrar vertical y horizontalmente, con `padding: 16px` y `min-height: 100vh`. La tarjeta tiene `width: 100%` con `max-width: 400px`, asegurando usabilidad en móvil y nitidez en escritorio.

El ritmo vertical usa `20px` entre grupos de formulario y `30px` de padding interno de la tarjeta. Los bloques de estado (caja de jornada, resultado) se separan con `20px` y se hacen expandir (via `margin-top`) para marcar secuencia: primero decide la jornada, luego aparece la salida.

## Elevation & Depth

Sistema plano con una única sombra ambiental suave: `0 4px 8px rgba(0,0,0,0.1)` en tema claro y `0 4px 8px rgba(0,0,0,0.5)` en oscuro. La sombra flota la tarjeta y el botón de tema sobre el fondo sin competir por atención; no se usa profundidad múltiple.

### Named Rules
**The Flat-By-Default Rule.** Las superficies son planas en reposo; la única elevación ambiental pertenece a la tarjeta y al toggle de tema. No añadir sombras por estado salvo que se justifique un énfasis fuerte.

## Shapes

Lenguaje de esquinas suave y coherente: radios de `5px` para bloques secundarios (caja de información, checkbox, inputs y resultado) y `10px` para la tarjeta principal, que subordina jerárquicamente la contención. El botón de tema es el único elemento totalmente redondo (`50%`), marcándolo como control flotante, fuera del flujo de la tarjeta.

## Components

### Card
- **Corner Style:** suavemente curvado (10px).
- **Background:** superficie o superficie nocturna según tema.
- **Shadow Strategy:** sombra ambiental única (ver Elevation & Depth).
- **Border:** ninguno.
- **Internal Padding:** generoso (30px).

### Inputs / Fields
- **Style:** un solo input de hora (`.hora-input`), fondo de superficie, borde de control (1px), radio de 5px, tamaño de texto 16px con `box-sizing: border-box`.
- **Focus:** el borde pasa a un estado más visible con el color de control; el input mantiene un único estilo focus (no se documenta glow, se prioriza el borde claro).
- **State:** se apoya en el placeholder `HH:MM` y en `inputMode="numeric"` para invocar teclado numérico en móvil.

### Checkbox Group
- **Style:** grupo tipo píldora (`.checkbox-group`) con fondo de control, borde tenue y radio 5px, conteniendo el checkbox (20px) y su etiqueta en una fila con `gap: 10px`.
- **State:** el checkbox nativo conserva su cursor pointer y su marca.

### Info Box (estado semántico)
- **Style:** bloque (`.info-box`) de fondo info, texto info y borde tenue, radio 5px, peso bold y centrado.
- **State:** con `data-pending="true"` muestra el estado de espera (azul info: "Esperando hora de entrada..."); sin él, alterna a fondo/texto de éxito (verde) anunciando la jornada aplicada y su detalle.

### Result (franja de salida)
- **Style:** franja `#resultado` con fondo de resultado, texto verde de énfasis (18px bold), radio 5px y **borde dashed verde** que la distingue como resultado vivo.
- **Behavior:** solo se renderiza cuando existe una hora de entrada válida que produce resultado.

### Theme Toggle
- **Style:** botón fijo (top-right, 44×44px) totalmente redondo, fondo acento y texto de contraste, con ícono 🌙/☀️.
- **Hover / Focus:** mantiene el cursor pointer y la sombra ambiental; el ícono cambia según el tema activo.
- **Role:** control fuera del flujo de la tarjeta que alterna entre claro y oscuro.

## Do's and Don'ts

### Do:
- **Do** usar la tarjeta única centrada (max 400px) para concentrar la tarea.
- **Do** reservar el azul para información y el verde para éxito/resultado; dejar el resto en neutros.
- **Do** mantener los radios: 10px tarjeta, 5px bloques secundarios, 50% toggle.
- **Do** conservar la pila tipográfica de sistema (Segoe UI) sin cargas externas.
- **Do** servir siempre un modo oscuro equivalente que conserve los mismos roles de color.

### Don't:
- **Don't** añadir acentos decorativos (color a botones o fondos que no comuniquen estado).
- **Don't** usar múltiples niveles de sombra; una sombra ambiental es suficiente.
- **Don't** introducir fuentes o iconografías externas que rompan la soberbiedad local.
- **Don't** ocultar el foco visible del input ni reducir los touch targets por debajo de 44px.