import React from 'react'
import Card from '../../components/Card'

import './home.scss'

const Home = () => {
  return (
    <div>
      <h1>Welcome to Quizzie</h1>
      <div className="content-holder">
        <div>
          <div className="category-header">
            <h2>Quiz</h2>
            <div>Random</div>
          </div>
        </div>
        <div className="card-holder">
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <div className="content-holder">
        <div>
          <div className="category-header">
            <h2>Learn</h2>
            <div>Random</div>
          </div>
        </div>
        <div className="card-holder">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default Home
