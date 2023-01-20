import React from 'react'
import { Link } from 'react-router-dom'
import './card.scss'

const Card = ({ id, data, changeTab }) => {
  return (
    <div onClick={changeTab} key={id} className="card">
      {data?.name}
      <img src={require(`../../images/${data.icon}`)}></img>
    </div>
  )
}

export default Card
