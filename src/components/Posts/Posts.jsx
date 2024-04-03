import './Posts.css';
import { ThumbsDown, ThumbsUp } from 'akar-icons';

const Posts = () => {
    return (
        <section>
            <div className='box post'>
                <h3>Estoy usando CaféToxic☕</h3>
                <p>Gracias a todes por estar💜</p>
                <div className='btn'>
                    <ThumbsUp strokeWidth={2} size={20} />
                    <ThumbsDown strokeWidth={2} size={20} />
                </div>
            </div>
            <div className='box post'>
                <h3>Estoy usando CaféToxic☕</h3>
                <p>Gracias a todes por estar💜</p>
                <div className='btn'>
                    <ThumbsUp strokeWidth={2} size={20} />
                    <ThumbsDown strokeWidth={2} size={20} />
                </div>
            </div>
        </section>
    )
}

export default Posts;
