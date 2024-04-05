import Posts from '../../components/Posts/Posts';
import { useEffect } from 'react';

const setPageTitle = (title) => {
  document.title = title;
};

const PostsPage = () => {

useEffect(() => {
    setPageTitle('LadyToxic - Posts');
}, []);

  return (
    <main>
      <Posts />
    </main>
  )
}

export default PostsPage;