import { Link } from 'react-router-dom';
import { usePosts } from '../../store/posts';
import { Post } from '../../types/post';
import { AppRoute } from '../../const';
import styles from './post-list.module.scss'


export default function PostList(): JSX.Element {
  const { posts, photos } = usePosts();


  return (
    <ul className={styles['post-list']}>
      {posts.map((post: Post, i: number) => {
        const photo = photos[i];
        if (!photo) return null;
        const photoUrl = photo.thumbnailUrl;

        return (
          <li key={post.id} className={styles['post-list__item']}>
            <Link to={`${AppRoute.Post}/${post.id}`} className={styles['post-list__link']}>
              <img src={photoUrl} alt={post.title} className={styles['post-list__img']} />
              <h2 className={styles['post-list__title']}>{post.title}</h2>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
