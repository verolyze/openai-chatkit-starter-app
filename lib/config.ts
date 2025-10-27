import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

// 🔹 Prompts iniciales con íconos válidos de ChatKit
export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Diagnóstico de falla",
    prompt: "Dame el diagnóstico de la falla 203",
    icon: "bug",
  },
  {
    label: "Procedimiento técnico",
    prompt: "Dame el procedimiento de cambio del ventilador del generador",
    icon: "settings-slider",
  },
  {
    label: "Estado de la flota",
    prompt: "Muéstrame el estado general de la flota.",
    icon: "analytics",
  },
  {
    label: "Top 3 con mayor riesgo",
    prompt: "Dame el Top 3 de máquinas con mayor riesgo.",
    icon: "chart",
  },
  {
    label: "Incidencias WP01",
    prompt: "¿Qué incidencias tiene la máquina WP01?",
    icon: "info", // corregido: "alert-triangle" → "info"
  },
];

export const PLACEHOLDER_INPUT =
  "Escribe tu consulta (ej. Top 3 con mayor riesgo)...";

export const GREETING = "Hola, ¿en qué puedo ayudarte hoy?";

// 🎨 Tema visual (azul marino + dorado)
export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -2 : -4,
    },
    accent: {
      primary: "#EFAC18", // Dorado
      level: 1,
    },
    surface: {
      base: theme === "dark" ? "#001B3D" : "#FFFFFF", // Azul marino o blanco
      inverted: theme === "dark" ? "#F9FAFB" : "#001B3D",
    },
  },
  radius: "pill",
  density: "comfortable",
  typography: {
    baseSize: 16,
    fontFamily:
      'Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
  },
  custom: {
    chatBubble: {
      user: {
        background: "#EFAC18",
        color: "#001B3D",
      },
      assistant: {
        background: "#002B66",
        color: "#FFFFFF",
      },
    },
  },
});
