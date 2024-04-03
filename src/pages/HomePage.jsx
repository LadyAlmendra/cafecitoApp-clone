import Profile from "../components/Profile/Profile";
import SectionProfile from "../components/SectionProfile/SectionProfile";
import SectionCash from "../components/SectionCash/SectionCash";
import NavLink from "../components/NavLink/NavLink";
const HomePage = () => {
    return (
        <>
            <main>
                <SectionProfile />
                <SectionCash />
            </main>
        </>
    )
}

export default HomePage
