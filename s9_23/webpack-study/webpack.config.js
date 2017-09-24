const path = require("path");

var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
	entry: './src/app.js',
	output:{
		path:path.resolve(__dirname, 'dist'),
		filename:'js/[name].bundle.js'
	},
	module: {
		loaders:[{
			test:/\.js$/,
			loader:'babel-loader',
			exclude:__dirname+'./node_modules',
			include:__dirname+"./src",
			query:{
				presets:['latest']
			}
		},{
			test:/\.css$/,
			loader:'style-loader!css-loader!postcss-loader'
		}
		]
	},
	plugins:[
		new  htmlWebpackPlugin({
			filename:'index.html',
			template:'index.html',
			inject:'body'
		})
	]
};

//模板写在注释例也能够被解析