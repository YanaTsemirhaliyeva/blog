import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { usePostItem } from '../../store/post-item';
import Spinner from '../../components/spinner/spinner';
import NotFoundScreen from '../not-found-screen/not-found-screen';

import styles from './post-screen.module.scss'
import container from '../../sass/global/container.module.scss'
import MemoLayout from '../../components/layout/layout';
import BtnTransparent from '../../components/btn-transparent/btn-transparent';
import { AppRoute, Method } from '../../const';
import PostUpdate from '../../components/post-update/post-update';
import LinkTransparent from '../../components/link-transparent/link-transparent';
import toast from 'react-hot-toast';


export default function PostScreen(): JSX.Element {
  const { postId } = useParams();
  const { getPost, getPhoto, loading, post, photo, dropData, setCurrentId, method, currentId, deletePost, setMethod } = usePostItem();
  const navigate = useNavigate();

  useEffect(() => {
    if (postId) {
      setCurrentId(Number(postId));
      getPost();
      getPhoto();
    }

    return () => {
      dropData();
    };

  }, [postId]);

  if (loading) {
    return <Spinner />;
  }

  if (!post) {
    return <NotFoundScreen />;
  }

  const handlePostUpdate = () => {
    setMethod(Method.Update);
  }

  const handlePostDelete = async () => {
    if (currentId) {
      const response = await deletePost(currentId.toString());
      if (response) {
        toast.success('Successfully deleted');
        navigate(AppRoute.Blog);
      }
    }
  }


  return (
    <MemoLayout pageTitle={`${post.title}`}>
      <section className={container.container}>
        {method === Method.Read &&
          <div className={styles['post__btns']}>
            <LinkTransparent text={'Back'} href={AppRoute.Blog} />
            <BtnTransparent
              text='Update'
              onClick={handlePostUpdate}
            />
            <BtnTransparent
              text='Delete'
              onClick={handlePostDelete}
            />
          </div>
        }
        <div className={styles.post}>
          {photo &&
            <img src={photo.url} alt={post.title} />
          }
          {method === Method.Read &&
            <div className={styles['post__content']}>
              <h1 className={styles['post__title']}>
                {post.title}
              </h1>
              <p className={styles['post__text']}>{post.body}</p>
              <cite className={styles['post__author']}>Author: {post.userId}</cite>
            </div>
          }
          {method === Method.Update &&
            <PostUpdate />
          }
        </div>
      </section>
    </MemoLayout>
  );
}
