import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';


const Toast = () => {
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const status = searchParams.get('status');

    useEffect(() => {
        // Si no se recibe el parámetro 'status', no hacer nada.
        if (!status) {
            return;
        }
        const iconType = status === 'approved' ? 'success' : 'error';
        const message = status === 'approved' ? 'Gracias por tu colaboración' : 'Hubo un problema con tu colaboración';

        // Muestra el toast
        Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            icon: iconType,
            title: message,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
        });
    }, [status]);

    return null;
};

export default Toast