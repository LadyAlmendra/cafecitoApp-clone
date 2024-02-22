import './NavLink.css';

const NavLink = () => {
    return (
        <ul className='list-items'>
            <li className='item-link link-active'>
                Perfil
            </li >
            <li className='item-link'>
                Galeria
            </li>
            <li className='item-link'>
                Post
            </li>
            <li className='item-link'>
                Planes
            </li>
        </ul>
    )
}

export default NavLink;
