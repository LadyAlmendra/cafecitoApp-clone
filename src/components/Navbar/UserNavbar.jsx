import './Navbar.css';
import { Link } from 'react-router-dom';
import { Bell } from 'akar-icons';
import BtnSignOut from '../Login/SignOut';

const UserNavbar = ({ photoURL }) => {
    return (
        <div className='navbar-user'>
            <button className='navbar-user-btn'>
                <Bell strokeWidth={2} size={24} />
            </button>
            <Link to="/dashboard">
                <img className='navbar-user-img' src={photoURL} alt="userPhoto" />
            </Link>
            <BtnSignOut />
        </div>
    )
} 

export default UserNavbar;
