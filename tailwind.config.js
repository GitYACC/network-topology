module.exports = {
    content: [
        "./src/pages/*.{ts,tsx}",
        "./src/pages/dev/*.{ts,tsx}",
        "./src/pages/[fragment]/*.{ts,tsx}"
    ],
    theme: {
        extend: {
            spacing: {
                '16': '4rem',
                '32': '8rem',
                '48': '12rem'
            }
        },
    },
    plugins: [],
}