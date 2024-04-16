import { useEffect } from "react";

import Footer from "../components/Footer/Footer";
import SignIn from "../components/Login/SignIn";
import Navbar from "../components/Navbar/Navbar";
import SignInWithGoogle from "../components/Login/SignInWithGoogle"

const setPageTitle = (title) => {
    document.title = title;
};

const LoginPage = () => {

    useEffect(() => {
        setPageTitle('Café Toxic - Login');
    }, []);

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

export default LoginPage;
