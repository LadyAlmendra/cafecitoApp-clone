import './Navbar.css';
import { Link } from 'react-router-dom';
import { Bell } from "akar-icons";
import UserNavbar from './UserNavbar';

const Navbar = ({ user }) => {



    return (
        <nav>
            <Link className='link' to="/">
                <h2>CaféToxic</h2>
            </Link>
            <ul>
                <li>
                    <Link className='link ' to="/explore">
                        Explorar
                    </Link>
                </li>
                {user ? (
                    <li className='user-navbar'>
                        <UserNavbar photoURL={user.photoURL}></UserNavbar>
                    </li>
                ) : (
                    <li>
                        <Link className='link btn-link' to="/login">
                            Ingresar
                        </Link>
                    </li>)}
            </ul>
        </nav>
    )
}

export default Navbar;
