module.exports = {
    content: [
        "./src/pages/*.{ts,tsx}",
        "./src/pages/dev/*.{ts,tsx}",
        "./src/pages/__fragment/*.{ts,tsx}",
        "./src/pages/__callback/*.{ts,tsx}",
        "./src/pages/docs/*.{ts,tsx}"
    ],
    theme: {
        extend: {
            spacing: {
                '16': '4rem',
                '32': '8rem',
                '48': '12rem'
            },
            border: {
                '1': '1px'
            }
        },
    },
    plugins: [],
}