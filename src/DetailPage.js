import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getGameById } from './services/fetch-utils';

export default function DetailPage() {
  const [game, setGame] = useState({});
  const match = useRouteMatch();

  useEffect(() => {
    async function fetch() {
      const response = await getGameById(match.params.id);

      setGame(response);
    }
    fetch();
  }, [match]);

  return (
    <div className='detail'>
      <h1>{game.title}</h1>
      <h2>A {game.genre} for {game.console}</h2>
      <h2>Released in {game.year}</h2>
      <h3>Developed by {game.developer}</h3>
      <p>
        {game.review}
      </p>
    </div>
  );
}
