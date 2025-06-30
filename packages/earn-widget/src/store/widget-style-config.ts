import type { WidgetStyleConfig } from '../types/style-config';

export const defaultWidgetStyleConfig: WidgetStyleConfig = {
  // Logo URLs
  logoUrl:
    "https://pbs.twimg.com/profile_images/1830925816802451456/OUDzqTkE_400x400.png",
  logoLightUrl:
    "https://pbs.twimg.com/profile_images/1830925816802451456/OUDzqTkE_400x400.png",
  logoDarkUrl:
    "https://pbs.twimg.com/profile_images/1830925816802451456/OUDzqTkE_400x400.png",

  // Theme
  theme: "dark",

  // Widget Width
  widgetWidth: "auto",
  customWidth: "300px",

  // Navigation
  showNavigation: true,

  // Padding
  padding: "default",

  // Rounding
  borderRadius: "8px",

  // Typography
  fontFamily: "Inter",

  // Deals
  deals: [],
  campaigns: [],

  // Colors
  styles: {
    primaryColor: "#73f36c",
    secondaryColor: "#1a1a1a",
    backgroundColor: "#ffffff",
    textColor: "#000000",
    borderColor: "#e5e5e5",
    accentColor: "#f59e0b",
    errorColor: "#ef4444",
    successColor: "#10b981",
    warningColor: "#f59e0b",
    infoColor: "#3b82f6",
  },
};