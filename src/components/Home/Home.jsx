/*
    Here is where the list of all games in the database will be displayed. User can click on one to either favorite it or view more info about it.
    */

    import React from 'react'
    import gameCatelog from '../../data'
    import './Home.css'
import { Link, redirect } from 'react-router-dom'

    function Home() {
      
      const handleClick = (e) => {
        console.log(`game.id: ${e.target.id}`)
        redirect('/game')
      }

      return (
        <div>
          {gameCatelog.map((game) =>{
            return (
              <div className='games'>
                <img src={game.image} alt={game.title} />
                <h1>{game.title}</h1>
                <p>{game.description}</p>
                <button>Favorite?</button>
                <Link to={`/game/${game.id}`} onClick={handleClick}>View More</Link>
              </div>
            )
          })}
        </div>
      )
    }
    
    export default Home