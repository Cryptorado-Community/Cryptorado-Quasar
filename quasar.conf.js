// Configuration for your app

module.exports = function (ctx) {
  return {
    // app plugins (/src/plugins)
    plugins: [
      'i18n',
      'axios'
    ],
    css: [
      'app.styl'
    ],
    extras: [
      ctx.theme.mat ? 'roboto-font' : null,
      'material-icons', // optional, you are not bound to it
      // 'ionicons',
      // 'mdi',
      'fontawesome'
    ],
    supportIE: false,
    build: {
      scopeHoisting: true,
      // vueRouterMode: 'history',
      // vueCompiler: true,
      // gzip: true,
      // analyze: true,
      // extractCSS: false,
      extendWebpack (cfg) {
        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/
        })
      }
    },
    devServer: {
      https: true,
      port: 4242,
      open: true // opens browser window automatically
    },
    // framework: 'all' --- includes everything; for dev only!
    framework: {
      components: [
        'QVideo',
        'QCard',
        'QCardTitle',
        'QCardMain',
        'QCardMedia',
        'QCardSeparator',
        'QCardActions',
        'QEditor',
        'QColor',
        'QSearch',
        'QAutocomplete',
        'QDatetime',
        'QPageSticky',
        'QTabs',
        'QTab',
        'QTabPane',
        'QRouteTab',
        'QStepper',
        'QStep',
        'QStepperNavigation',
        'QCollapsible',
        'QLayout',
        'QLayoutHeader',
        'QLayoutDrawer',
        'QPageContainer',
        'QPage',
        'QToolbar',
        'QToolbarTitle',
        'QBtn',
        'QIcon',
        'QList',
        'QListHeader',
        'QItem',
        'QItemMain',
        'QItemSide',
        'QInput',
        'QField',
        'QChipsInput'
      ],
      directives: [
        'Ripple'
      ],
      // Quasar plugins
      plugins: [
        'Notify'
      ]
      // iconSet: ctx.theme.mat ? 'material-icons' : 'ionicons'
      // i18n: 'de' // Quasar language
    },
    // animations: 'all' --- includes all animations
    animations: [],
    ssr: {
      pwa: false
    },
    pwa: {
      // workboxPluginMode: 'InjectManifest',
      // workboxOptions: {},
      manifest: {
        name: 'Cryptorado Home',
        short_name: 'COBC-Home',
        description: 'The Home of the Cryptorado Community',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        "icons": [
         {
          "src": "\/android-icon-36x36.png",
          "sizes": "36x36",
          "type": "image\/png",
          "density": "0.75"
         },
         {
          "src": "\/android-icon-48x48.png",
          "sizes": "48x48",
          "type": "image\/png",
          "density": "1.0"
         },
         {
          "src": "\/android-icon-72x72.png",
          "sizes": "72x72",
          "type": "image\/png",
          "density": "1.5"
         },
         {
          "src": "\/android-icon-96x96.png",
          "sizes": "96x96",
          "type": "image\/png",
          "density": "2.0"
         },
         {
          "src": "\/android-icon-144x144.png",
          "sizes": "144x144",
          "type": "image\/png",
          "density": "3.0"
         },
         {
          "src": "\/android-icon-192x192.png",
          "sizes": "192x192",
          "type": "image\/png",
          "density": "4.0"
         }
        ]
      }
    },
    cordova: {
      // id: 'org.cordova.quasar.app'
    },
    electron: {
      // bundler: 'builder', // or 'packager'
      extendWebpack (cfg) {
        // do something with Electron process Webpack cfg
      },
      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Window only
        // win32metadata: { ... }
      },
      builder: {
        // https://www.electron.build/configuration/configuration

        // appId: 'quasar-app'
      }
    }
  }
}
