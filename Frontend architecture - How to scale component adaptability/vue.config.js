module.exports = {
  pages: {
    index: {
      entry: './src/main.js',
      title: process.env.VUE_APP_TITLE || 'Frontend architecture',
    },
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/constants/index.scss";`,
      },
    },
  },
}
