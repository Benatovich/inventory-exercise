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

    async function handleSignUp() {
        const user = await signUp(email, password);

        props.setUser(user);
    }

    return(
        <div className='auth'>
            /''
        </div>
    )
}