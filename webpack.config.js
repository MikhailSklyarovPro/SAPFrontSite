module.exports = {
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
		],
	},
}
