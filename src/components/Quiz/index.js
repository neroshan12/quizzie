import React from 'react'
import { useParams } from 'react-router-dom'

import mappingFile from '../../mappingFile'

import './quiz.scss'

const Quiz = ({ data, subject }) => {
  console.log('get here----', subject)
  return (
    <div className="quiz-container">
      <img></img>
      <div className="quiz-description">{subject.path.quiz.description}</div>

      <div>Flag</div>
      <div>
        <input type="text" name="flag"></input>
        <button></button>
      </div>
      <div>Try another...</div>
    </div>
  )
}

export default Quiz
