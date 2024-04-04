import './Posts.css';
import { ThumbsDown, ThumbsUp } from 'akar-icons';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config.js';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const postsRef = collection(db, 'Posts');
        getDocs(postsRef)
            .then((querySnapshot) => {
                const postData = querySnapshot.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                });
                setPosts(postData);
            })
    }, [])

    return (
        <section>
            {posts.map((post) => (
                <div className='box post' key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.post}</p>
                    <div className='btn'>
                        <button>
                            {post.like}
                            <ThumbsUp className='icon' strokeWidth={2} size={20} />
                        </button>
                        <button>
                            {post.disLike}
                            <ThumbsDown className='icon' strokeWidth={2} size={20} />
                        </button>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Posts;
