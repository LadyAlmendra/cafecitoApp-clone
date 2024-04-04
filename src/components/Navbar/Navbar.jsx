import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
                <li>
                    <Link className='link btn-link' to="/login">
                        Ingresar
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
