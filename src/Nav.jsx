import {useState, useEffect} from 'react'
import './Nav.css';

function Nav() {

    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setShow(true);
            }
            else {
                setShow(false);
            }
        })
        return () => {
            window.removeEventListener('scroll');
        }
    },[])

    return (
        <div className={`nav ${show && 'nav-black'}`}>
            
            <img className='nav-logo'
                src="https://cdn.icon-icons.com/icons2/2699/PNG/512/netflix_official_logo_icon_168085.png"
                alt="Netflix Logo" />
            
            <img className='nav-avatar'
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="" />
            
        </div>
    )
}

export default Nav
