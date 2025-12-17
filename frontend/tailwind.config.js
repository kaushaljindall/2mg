/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#4FD1C5', // Teal-400
                secondary: '#319795', // Teal-600
                'brand-mint': '#A7F3D0', // Soft mint
                'brand-green': '#6EE7B7', // Vibrant green
                'brand-light': '#F0FDF4', // Very light mint/white background
                'medical-teal': '#2C7A7B', // Deep Teal
                'medical-green': '#D1FAE5', // Soft Green
                'medical-red': '#FEE2E2', // Soft Red
                'medical-text': '#1F2937', // Dark Gray Text
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
            },
            boxShadow: {
                'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
                'soft-xl': '0 10px 40px -5px rgba(0, 0, 0, 0.05)',
                'glow': '0 0 15px rgba(79, 209, 197, 0.3)',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'bounce-slow': 'bounce 3s infinite',
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
            },
        },
    },
    plugins: [],
}
