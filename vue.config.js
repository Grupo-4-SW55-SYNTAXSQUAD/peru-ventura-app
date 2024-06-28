const path = require('path');

module.exports = {
    configureWebpack: {
        plugins: [
        ]
    },
    chainWebpack: config => {
        config.plugin('copy')
            .tap(args => {
                // Aquí puedes agregar configuración adicional para copiar archivos
                args[0].push({
                    from: path.resolve(__dirname, 'src/_redirects'),
                    to: path.resolve(__dirname, 'dist'),
                    toType: 'dir',
                    ignore: ['.DS_Store']
                });
                return args;
            });
    }
};
