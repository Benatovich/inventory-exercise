import { Link } from 'react-router-dom';

export default function Game({ game }) {
  return (
    <Link to={`/games/${game.id}`}>
      <div className='game'>
        <h3>{game.title}</h3>
        <p>Released in {game.year}</p>
        <p>Available for {game.console}</p>
        <p>Genre: {game.genre}</p>
        <p>Developed by {game.developer}</p>
        <p>Review: {game.review}</p>
      </div>
    </Link>
  );
}