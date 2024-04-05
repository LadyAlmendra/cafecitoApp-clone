import SectionProfile from "../../components/SectionProfile/SectionProfile";
import SectionCash from "../../components/SectionCash/SectionCash";

import { useEffect } from "react";

const setPageTitle = (title) => {
    document.title = title;
};

const HomePage = () => {

    useEffect(() => {
        setPageTitle('LadyToxic - Inicio');
    }, []);
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
