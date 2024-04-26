import styles from './stylesheets/Navbar.module.css'
import realLogo from './stylesheets/realLogo.png'
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.imgHolder}>
                <img src={realLogo} alt=""/>
            </div>
            <div className={styles.sectionsHolder}>
                <Link to="www.google.com">Home</Link>
                <Link to="www.google.com">About Us</Link>
            </div>
        </div>
    )
  }
  
export default Navbar;