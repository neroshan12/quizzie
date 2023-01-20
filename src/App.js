import { Route, Routes } from 'react-router-dom'
import Home from './containers/Home'
import Quiz from './components/Quiz'
import Learn from './components/Learn'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import './App.scss'

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache(),
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:subject" element={<Quiz />} />
          <Route path="/learn:/:subject" element={<Learn />} />
        </Routes>
      </div>
    </ApolloProvider>
  )
}

export default App
