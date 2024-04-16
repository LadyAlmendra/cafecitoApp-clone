import {useEffect }from 'react'
import Register from '../components/Login/Register';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import SignInWithGoogle from '../components/Login/SignInWithGoogle';

const setPageTitle = (title) => {
    document.title = title;
};

const SignUpPage = () => {

    useEffect(() => {
        setPageTitle('Café Toxic - Register');
    }, []);

    return (
        <>
            <Navbar />
            <main>
                <section>
                    <Register />
                    <SignInWithGoogle />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default SignUpPage
