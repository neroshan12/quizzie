import React from 'react'
import Card from '../../components/Card'

import mappingFile from '../../mappingFile'

import './home.scss'

const Home = () => {
  return (
    <div>
      <h1>Welcome to Quizzie!</h1>
      <div className="content-holder">
        <div>
          <div className="category-header">
            <h2>Quiz</h2>
            <div>Random</div>
          </div>
        </div>
        <div className="card-holder">
          {mappingFile.map(item => {
            return <Card path="quiz" data={item} />
          })}
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
          {mappingFile.map(item => {
            return <Card path="learn" data={item} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
