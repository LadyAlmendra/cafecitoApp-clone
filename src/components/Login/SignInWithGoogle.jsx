import { auth } from '../../firebase/config.js';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { useNavigate } from 'react-router-dom';

const SignInWithGoogle = () => {
    const navigate = useNavigate ();
    
    async function handleGoogle() {
        const googleProvider = new GoogleAuthProvider();
        await signWithGoogle(googleProvider);
    }

    const signWithGoogle = async (googleProvider) => {
        try {
            const res = await signInWithPopup(auth, googleProvider);
            console.log(res)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='box '>
                <p className='text-center'>o iniciar sesión con</p>
                <button className='btn google' onClick={handleGoogle}>
                    Google
                </button>
                <p className='warning'>Temporalmente solo se puede hacer iniciar sesión con Google</p>
            </div>
        </>
    )
}

export default SignInWithGoogle;
