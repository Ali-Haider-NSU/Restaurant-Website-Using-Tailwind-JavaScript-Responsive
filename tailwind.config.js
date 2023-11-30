/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*"],
    theme: {
        extend: {
            colors: {
                orange: '#FFB03B',
                darkorange: '#FF9B08'
            },
        },
        fontFamily: {
            dancing: ["Dancing Script", "cursive"],
        },

        screens: {
            'sm': '600px',
            'md': '800px',
            'lg': '1000px',
            'xl': '1200px',
            'xxl': '1400px',
        },
    },
    plugins: [],
}