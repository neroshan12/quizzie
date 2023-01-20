import React, { useState, useEffect } from 'react'

import './quiz.scss'

const Quiz = ({ data, subject }) => {
  const [allCountries, setAllCountries] = useState()
  const [currentCountry, setCurrentCountry] = useState()
  const [capital, setCapital] = useState('')
  const [value, setValue] = useState('')

  // ADD REACT HOOK FORMS TO REGISTER INPUTS

  useEffect(() => {
    if (data) {
      const { countries } = data
      setAllCountries(countries)
      let totalCountries = [...countries]
      let currentCountry = totalCountries[Math.floor(Math.random() * totalCountries.length)]
      let languages = currentCountry.languages.map(language => {
        return language.name
      })
      let renderedCountry = { ...currentCountry }
      renderedCountry.languagesAsString = languages.join(', ')
      setCurrentCountry(renderedCountry)
    }
  }, [allCountries, data])

  const resetCountry = () => {
    let currentCountry = allCountries[Math.floor(Math.random() * allCountries.length)]
    let languages = currentCountry.languages.map(language => {
      return language.name
    })
    let renderedCountry = { ...currentCountry }
    renderedCountry.languagesAsString = languages.join(', ')
    setCurrentCountry(renderedCountry)
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log('this is event----', event)
    verifyAnswer(event.target[0].value)
  }

  const verifyAnswer = value => {
    let answer = value.trim().toLowerCase()
    console.log(answer)
  }

  return (
    <div className="quiz-container">
      <form className="form" onSubmit={event => handleSubmit(event)}>
        <img className="quiz-icon" src={require(`../../images/${subject.path.quiz.icon}`)}></img>
        <div className="quiz-description">{subject.path.quiz.description}</div>

        <p className="emoji">{currentCountry?.emoji}</p>
        <div className="submit-holder">
          <input
            onInput={event => setValue(event.target.value)}
            type="text"
            name="flag"
            id="country"
            required
            className="quiz-input"
          ></input>

          <button
            onClick={event => {
              handleSubmit(event)
            }}
            className="quiz-submit"
          >
            Submit
          </button>
        </div>
        <div>Don’t know, let’s try another one...</div>
      </form>
    </div>
  )
}

export default Quiz
