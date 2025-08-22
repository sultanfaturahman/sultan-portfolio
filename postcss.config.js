module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' && {
      cssnano: {
        preset: ['default', {
          discardComments: {
            removeAll: true,
          },
          normalizeWhitespace: true,
          colormin: true,
          minifyFontValues: true,
          minifySelectors: true,
          mergeRules: true,
          mergeLonghand: true,
          mergeShorthands: true,
          reduceIdents: false,
          reduceInitial: true,
          reduceTransforms: true,
          uniqueSelectors: true,
          zindex: false,
        }],
      },
    }),
  },
};

