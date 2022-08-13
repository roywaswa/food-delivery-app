import { createApp, h, provide } from 'vue'
import './style/main.scss'
import App from './App.vue'
import router from './router'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { DefaultApolloClient } from '@vue/apollo-composable'


const httpLink = createHttpLink({
  uri: import.meta.env.MODE === 'development' ? 'http://localhost:1337/graphql' : import.meta.env.VITE_APP_GRAPHQL_ENDPOINT,
})

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

const app = createApp({
  setup() {
    provide(DefaultApolloClient, {
      default: apolloClient,
    })
  },
  render: () => h(App),
})

app.use(router)
app.mount('#app')
