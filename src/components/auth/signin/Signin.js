import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import  { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../config/Firebase';
import './signin.css';



const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // handle value
    const handleInputChange = (e, setter) => {
        setter(e.target.value);
    };
    //handle submit 
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential)=> {
                const user = userCredential.user;
                console.log(user);
                navigate('/')
            })
        } catch (error) {
            setError(customErrorMessage(error.code) || 'Error occured: Check Email and Password.')
        }
    };

    // handle error
    const customErrorMessage = (errorCode) => {
        const errorMessage = {
            'auth/email already in use' : 'This email is already in use. Please use a different email.',
        };
        return errorMessage[errorCode]
    }

    return (
        <div className="container signin_form_wrapper">
            <h2>Welcome back!</h2>
            <p>Login to access your account</p>

        <form className="sign_form" onSubmit={ handleSubmit }>
            <input
                type="email"
                className="form-control signin_input"
                value={ email }
                onChange={(e) => {handleInputChange(e, setEmail)}}
                placeholder='Email'
                required
            />

            <input
            type='password'
            className='form-control signin_input' 
            value={ password }
            onChange={(e) => {handleInputChange(e, setPassword)}}
            placeholder='Password'
            required
            />
            <button type='submit' className='form-control signin_button'>Sign In</button>
        </form>
        <Link to = '/password-recovery' className='forgot_password'>Forgot Password?</Link>
        <div className='non_member'> Not a member? <Link to='/signup'> Sign up </Link> </div>           
        <div className='error_message'>{ error }</div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        </div>
     );
}
 
export default Signin;