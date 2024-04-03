import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Toast from '../components/Toast/Toast';
import Profile from '../components/Profile/Profile';
import NavLink from '../components/NavLink/NavLink';

const MainLayout = () => {
    return (
        <>
        <Profile/>
        <NavLink/>
            <Toast />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout;
