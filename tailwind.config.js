/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ethan's established palette - preserve these exactly
        background: '#6A6352',
        primary: '#D5CCAB',
        secondary: '#A3A289',
        accent: '#878568',
        dark: '#505143',
        lighter: '#e8e6d8',
        
        // Terminal-style semantic variations derived from palette
        terminal: {
          bg: '#6A6352',      // user's background
          surface: '#505143', // dark variant for cards
          foreground: '#D5CCAB', // primary as text color
          border: '#878568',  // accent as borders
          muted: '#A3A289',   // secondary for gray text
          hover: '#e8e6d8',   // lighter on hover
          subtle: '#e5dcce',  // lighter transparency for table rows
        },
      },
      fontFamily: {
        mono: ['var(--font-geist-mono)', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
    },
  },
}
