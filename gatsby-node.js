exports.onCreateWebpackConfig = ({ stage, actions, plugins }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        'stream': false,
        'assert': false,
        'crypto': false,
        'url': false,
        'http': false,
        'https': false,
        'os': false,
        'Buffer': false,
        'electron': false
      },
    },
  })

  if (stage === 'build-javascript' || stage === 'develop') {
    actions.setWebpackConfig({
      plugins: [
        plugins.provide({
          Buffer: ['buffer/', 'Buffer'],
          process: 'process/browser'
        })
      ],
    });
  }
}

