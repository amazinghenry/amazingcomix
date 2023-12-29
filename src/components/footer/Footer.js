import './footer.css';

const Footer = () => {
    const thisYear = new Date().getFullYear()

    return ( 
        <footer className="container-fluid">
            <div className="container">
            @{ thisYear } AmazingComix. All right reserved.
            </div>
        </footer>
     );
}
 
export default Footer;