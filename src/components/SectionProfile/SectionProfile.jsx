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
        <ul className='redes'>
          <li>
            <a href="https://www.instagram.com/lady.toxic4/" target='_blank'>
              <InstagramFill strokeWidth={3} size={22} />
            </a>
          </li>
          <li>
            <a href="https://ladytoxic.com.ar" target='_blank'>
              <LinkChain strokeWidth={2} size={22} />
            </a>
          </li>
        </ul>
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
