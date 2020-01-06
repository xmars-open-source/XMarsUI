const browserlist = [
  '>= 1%',
  'last 1 major version',
  'not dead',
  'Chrome >= 41',
  'Firefox >= 38',
  'Edge >= 12',
  'Explorer >= 10',
  'iOS >= 9',
  'Safari >= 9',
  'Android >= 4.4',
  'Opera >= 30',
];

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: browserlist
        },
        modules: process.env.MODULES
      }
    ],
    '@babel/preset-typescript',
    '@babel/preset-react'
  ],
  plugins: [
    'add-module-exports'
  ],
  ignore: process.env.__TEST__ ? [] : [
    "**/*.tests.tsx"
  ]
};