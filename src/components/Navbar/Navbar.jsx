import './Navbar.css';
import { Link } from 'react-router-dom';
import { Bell } from "akar-icons";

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
                        <button className='btn-navbar'>
                            <Bell strokeWidth={2} size={24} />
                        </button>
                        <img className='user-img-navbar' src={user.photoURL} alt="Foto del usuario" />
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
