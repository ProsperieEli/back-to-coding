/*
    Here is where the list of all games in the database will be displayed. User can click on one to either favorite it or view more info about it.
    */

    import React from 'react'
    import gameCatelog from '../../data'

    function Home() {
      
      return (
        <div>
          {gameCatelog.map((game) =>{
            return (
              <div>
                <h1>{game.title}</h1>
                <img src={game.image} alt={game.title} />
                <p>{game.description}</p>
                <button>Favorite?</button>
              </div>
            )
          })}
        </div>
      )
    }
    
    export default Home