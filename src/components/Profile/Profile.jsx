import NavLink from '../NavLink/NavLink'
import './Profile.css'

const Profile = () => {
    return (
        <>
            <header className='profile'>
                <div className='profile-img'>
                    <picture className='container-banner'>
                        <img src="./Public.webp" alt="" />
                    </picture>
                    <picture className='container-img-profile'>
                        <img src="./Public.webp" alt="" />
                    </picture>
                </div>
                <div className='profile-info'>
                    <h1 className='name'>Lady Toxic</h1>
                    <h3 className='status'>No soy una <strong className='text-pink'>Barbie</strong>,
                        soy una <strong className='text-harley'>Harley Quinn</strong></h3>
                    <h5>Ilustradora y Modelo Alternativa</h5>
                </div>
                <NavLink />
            </header>
        </>
    )
}

export default Profile
