module.exports = {
	entry: "./src/jsx/app.jsx",
	output: {
		path: __dirname + "/dist/",
		publicPath: "/assets/",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{ 
				test: /\.jsx?$/, 
				
				exclude: /node_modules/, 
				
				loaders: ["react-hot", "babel"]
			},

			{
				test: /\.scss$/,
				loaders: ["style", "css", "sass"]
			}
		]
	}
}