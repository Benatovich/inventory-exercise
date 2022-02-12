import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createGame } from './services/fetch-utils';

export default function CreatePage() {
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [year, setYear] = useState(0);
  const [console, setConsole] = useState('');
  const [genre, setGenre] = useState('');
  const [developer, setDeveloper] = useState('');
  const [review, setReview] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    await createGame({
      title, year, console, genre, developer, review
    });

    history.push('/games');
  }

  return (
    <div className='create'>
      <form onSubmit={handleSubmit}>
        <h2>Review a video game!</h2>
        <input placeholder='title' onChange={e => setTitle(e.target.value)} required name='title' />
        <input placeholder='year' onChange={e => setYear(e.target.value)} required name='year' />
        <input placeholder='console' onChange={e => setConsole(e.target.value)} required name='console' />
        <input placeholder='genre' onChange={e => setGenre(e.target.value)} required name='genre' />
        <input placeholder='developer' onChange={e => setDeveloper(e.target.value)} required name='developer' />
        <input placeholder='review' onChange={e => setReview(e.target.value)} required name='review' />
        <button>Submit Review</button>
      </form>
    </div>
  );
}