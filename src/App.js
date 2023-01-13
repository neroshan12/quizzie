import { Route, Routes } from 'react-router-dom'
import Home from './containers/Home'
import Quiz from './components/Quiz'
import Learn from './components/Learn'

import './App.scss'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/learn" element={<Learn />} />
      </Routes>
    </div>
  )
}

export default App
