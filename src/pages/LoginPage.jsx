import { useEffect, useState } from "react";

import Footer from "../components/Footer/Footer";
import SignIn from "../components/Login/SignIn";
import Navbar from "../components/Navbar/Navbar";
import SignInWithGoogle from "../components/Login/SignInWithGoogle"
import { auth, userExists } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

import { useNavigate } from "react-router-dom";


const setPageTitle = (title) => {
    document.title = title;
};

const LoginPage = () => {
    const [state, setCurrentState] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentState(0);
        setPageTitle('Café Toxic - Login');

        onAuthStateChanged(auth, handleUserStateChanged);
    }, []);

    const handleUserStateChanged = async (user) => {
        if (user) {
            const isRegistered = await userExists(user.uid);
            if (isRegistered) {
                setCurrentState(1);
                navigate('/dashboard');
            } else {
                setCurrentState(2);
                navigate('/chooseUserName');
                console.log('No hay user');
            }
        } else {
            console.log('No hay user');
        }
    }
    if (state === 0) {
        return (
            <>
                <Navbar />
                <main>
                    <section>
                        <SignIn />
                        <SignInWithGoogle />
                    </section>
                </main>
                <Footer />
            </>
        )
    }
}

export default LoginPage;
