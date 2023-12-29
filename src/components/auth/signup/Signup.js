import { useState } from 'react';
import  { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../../../config/Firebase';
import './signup.css';


const Signup = () => {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null)
    const navigate = useNavigate();

    const handleInputChange = (e, setter) => {
        setter(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential)=> {
                const user = userCredential.user;

                updateProfile(user, {
                    displayName: displayName,
                })
                .then(()=>{
                    console.log('Username Set')
                })
                .then(()=>{
                    navigate('/')
                })
                .catch((error)=> {
                    console.error('Error updating Username:', error)
                })

                console.log('New user signed up');
                console.log(user);
            })
        } catch (error) {
            setError(customErrorMessage(error.code) || 'An error occurred during sign-up.')
        }
    };

    const customErrorMessage = (errorCode) => {
        const errorMessage = {
            'auth/email already in use' : 'This email is already in use. Please use a different email.',
        };

        return errorMessage[errorCode]
    }


    return (  
        <div className="container signin_form_wrapper" >
            <h2>Join us today!</h2>
            <p>Sign up now to become a member</p>

        <form onSubmit={handleSubmit} className="form-group sign_form">
           
            <input type="text"
            className="form-control signup_input"
            value = { displayName }
            placeholder="Username"
            onChange={(e) => { 
            handleInputChange(e, setDisplayName)
            }}
            required />

            <input type="email"
            className="form-control signup_input"
            value = { email }
            placeholder="Email"
            onChange={(e) => { 
            handleInputChange(e, setEmail)
            }}
            required />

            <input type="password"
            className="form-control signup_input"
             value = { password }
             placeholder='Password'
             onChange={(e) => { 
             handleInputChange(e, setPassword)
            }}
            />

            <button
            type="submit"
            className="form-control signup_button">Create Account</button>
        </form>
        <div className='member'> Already a member? <Link to='/signin'>Sign in</Link></div>
        <div className='error_message'>{ error }</div>
        </div>
    );
}
 
export default Signup;