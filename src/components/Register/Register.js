import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const [
    createUserWithEmailAndPassword,
    user,
    loading,

  ] = useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = event => {
    setEmail(event.target.value)
  }

  const handlePasswordBlur = event => {
    setPassword(event.target.value)
  }

  const handleConfirmPassword = event => {
    setConfirmPassword(event.target.value)
  };
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    navigate('/');
  }

  const handleSubmit = event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('your two password did not match! kindly recheck your password and then register.');
      return;
    }

    createUserWithEmailAndPassword(email, password);
    console.log('clicked')
  }
  return (
    <div className='register-form'>
      <h1>Please Register</h1>
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

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control onBlur={handleConfirmPassword} type="password" placeholder="Confirm Password" required />
        </Form.Group>
        <p>Already have an account? <Link className='text-decoration-none' to='/login'>Please Login</Link></p>
        <p style={{ color: 'red' }}>{error}</p>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;