import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

// Prompts iniciales con íconos válidos según ChatKit
export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Diagnóstico de falla",
    prompt: "Tengo una alta temperatura en el cuerpo de anillos del generador. Dame un detalle de las recomendaciones a realizar y un checklist de revisión para mi técnico.",
    icon: "circle-question",
  },
  {
    label: "Predicción de viento",
    prompt: "Dame la predicción de viento para Cerro de Hula correspondiente al día de mañana.",
    icon: "settings-slider",
  },
  {
    label: "Generación vs Presupuesto",
    prompt: "Muéstrame la generación YTD de Altamira y compárala contra el presupuesto para el mismo período",
    icon: "analytics",
  },
  {
    label: "Top 3 con mayor riesgo",
    prompt: "Dame el top 3 de maquinas en cerro de hula y un resumen de cada una",
    icon: "chart",
  },
  {
    label: "Incidencias ORO23",
    prompt: "Muéstrame todas las incidencias registradas en la máquina ORO23",
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

