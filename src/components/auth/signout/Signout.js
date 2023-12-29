import './signout.css'
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const Signout = () => {
    const navigate = useNavigate();
    const auth = getAuth();

    const handleSignOut = async () => {
        try {
            await signOut(auth)
            .then(()=>{
                navigate('/signin');
            });

        }catch(error) {
            console.error('Error Signing Out', error);
        }
    };

    const handleNavigate = () => {
        navigate('/')
    }

    return ( 
        <div className="signout-prompt">
            <h2>Are you sure you want to sign out?</h2>
            <button className='cancel-signout' onClick={ handleNavigate } to='/'>Cancel</button>
            <button className='logout-button' onClick={handleSignOut } >Sign Out</button>
        </div>
     );
}
 
export default Signout;