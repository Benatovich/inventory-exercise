import React, { useState, useEffect } from 'react';
import { getGameById, updateGame, deleteGame } from './services/fetch-utils';
import { useParams, useHistory } from 'react-router-dom';

export default function UpdatePage() {
  const history = useHistory();
  const { id } = useParams();

  const [title, setTitle] = useState('');
  const [year, setYear] = useState(0);
  const [console, setConsole] = useState('');
  const [genre, setGenre] = useState('');
  const [developer, setDeveloper] = useState('');
  const [review, setReview] = useState(''); 

  useEffect(() => {
    async function fetch() {
      const game = await getGameById(id);

      setTitle(game.title);
      setYear(game.year);
      setConsole(game.console);
      setGenre(game.genre);
      setDeveloper(game.developer);
      setReview(game.review);
    }

    fetch();
  }, [id]);

  async function handleDelete() {
    await deleteGame(id);

    history.push('/games');
  }

  async function handleUpdate(e) {
    e.preventDefault();

    await updateGame(id, {
      title: title,
      year: year,
      console: console,
      genre: genre,
      developer: developer,
      review: review
    });

    history.push('/games');
  }

  return (
    <div>
      <h2>Update</h2>
      <form onSubmit={handleUpdate}>
        <input placeholder='title' value={title} onChange={e => setTitle(e.target.value)} />
        <input placeholder='year' value={year} onChange={e => setYear(e.target.value)} />
        <input placeholder='console' value={console} onChange={e => setConsole(e.target.value)} />
        <input placeholder='genre' value={genre} onChange={e => setGenre(e.target.value)} />
        <input placeholder='developer' value={developer} onChange={e => setDeveloper(e.target.value)} />
        <input placeholder='review' value={review} onChange={e => setReview(e.target.value)} />
        <button>
                Update Review
        </button>
      </form>
      <button className='delete-button' onClick={handleDelete}>
                Delete Review
      </button>
    </div>
  );
}
