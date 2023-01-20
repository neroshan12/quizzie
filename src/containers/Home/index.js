import React, { useState, useEffect } from 'react'
import Card from '../../components/Card'
import Quiz from '../../components/Quiz'
import Learn from '../../components/Learn'

import mappingFile from '../../mappingFile'

import { gql, useQuery } from '@apollo/client'

import './home.scss'

const GET_COUNTRIES = gql`
  {
    countries {
      name
      capital
      currency
      emoji
      languages {
        name
      }
      continent {
        name
      }
    }
  }
`

const Home = () => {
  const { data, loading, error } = useQuery(GET_COUNTRIES)
  const [allCountries, setAllCountries] = useState()
  const [currentPage, setCurrentPage] = useState('home')
  const [subject, setSubject] = useState('')

  useEffect(() => {
    if (data) {
      const { countries } = data
      setAllCountries(countries)
    }
  }, [allCountries, data])

  const changeTab = page => {
    setCurrentPage(page.type)
    setSubject(page.subject)
  }

  return (
    <div className="app-parent">
      {currentPage === 'home' && (
        <>
          <h1>Welcome to Quizzie!</h1>
          <div className="content-holder">
            <div>
              <div className="category-header">
                <h2>Quiz</h2>
                <div>Random</div>
              </div>
            </div>
            <div className="card-holder">
              {Object.keys(mappingFile).map((item, index) => {
                return (
                  <Card
                    id={index}
                    data={mappingFile[item]}
                    changeTab={() => changeTab({ type: 'quiz', subject: mappingFile[item] })}
                  />
                )
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
              {Object.keys(mappingFile).map((item, index) => {
                return (
                  <Card
                    id={index}
                    data={mappingFile[item]}
                    changeTab={() => changeTab({ type: 'learn', subject: mappingFile[item] })}
                  />
                )
              })}
            </div>
          </div>
        </>
      )}

      {!loading && currentPage === 'learn' && <Learn subject={subject} data={data} />}
      {!loading && currentPage === 'quiz' && <Quiz subject={subject} data={data} />}
    </div>
  )
}

export default Home
