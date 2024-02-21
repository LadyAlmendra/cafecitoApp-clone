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

        </ul>
    )
}

export default NavLink;
