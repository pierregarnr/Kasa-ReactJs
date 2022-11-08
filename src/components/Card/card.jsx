
import { Link } from "react-router-dom";


import './card.css'

export function Card({ id, title, cover }) {

      return (

            < Link to={`/appartement/${id}`}
                  className='carts-kasa' draggable="false">
                  <img className='carts-img' alt={title} src={cover} draggable='false'></img>
                  <p className='carts-text' draggable='false'>{title}</p>
            </Link >
      )
}

