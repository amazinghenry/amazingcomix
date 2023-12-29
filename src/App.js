import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/navbar/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import NoPage from './components/nopage/NoPage';
import Signin from './components/auth/signin/Signin';
import Signup from './components/auth/signup/Signup';
import Signout from './components/auth/signout/Signout';
import PasswordReset from './components/auth/password-reset/PasswordReset';


function App() {
  return (
    <div className='content'>
 <BrowserRouter>
    <Nav />
 <Routes>
    <Route path="/" element = {<Homepage />} />
    <Route path="/about" element = {<About />} />
    <Route path='/signin' element = {<Signin/>} />
    <Route path='/signup' element = {<Signup/>} />
    <Route path='/signout' element = {<Signout/>} />
    <Route path='/password-recovery' element = {<PasswordReset/>} />
    <Route path='*' element = {<NoPage/>} />
  </Routes>
  <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
