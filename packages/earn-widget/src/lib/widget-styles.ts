import { useAtomValue } from 'jotai';
import { widgetStyleConfigAtom } from '../store/atoms';
import type { MonorepoStyles, WizardStyles } from '../types/style-config';

// Helper function to detect if styles are in monorepo format
function isMonorepoStyles(styles: any): styles is MonorepoStyles {
  return styles && 'color_surface_primary' in styles;
}

// Helper function to convert wizard styles to monorepo format
function wizardToMonorepoStyles(wizardStyles: WizardStyles): MonorepoStyles {
  return {
    // Surface colors
    color_surface_primary: (wizardStyles.secondaryColor || "#141514") as `#${string}`,
    color_surface_primary_dark: (wizardStyles.backgroundColor || "#e4efe1") as `#${string}`,
    color_surface_secondary: (wizardStyles.borderColor || "#191A19") as `#${string}`, 
    color_surface_secondary_dark: (wizardStyles.borderColor || "#c5ccc3") as `#${string}`,
    
    // Text colors
    color_text_primary: (wizardStyles.textColor || "#F9F9F9") as `#${string}`,
    color_text_primary_dark: (wizardStyles.textColor || "#2a2a2a") as `#${string}`,
    color_text_muted: "#7E7E7E" as `#${string}`,
    color_text_muted_dark: "#3c3c3c" as `#${string}`,
    color_text_accent: (wizardStyles.primaryColor || "#5d904f") as `#${string}`,
    color_text_accent_dark: (wizardStyles.primaryColor || "#8DE276") as `#${string}`,
  };
}

export function useWidgetStyles() {
  const config = useAtomValue(widgetStyleConfigAtom);
  
  // Extract theme (support both formats)
  const theme = config?.theme || 'dark';
  
  // Extract fonts (support both formats)
  const fontPrimary = config?.font_primary || config?.fontFamily || 'Inter';
  const fontSecondary = config?.font_secondary || config?.fontFamily || 'Inter';
  
  // Extract widget width (support both formats)
  const widgetWidth = config?.widget_width || 
    (config?.widgetWidth === 'full' ? 'full' : 'default');
  
  // Convert styles to monorepo format if needed
  let monorepoStyles: MonorepoStyles;
  
  if (config?.styles) {
    if (isMonorepoStyles(config.styles)) {
      monorepoStyles = config.styles;
    } else {
      monorepoStyles = wizardToMonorepoStyles(config.styles);
    }
  } else {
    // Default monorepo styles
    monorepoStyles = {
      color_surface_primary: "#141514",
      color_surface_primary_dark: "#e4efe1",
      color_surface_secondary: "#191A19",
      color_surface_secondary_dark: "#c5ccc3",
      color_text_primary: "#F9F9F9",
      color_text_primary_dark: "#2a2a2a",
      color_text_muted: "#7E7E7E",
      color_text_muted_dark: "#3c3c3c",
      color_text_accent: "#5d904f",
      color_text_accent_dark: "#8DE276",
    };
  }
  
  // Generate CSS custom properties for both monorepo and component formats
  const cssVars = {
    // Monorepo format variables (for existing components like menu-bar)
    "--color-surface-primary": monorepoStyles.color_surface_primary,
    "--color-surface-secondary": monorepoStyles.color_surface_secondary,
    "--color-text-primary": monorepoStyles.color_text_primary,
    "--color-text-muted": monorepoStyles.color_text_muted,
    "--color-text-accent": monorepoStyles.color_text_accent,
    
    // Component format variables (for UI components)
    "--turtle-background": monorepoStyles.color_surface_primary,
    "--turtle-secondary": monorepoStyles.color_surface_secondary,
    "--turtle-primary": monorepoStyles.color_text_accent,
    "--turtle-text": monorepoStyles.color_text_primary,
    "--turtle-text-muted": monorepoStyles.color_text_muted,
    "--turtle-border": `${monorepoStyles.color_text_primary}1a`, // 10% opacity
    "--turtle-border-radius": "12px",
  };
  
  // Add theme-specific variants
  const cssLight = cssVars;
  const cssDark = {
    ...cssVars,
    // Dark theme overrides if needed
    "--color-surface-primary-dark": monorepoStyles.color_surface_primary_dark,
    "--color-surface-secondary-dark": monorepoStyles.color_surface_secondary_dark,
    "--color-text-primary-dark": monorepoStyles.color_text_primary_dark,
    "--color-text-muted-dark": monorepoStyles.color_text_muted_dark,
    "--color-text-accent-dark": monorepoStyles.color_text_accent_dark,
  };
  
  // Debug: Remove console.log for production
  // console.log('🎨 Widget Styles Debug:', { theme, cssLight, cssDark, monorepoStyles });
  
  return {
    theme,
    cssLight,
    cssDark,
    fontPrimary,
    fontSecondary,
    widgetWidth,
    config,
    // Additional properties for compatibility
    padding: config?.padding || 'default',
    rounding: config?.rounding || config?.borderRadius || '2xl',
    navigation: config?.navigation || 'segments',
    showNavigationIcons: config?.show_navigation_icons ?? true,
    showWallet: config?.show_wallet ?? true,
    multiChain: config?.multi_chain ?? false,
  };
}