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
        require('cssnano')({
            preset: 'default',
        }),
        require('postcss-copy')({
            dest: 'dist'
        })
    ]
}