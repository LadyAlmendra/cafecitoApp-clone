import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Toast from '../components/Toast/Toast';
import Profile from '../components/Profile/Profile';
import NavLink from '../components/NavLink/NavLink';
import Navbar from '../components/Navbar/Navbar';

import { useEffect, useState } from 'react';
import { auth } from "../firebase/config.js";
import { onAuthStateChanged } from "firebase/auth";

const MainLayout = () => {

    const [user, setUser] = useState(null)

    useEffect(() => {
        onAuthStateChanged(auth, handleUserStateChanged);
    }, []);

    const handleUserStateChanged = (user) => {
        if (user) {
            console.log(user);
            setUser(user)
        } else {
            console.log('No hay user');
        }
    }

    return (
        <>
            <Navbar user={user} />
            <Profile />
            <NavLink />
            <Toast />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout;
