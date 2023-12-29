import './passwordreset.css';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const PasswordReset = () => {
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('')

    const handleInputChange = (e, setter) => {
        setter(e.target.value);
    };

    const handleReset = async (event) => {
        event.preventDefault();

        try {
            const auth = getAuth();
            await sendPasswordResetEmail(auth, email);
            // Password reset email sent!
            // console.log('Password reset email sent!');
            setSuccessMessage('Password reset email sent!');

        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error:', errorCode, errorMessage);
        }
    };



    return ( 
        <div className='container password_reset_wrapper'>
            <h2>Forgotten Password?</h2>
            <p>Enter the email address associated with your account and we'll send you a link to reset your password</p>

        <form onSubmit={handleReset} className='password_reset_form'>
            <input
                className='form-control password_reset_input'
                type='email'
                value={ email }
                placeholder='Enter email address'
                onChange={(e) => handleInputChange(e, setEmail)}
                required
            />
            <button type='submit' className='form-control password_reset_submit_button'>Continue</button>
        </form>
        <div className='non_member'> Don't have an account? <Link to='/signup'> Sign up </Link> </div>  
        <div className='success_message'>{ successMessage }</div>
        </div>
     );
}
 
export default PasswordReset;