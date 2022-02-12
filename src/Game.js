import { Link } from 'react-router-dom';

export default function Game({ game }) {
  return (
    <Link key={game.id + game.title} to={`/edit/${game.id}`}>
      <div className='game'>
        <h3>{game.title}</h3>
        <p>Released in {game.year}</p>
        <p>Available for {game.console}</p>
        <p>Genre: {game.genre}</p>
        <p>Developed by {game.developer}</p>
      </div>
    </Link>
  );
}