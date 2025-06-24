// Main component
export { EarnWizard } from "./components/earn-wizard";
export type { EarnWizardProps } from "./components/earn-wizard";

// Types
export type { WidgetStyleConfig, Styles } from "./types/style-config";
export type {
  RadiusType,
  WidgetStyles,
  WidgetWidth,
  WidgetPadding,
  WidgetNavigation,
  WidgetSupportedFonts,
  WidgetRounding,
  HexColor,
} from "./types/style-config";

// Store and configurations
export {
  defaultWidgetStyleConfig,
  config2,
  config3,
  widgetStyleConfigAtom,
} from "./store/widget-style-config";

// Individual sections (for advanced usage)
export {
  LogoSection,
  ThemeSection,
  WidgetStyleSection,
  WidgetWidthSection,
  NavigationSection,
  PaddingSection,
  RoundingSection,
  TypographySection,
  FeaturesSection,
  ColorsSection,
  CodeView,
} from "./components/sections";
