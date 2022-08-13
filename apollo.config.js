module.exports = {
  client: {
    service: {
      name: 'food-delivery-app',
      url: import.meta.env.MODE === 'development' ? 'http://localhost:1337/graphql' : import.meta.env.VITE_APP_GRAPHQL_ENDPOINT,
    },
    includes: [
      'src/**/*.vue',
      'src/**/*.js',
    ],
  },
}