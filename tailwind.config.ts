import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Rich Deep Blue/Navy with purple undertones
        primary: {
          50: '#F0F4FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
          950: '#1E1B4B',
          DEFAULT: '#1E1B4B', // Rich deep blue
        },

        // Secondary - Warm Gray with subtle warmth
        secondary: {
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
          DEFAULT: '#292524', // Warm dark gray
        },

        // Background - Pure and clean whites with subtle warmth
        background: {
          50: '#FFFFFF',
          100: '#FFFFFE',
          200: '#FEFEFE',
          300: '#FDFDFC',
          400: '#FAFAF9',
          500: '#F5F5F4',
          600: '#E7E5E4',
          700: '#A8A29E',
          800: '#57534E',
          900: '#292524',
          DEFAULT: '#FFFFFF', // Pure white
        },

        // Accent - Vibrant Electric Blue with energy
        accent: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#172554',
          DEFAULT: '#2563EB', // Vibrant blue
        },
        
        // Accent Alternative - Vibrant Orange/Coral
        'accent-alt': {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
          950: '#431407',
          DEFAULT: '#F97316', // Vibrant orange
        },

        // Muted - Sophisticated neutral grays
        muted: {
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
          DEFAULT: '#78716C', // Sophisticated gray
        },
        
        // Semantic color shortcuts
        foreground: '#0F172A',
        border: '#E2E8F0',
        input: '#E2E8F0',
        ring: '#3B82F6',
        destructive: '#EF4444',
        'destructive-foreground': '#FFFFFF',
      },
      
      // Premium Typography
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        display: ['var(--font-playfair)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },

      // Enhanced font weights
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      
      // Spacing for premium feel
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      // Premium shadows
      boxShadow: {
        'premium': '0 4px 6px -1px rgba(15, 23, 42, 0.1), 0 2px 4px -1px rgba(15, 23, 42, 0.06)',
        'premium-lg': '0 10px 15px -3px rgba(15, 23, 42, 0.1), 0 4px 6px -2px rgba(15, 23, 42, 0.05)',
        'premium-xl': '0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 10px 10px -5px rgba(15, 23, 42, 0.04)',
        'premium-2xl': '0 25px 50px -12px rgba(15, 23, 42, 0.25)',
        'premium-inner': 'inset 0 2px 4px 0 rgba(15, 23, 42, 0.06)',
      },
      
      // Animation for smooth interactions
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
