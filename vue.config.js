const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const path = require('path')

module.exports = {
	outputDir: 'dist',
	publicPath: process.env.NODE_ENV === 'production' ? '/vant-demo/' : '/',
	css: {
		loaderOptions: {
			postcss: {
				plugins: [
					autoprefixer(),
					pxtorem({
						rootValue: 37.5,
						propList: ['*']
					})
				]
			},
			less: {
				javascriptEnabled: true,
				modifyVars: {
					'hack': `true; @import "${path.join(__dirname, './src/assets/css/reset.less')}";`,
					// 'green': '#9fcad1'
				}
			}
		}
	}
};
