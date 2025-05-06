// tailwind.config.js
module.exports = {
	darkMode: ['class'],
	content: [
	  './app/**/*.{js,ts,jsx,tsx}',
	  './components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
	  extend: {
		// ─── 1. 自定義字體 ─────────────────────────────────────────
		fontFamily: {
		  sans: ['Poppins', 'sans-serif'],                // 正文字體
		  display: ['"Helvetica Neue"', 'Arial', 'sans-serif'], // 標題字體
		},
  
		// ─── 2. 自定義色彩 ─────────────────────────────────────────
		colors: {
		  primary: {
			DEFAULT: '#1E3A8A',    // 品牌深藍
			foreground: '#FFFFFF', // 白色字
		  },
		  secondary: {
			DEFAULT: '#9333EA',    // 品牌紫
			foreground: '#FFFFFF',
		  },
		  accent: {
			DEFAULT: '#F59E0B',    // 強調黃
			foreground: '#000000', // 深色字
		  },
  
		  // 如果你仍須使用原有的 CSS 變數，保留以下設定：
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))',
		  },
		  popover: {
			DEFAULT: 'hsl(var(--popover))',
			foreground: 'hsl(var(--popover-foreground))',
		  },
		  muted: {
			DEFAULT: 'hsl(var(--muted))',
			foreground: 'hsl(var(--muted-foreground))',
		  },
		  destructive: {
			DEFAULT: 'hsl(var(--destructive))',
			foreground: 'hsl(var(--destructive-foreground))',
		  },
		  border: 'hsl(var(--border))',
		  input: 'hsl(var(--input))',
		  ring: 'hsl(var(--ring))',
		  chart: {
			'1': 'hsl(var(--chart-1))',
			'2': 'hsl(var(--chart-2))',
			'3': 'hsl(var(--chart-3))',
			'4': 'hsl(var(--chart-4))',
			'5': 'hsl(var(--chart-5))',
		  },
		},
  
		// ─── 3. 保留原有的圓角設定 ─────────────────────────────────
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
	  },
	},
	plugins: [require('tailwindcss-animate')],
  };
  