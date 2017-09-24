const path = require("path");

var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
	entry: {
		main:'./src/script/main.js',
		a:'./src/script/a.js'
	},
	output:{
		path:path.resolve(__dirname, 'dist'),
		filename:'js/[name].bundle.js'
	},
	plugins:[
		new  htmlWebpackPlugin({
			filename:'index.html',
			template:'index.html',
			inject:'head',
			title:'make in webpack',
			date:new Date() 
		}),
		new htmlWebpackPlugin({
			filename:'a.html',
			template:'index.html',
			inject:'head',
			title:'make in webpack a',
			date:new Date() 
		}),
		new htmlWebpackPlugin({
			filename:'b.html',
			template:'index.html',
			inject:'head',
			title:'make in webpack b.html',
			date:new Date() 
		})
	]
}

//模板写在注释例也能够被解析