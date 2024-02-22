import Profile from "../components/Profile/Profile";
import SectionProfile from "../components/SectionProfile/SectionProfile";
import SectionCash from "../components/SectionCash/SectionCash";

const HomePage = () => {
    return (
        <>
            <Profile />
            <main>
                <SectionProfile />
                <SectionCash />
            </main>
        </>
    )
}

export default HomePage
