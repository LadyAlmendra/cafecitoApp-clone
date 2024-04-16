import { GoogleFill } from 'akar-icons';
import { auth } from '../../firebase/config.js';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const SignInWithGoogle = () => {
    async function handleGoogle() {
        const googleProvider = new GoogleAuthProvider();
        await signWithGoogle(googleProvider);
    }

    const signWithGoogle = async (googleProvider) => {
        try {
            const res = await signInWithPopup(auth, googleProvider);
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <hr />
            or sign in with
            <button className='btn' onClick={handleGoogle}>
                Google
            </button>
        </>
    )
}

export default SignInWithGoogle;
