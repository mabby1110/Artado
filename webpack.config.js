// toma el archivo index.js (donde esta el codigo de ract) y
// lo convierte a un archivo que el navegador puede leer
module.exports = {
    entry: './src/app/index.js',
    output: {
        path: __dirname + '/src/public',
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
      historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        // cada objeto es una configuracion adicional a webpack
        rules: [
            {
                use: "babel-loader",
                test: /\.js$|jsx/,
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader'
              } 
        ]
    }
}