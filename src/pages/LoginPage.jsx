import Footer from "../components/Footer/Footer";
import SignIn from "../components/Login/SignIn";
import Navbar from "../components/Navbar/Navbar";

const LoginPage = () => {
    return (
        <>
            <Navbar />
            <main>
                <SignIn />
            </main>
            <Footer />
        </>
    )
}

export default LoginPage;
