module.exports = function (config) {
  config.set({
    basePath: '../',

    frameworks: ['jasmine'],

    files: [
      '../public/jquery-3.1.0.min.js',
      '../public/board.js',
      '*.js'
    ],

    exclude: [],

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['Chrome'],

    singleRun: true,

    plugins: [
      require('../../'),
      'karma-chrome-launcher',
      'karma-jasmine'
    ]
  })
}
