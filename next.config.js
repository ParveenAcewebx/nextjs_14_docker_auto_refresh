module.exports = {
    webpackDevMiddleware: config => {
      config.watchOptions = {
        poll: 800,
        aggregateTimeout: 300,
      }
      return config
    },
  }

  // Reff: https://stackoverflow.com/questions/54126848/why-nextjs-using-docker-container-did-not-reload-after-changed-code-for-dev-envi