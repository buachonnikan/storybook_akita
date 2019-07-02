module.exports = {
  pluginOptions: {
    storybook: {
      allowedPlugins: [
        'define'
      ]
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import '@/oms/scss/akita/_variables.scss';
          @import '@/oms/scss/argon/argon-variables.scss';
        `
      }
    }
  }
}
