import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import './navbar.css';

const Nav = () => {
    const [isUserSignedIn, setIsUserSignedIn] = useState(false);
    const auth = getAuth(); // Use the same auth instance throughout

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsUserSignedIn(!!user); // Use !!user to convert user to a boolean
    
            if (user) {
                // User is signed in
                setIsUserSignedIn(true);
            } else {
                // User is signed out
                setIsUserSignedIn(false);
            }
        });

        // Cleanup the subscription when the component unmounts
        return () => unsubscribe();
    }, [auth]); // Include auth in the dependency array

    const userName = auth.currentUser?.displayName; // Use optional chaining

    return ( 
        <nav className="container">
            <div className='main-logo'>
                AmazingComix 
            </div>
            <div className='link-group'>
                <Link to='/' className='link-item'>Home</Link>
                <Link to='/about' className='link-item'>About us</Link>
                <Link to='/' className='link-item'>Web Comix</Link>
            </div>
            {isUserSignedIn ? (
                <div className="signedin-group">
                    <span className="profile_name">Hello, { userName }</span>
                    <Link to="/signout" className='link-item-signout'>Sign out</Link>
                </div>
            ) : (
                <Link to='/signup' className='signup-link'> Sign Up </Link>
            )}
        </nav>
     );
}
 
export default Nav;
