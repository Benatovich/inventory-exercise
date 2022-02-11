import { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils';

export default function AuthPage(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();

    const user = await signIn(email, password);

    props.setUser(user);
  }

  async function handleSignUp(e){
    e.preventDefault();
    const user = await signUp(email, password);
    // console.log(user);
    props.setUser(user);
  }


  return (
    <div className='auth'>
      <h1><em>Placeholder Name</em></h1>
      <form onSubmit={handleSignIn}>
        <label>
          <input placeholder='email' onChange={e => setEmail(e.target.value)} required type="email" name="email" />
        </label>
        <label>
          <input placeholder='password' onChange={e => setPassword(e.target.value)} required type="password" name="password" />
        </label>
        <button>Sign In</button>
        <button type='button' onClick={handleSignUp}>Sign Up</button>
      </form>
    </div>
  );
}