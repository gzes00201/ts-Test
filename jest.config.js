// tslint:disable-next-line: object-literal-sort-keys
module.exports = {
    "moduleFileExtensions": [
        "js",
        "ts",
        "json",
        "vue",
      ],
      "transform": {
        ".*\\.(vue)$": "vue-jest",
        "^.+\\.tsx?$": "ts-jest",
      },
      "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
      "testURL": "http://localhost/",
      "moduleFileExtensions": [
        "ts",
        "js",
        "vue"
      ],
      "moduleNameMapper": {
        "^vue$": "vue/dist/vue.common.js"
      },
      globals: {
        'ts-jest': {
          diagnostics: {
            pathRegex: /\.(spec|test)\.ts$/,
            warnOnly: true
          }
        }
      }
}