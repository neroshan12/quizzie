import React from 'react'
import './card.scss'

const Card = ({ data }) => {
  console.log(data)
  return (
    <div className="card">
      <div>Icon</div>
      <div>{data?.name}</div>
    </div>
  )
}

export default Card
