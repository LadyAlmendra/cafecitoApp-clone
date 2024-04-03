import SectionGallery from '../components/Gallery/SectionGallery/SectionGallery';
import { useEffect } from 'react';

const setPageTitle = (title) => {
    document.title = title;
};

const GalleryPage = () => {

    useEffect(() => {
        setPageTitle('LadyToxic - Galeria');
    }, []);

    return (
        <>
            <main>
                <SectionGallery />
            </main>
        </>
    )
}

export default GalleryPage;
