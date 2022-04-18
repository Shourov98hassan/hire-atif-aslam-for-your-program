import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const provider = new GoogleAuthProvider();


    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }



    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password);
    }

    const googleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user)
                navigate('/home')

            })
            .catch((error) => {
                console.error(error)
            })
    }


    return (
        <div className='login-form'>
            <h1>Please Login</h1>
            <Form onSubmit={handleSubmit} className='w-50 mt-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                </Form.Group>
                <p>New in this site? <Link to='/register' className='text-decoration-none'>Please Register</Link></p>
                <Button variant="primary" type="submit">
                    Login
                </Button><br />


            </Form>
            <button onClick={googleSignIn} className='mt-2 btn btn-info'>Login by Google</button>
        </div>
    );
};

export default Login;