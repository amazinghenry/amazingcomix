import './homepage.css';
import Header from '../header/Header';
import { Link } from 'react-router-dom';
import actionCover from '../../assets/action-cover.jpg';
import fantasyCover from '../../assets/fantasy-cover.jpg';
import horrorCover from '../../assets/horror-cover.jpg';
import romanceCover from '../../assets/romance-cover.jpg';
import comedyCover from '../../assets/comedy-cover.jpg';

const Homepage = () => {
    
    return ( 
        <div className='homepage container'>
        <Header />

        <div className='comic-genre'>
        <h2>Comic Genre</h2>
            <div className='comic-genre-group'>
                <Link to='/' className='comic-genre-link'>
                    <img src={ actionCover } alt='label' className='img-fluid' />
                    <div className='cover-label'>Action</div>
                </Link>
                <Link to='/' className='comic-genre-link'>
                    <img src={ fantasyCover } alt='label' className='img-fluid' />
                    <div className='cover-label'>Fantasy</div>
                </Link>
                <Link to='/' className='comic-genre-link'>
                    <img src={ horrorCover } alt='label' className='img-fluid' />
                    <div className='cover-label'>Horror</div>
                </Link>
                <Link to='/' className='comic-genre-link'>
                    <img src={ comedyCover } alt='label' className='img-fluid' />
                    <div className='cover-label'>Comedy</div>
                </Link>
                <Link to='/' className='comic-genre-link'>
                    <img src={ romanceCover } alt='label' className='img-fluid' />
                    <div className='cover-label'>Romance</div>
                </Link>
            </div>
            </div>
        </div>
     );
}
 
export default Homepage;