import { SignOut } from "akar-icons";
import { auth } from "../../firebase/config";
import { signOut } from "firebase/auth";

import { useNavigate } from "react-router-dom";

const BtnSignOut = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth).then(() => {
            console.log("Sesión cerrada exitosamente");
            navigate('/login');
        }).catch((error) => {
            console.error("Error al cerrar sesión:", error);
        });
    };

    return (
        <>
            <button onClick={handleSignOut} className='navbar-user-btn' aria-label="Cerrar Sesión">
                <SignOut strokeWidth={2} size={24} />
            </button>
        </>
    )
}

export default BtnSignOut;
