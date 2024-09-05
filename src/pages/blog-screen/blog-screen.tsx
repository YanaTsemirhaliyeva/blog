import MemoLayout from '../../components/layout/layout';
import { usePosts } from '../../store/posts';
import { useEffect } from 'react';
import PostList from '../../components/post-list/post-list';
import Pagination from '../../components/pagination/pagination';
import Spinner from '../../components/spinner/spinner';

import container from '../../sass/global/container.module.scss'
import { CreatePost } from '../../components/create-post-modal/create-post-modal';
// import styles from './blog-screen.module.scss'


export default function BlogScreen(): JSX.Element {
  const {posts, getPosts, loading, photos, getPhotos, activePage} = usePosts();

  useEffect(() => {
    getPosts();
    getPhotos();
  }, [activePage])

  if (loading) return <Spinner />
  if (posts.length === 0 || photos.length === 0) return <>No posts or photos available</>;

  return (
    <MemoLayout pageTitle='ALL POSTS'>
      <section className={container.container}>
        {posts.length > 0 && photos.length > 0 &&
          <>
            <PostList />
            <Pagination />
          </>
        }
      </section>
      <CreatePost />
    </MemoLayout>
  );
}
