export const tokens = {
  colors: {
    // Turtle brand colors
    neonGreen: 'oklch(0.86 0.16 142.5)',
    darkGreen: 'oklch(0.24 0.16 142.5)', 
    ninjaBlack: 'oklch(0.1 0.005 120)',
    wiseWhite: 'oklch(0.98 0 0)',
    wiseGray: 'oklch(0.17 0.003 120)',
    mintCream: 'oklch(0.95 0.046 109)',
    turtleYellow: 'oklch(0.97 0.21 98.2)',
    turtleRed: 'oklch(0.6 0.28 29)',
    whiteTransparent: 'oklch(0.98 0 0 / 0.02)',

    // Semantic colors - light theme
    light: {
      background: 'oklch(1 0 0)',
      foreground: 'oklch(0.141 0.005 285.823)',
      card: 'oklch(1 0 0)',
      cardForeground: 'oklch(0.141 0.005 285.823)',
      popover: 'oklch(1 0 0)',
      popoverForeground: 'oklch(0.141 0.005 285.823)',
      primary: 'oklch(0.21 0.006 285.885)',
      primaryForeground: 'oklch(0.985 0 0)',
      secondary: 'oklch(0.967 0.001 286.375)',
      secondaryForeground: 'oklch(0.21 0.006 285.885)',
      muted: 'oklch(0.967 0.001 286.375)',
      mutedForeground: 'oklch(0.552 0.016 285.938)',
      accent: 'oklch(0.967 0.001 286.375)',
      accentForeground: 'oklch(0.21 0.006 285.885)',
      destructive: 'oklch(0.577 0.245 27.325)',
      border: 'oklch(0.92 0.004 286.32)',
      input: 'oklch(0.92 0.004 286.32)',
      ring: 'oklch(0.705 0.015 286.067)',
    },

    // Semantic colors - dark theme
    dark: {
      background: 'oklch(0.141 0.005 285.823)',
      foreground: 'oklch(0.985 0 0)',
      card: 'oklch(0.21 0.006 285.885)',
      cardForeground: 'oklch(0.985 0 0)',
      popover: 'oklch(0.21 0.006 285.885)',
      popoverForeground: 'oklch(0.985 0 0)',
      primary: 'oklch(0.92 0.004 286.32)',
      primaryForeground: 'oklch(0.21 0.006 285.885)',
      secondary: 'oklch(0.274 0.006 286.033)',
      secondaryForeground: 'oklch(0.985 0 0)',
      muted: 'oklch(0.274 0.006 286.033)',
      mutedForeground: 'oklch(0.705 0.015 286.067)',
      accent: 'oklch(0.274 0.006 286.033)',
      accentForeground: 'oklch(0.985 0 0)',
      destructive: 'oklch(0.704 0.191 22.216)',
      border: 'oklch(1 0 0 / 10%)',
      input: 'oklch(1 0 0 / 15%)',
      ring: 'oklch(0.552 0.016 285.938)',
    }
  },

  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '0.75rem',    // 12px
    lg: '1rem',       // 16px
    xl: '1.5rem',     // 24px
    '2xl': '2rem',    // 32px
    '3xl': '3rem',    // 48px
    '4xl': '4rem',    // 64px
  },

  radius: {
    none: '0',
    sm: 'calc(0.625rem - 4px)',
    md: 'calc(0.625rem - 2px)', 
    lg: '0.625rem',
    xl: 'calc(0.625rem + 4px)',
    full: '9999px',
  },

  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],
    sm: ['0.875rem', { lineHeight: '1.25rem' }],
    base: ['1rem', { lineHeight: '1.5rem' }],
    lg: ['1.125rem', { lineHeight: '1.75rem' }],
    xl: ['1.25rem', { lineHeight: '1.75rem' }],
    '2xl': ['1.5rem', { lineHeight: '2rem' }],
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
  },

  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },

  shadow: {
    xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  }
} as const

export type Tokens = typeof tokens
export type ColorTokens = typeof tokens.colors
export type SpacingTokens = typeof tokens.spacing
export type RadiusTokens = typeof tokens.radius