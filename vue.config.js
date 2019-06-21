const workboxPlugin = require('workbox-webpack-plugin')

module.exports = {
	pwa: {
		msTileColor: '#000000',
		appleMobileWebAppCapable: 'yes',
		appleMobileWebAppStatusBarStyle: 'white',
		workboxPluginMode: 'InjectManifest',
		workboxOptions: {
		    swSrc: 'src/service-worker.js',
		    exclude: [
		        /\.map$/, 
		        /manifest\.json$/
		    ],
		},
		themeColor: '#F1F1F1'
	}
}
