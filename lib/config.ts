import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

// Prompts iniciales (sin iconos para evitar errores de tipo)
export const STARTER_PROMPTS: StartScreenPrompt[] = [
  { label: "Diagnóstico de falla", prompt: "Dame el diagnóstico de la falla 203" },
  { label: "Procedimiento técnico", prompt: "Dame el procedimiento de cambio del ventilador del generador" },
  { label: "Estado de la flota", prompt: "Muéstrame el estado general de la flota." },
  { label: "Top 3 con mayor riesgo", prompt: "Dame el Top 3 de máquinas con mayor riesgo." },
  { label: "Incidencias WP01", prompt: "¿Qué incidencias tiene la máquina WP01?" },
];

export const PLACEHOLDER_INPUT =
  "Escribe tu consulta (ej. Top 3 con mayor riesgo)...";

export const GREETING = "Hola, ¿en qué puedo ayudarte hoy?";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      // Dorado como color de acento, válido
      primary: "#EFAC18",
      level: 1,
    },
  },
  radius: "round",
  // Opcionales válidos: "compact" | "normal" | "spacious"
  density: "normal",
  typography: { baseSize: 16 },
});
