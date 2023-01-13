import React from 'react'

import '../../mappingFile'

import './quiz.scss'

const Quiz = () => {
  return (
    <div className="quiz-container">
      <div>Icon</div>
      <div className="quiz-description">Which country does this flag belong to?</div>
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
