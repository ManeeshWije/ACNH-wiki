/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
const withMT = require('@material-tailwind/react/utils/withMT');
module.exports = withMT({
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                fink: ['var(--font-fink)', ...fontFamily.sans],
                body: ['"Poppins"'],
            },
            brightness: {
                25: '.25',
            },
        },
    },
    plugins: [],
});
