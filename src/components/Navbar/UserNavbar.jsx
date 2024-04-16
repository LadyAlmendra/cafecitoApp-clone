import { Bell } from 'akar-icons';
import './Navbar.css';
import BtnSignOut from '../Login/SignOut';

const UserNavbar = ({ photoURL }) => {
    return (
        <div className='navbar-user'>
            <button className='navbar-user-btn'>
                <Bell strokeWidth={2} size={24} />
            </button>
            <img className='navbar-user-img' src={photoURL} alt="userPhoto" />
            <BtnSignOut />
        </div>
    )
}

export default UserNavbar;
