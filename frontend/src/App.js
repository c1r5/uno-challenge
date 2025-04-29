import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import TodoListContainer from "./features/todo/TodoListContainer.js"

const httpLink = createHttpLink({
  uri: `${window.location.protocol}//${window.location.hostname}:4000/graphql`,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const appStyle = {
    textAlign: 'center'
  };

  const appHeaderStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    backgroundColor: '#212B36'
  };

  return (
    <ApolloProvider client={client}>
      <div style={appStyle}>
        <header style={appHeaderStyle}>
          <TodoListContainer />
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
