module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('postcss-nested'),
        require('postcss-mixins'),
        require('postcss-custom-properties')({
            preserve: false
        }),
        require('autoprefixer'),
    ]
}