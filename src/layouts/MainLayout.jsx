import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Toast from '../components/Toast/Toast';

const MainLayout = () => {
    return (
        <>
            <Toast />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout;
