/*
    Here is where the list of all games in the database will be displayed. User can click on one to either favorite it or view more info about it.
    */

    import React, { useEffect } from 'react'
    import gameCatelog from '../../data'
    import './Home.css'
import { Link, redirect } from 'react-router-dom'
import { useState } from 'react'
import getSupaBaseData from '../../SupaBase'

    function Home() {
      const [games, setGames] = useState([])

      useEffect(() => {
        setGames(getSupaBaseData)
        console.log(games, 'test')
      }, [])

      const handleClickLike = (e) => {
        if(games.favorited === true) {
          return games.favorited = true
        }
        else {
          return games.favorited = false
        }
      }
      const handleClick = (e) => {
        console.log(`game.id: ${e.target.id}`)
        redirect('/game')
      }

      return (
        <div>
                <h1>Game Catelog</h1>
                <ul>
                  {games.map((game) => (
                    <li key={game.id}>
                      {game.name}, {game.genre}, {game.rating}
                      <button id={game.id} onClick={handleClickLike}>Favorite?</button>
                      <Link to={`/game/${game.id}`} onClick={handleClick}>View More</Link>                    
                    </li>
                  ))}
                  </ul>
            )
        </div>
      )
    }
    
    export default Home