import './NavLink.css';
import { Link, useLocation } from 'react-router-dom';

const NavLink = () => {
    const location = useLocation(); 

    const isActive = (pathname) => location.pathname === pathname;

    return (
        <ul className='list-items'>
            <li className={`item-link ${isActive('/') ? 'link-active' : ''}`}>
                <Link className='link' to="/">Perfil</Link>
            </li>
            <li className={`item-link ${isActive('/gallery') ? 'link-active' : ''}`}>
                <Link className='link' to="/gallery">Galería</Link>
            </li>
            <li className={`item-link ${isActive('/posts') ? 'link-active' : ''}`}>
                <Link className='link' to="/posts">Post</Link>
            </li>
            <li className={`item-link ${isActive('/plans') ? 'link-active' : ''}`}>
                <Link className='link' to="/plans">Planes</Link>
            </li>
        </ul>
    );
};

export default NavLink;

