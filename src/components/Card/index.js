import React from 'react'
import './card.scss'

const Card = ({ id, data, changeTab }) => {
  return (
    <div onClick={changeTab} key={id} className="card">
      <div className="card-name-holder">
        <p className="card-name">{data?.name}</p>
      </div>
      <img className="card-icon" src={require(`../../images/${data.icon}`)}></img>
    </div>
  )
}

export default Card
