import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const client = new ApolloClient({
  uri : 'http://localhost:4000/graphql',
  cache : new InMemoryCache()
})

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

