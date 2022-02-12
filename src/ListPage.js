import React, { useState, useEffect } from 'react';
import { getGames } from './services/fetch-utils';
import Game from './Game';

export default function ListPage() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetch() {
      const data = await getGames();

      setGames(data);
    }
    fetch();
  }, []);
  return (
    <div className='games'>
      { games.map(game => <Game key={game.id} game={game}/>)}
    </div>
  );
}