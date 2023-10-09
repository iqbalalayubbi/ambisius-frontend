/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                bg: "#293241",
                primary: "#EE6C4D",
            },
        },
    },
    plugins: [],
};
