import { InstagramFill, LinkChain } from 'akar-icons'
import './SectionProfile.css'

const SectionProfile = () => {
  return (
    <section className="profile-description">
      <article className='box'>
        <h4>Descripción</h4>
        <p>
          Hi👋! Estoy devuelta🤗 <br />
          "Si me extrañaste… aquí estoy, si no, ¡come un limón 🍋!"
        </p>
        <div className='redes'>
          <InstagramFill strokeWidth={2} size={18} />
          <LinkChain strokeWidth={2} size={18} />
        </div>
        <div className='list-tag'>
          <span className='tag'>
            Arte
          </span>
          <span className='tag'>
            Pintura y Dibujo
          </span>
          <span className='tag'>
            Fotografia
          </span>
        </div>
      </article>
    </section>
  )
}

export default SectionProfile
