import './SectionGallery.css';

const SectionGallery = () => {

    const fotos = [
        {
          titulo: "Titulo de la Foto 1",
          descripcion: "Descripción de la Foto 1",
          url: "https://i.postimg.cc/dV3Z30zf/foto1.jpg"
        },
        {
          titulo: "Titulo de la Foto 2",
          descripcion: "Descripción de la Foto 2",
          url: "https://i.postimg.cc/43hKvS4b/foto2.jpg"
        },
        {
          titulo: "Titulo de la Foto 3",
          descripcion: "Descripción de la Foto 3",
          url: "https://i.postimg.cc/26R107Vp/foto3.jpg"
        },
        {
          titulo: "Titulo de la Foto 4",
          descripcion: "Descripción de la Foto 4",
          url: "https://i.postimg.cc/T3sLD6x3/foto4.jpg"
        },
        {
          titulo: "Titulo de la Foto 5",
          descripcion: "Descripción de la Foto 5",
          url: "https://i.postimg.cc/qMXhwvhm/foto5.jpg"
        },
        {
          titulo: "Titulo de la Foto 6",
          descripcion: "Descripción de la Foto 6",
          url: "https://i.postimg.cc/8zpF0gLT/foto6.jpg"
        },
        {
          titulo: "Titulo de la Foto 7",
          descripcion: "Descripción de la Foto 7",
          url: "https://i.postimg.cc/SNpYcMs2/foto7.jpg"
        },
        {
          titulo: "Titulo de la Foto 8",
          descripcion: "Descripción de la Foto 8",
          url: "https://i.postimg.cc/ht2JFZ0T/foto8.png"
        }
      ];
      
    return (
        <>
        <section className='gallery'>
            {fotos.map((foto, index) => (
                <a key={index} href={foto.url} target="_blank" rel="noopener noreferrer">
                    <figure className='container-image'>
                        <img src={foto.url} alt={foto.descripcion} />
                        <figcaption>{foto.titulo}</figcaption>
                    </figure>
                </a>
            ))}
        </section>
    </>
    )
}

export default SectionGallery;
