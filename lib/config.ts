import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

// Prompts iniciales con íconos válidos según ChatKit
export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Diagnóstico de falla",
    prompt: "Analiza la falla 203 y dame un diagnóstico detallado con posibles causas y acciones recomendadas.",
    icon: "circle-question",
  },
  {
    label: "Procedimiento técnico",
    prompt: "Muéstrame el procedimiento completo para el cambio del ventilador del generador, incluyendo herramientas necesarias y precauciones.",
    icon: "settings-slider",
  },
  {
    label: "Estado de la flota",
    prompt: "Resúmeme el estado actual de la flota, indicando qué máquinas presentan mayor criticidad o alertas activas.",
    icon: "analytics",
  },
  {
    label: "Top 3 con mayor riesgo",
    prompt: "Identifica las tres máquinas con mayor nivel de riesgo operativo y explica brevemente por qué.",
    icon: "chart",
  },
  {
    label: "Incidencias WP01",
    prompt: "Muéstrame las incidencias registradas en la máquina WP01, indicando fecha, tipo y estado actual.",
    icon: "info",
  },
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
      primary: "#EFAC18", // Dorado
      level: 1,
    },
  },
  radius: "round",
  density: "normal", // ✅ valores válidos: compact | normal | spacious
  typography: {
    baseSize: 16,
    fontFamily: 'Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
  },
});

