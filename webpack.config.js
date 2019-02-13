const path = require('path');

module.exports = {

	entry: "./src/index.js",
	output: {
		filename: 'widget.js',
		path: path.resolve(__dirname, 'dist'),
		library:["MyLibrary"],
		libraryTarget: 'umd',
		publicPath: `/dist/`
	},
	module: {
		rules: [
		  {
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: {
			  loader: "babel-loader"
			}
		  }
		]
	  }
}
