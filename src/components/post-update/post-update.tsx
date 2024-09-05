import { ChangeEvent, useEffect, useState } from 'react';
import BtnTransparent from '../btn-transparent/btn-transparent';
import styles from './post-update.module.scss'
import { PostUpdateData } from '../../types/post';
import { usePostItem } from '../../store/post-item';



export default function PostUpdate() {
  const {post, setUpdateData} = usePostItem()
  const initialData = post ? {title: post.title, body: post.body} : {title: '', body: ''}
  const [data, setData] = useState<PostUpdateData>(initialData)
  const [isChange, setIsChange] = useState<boolean>(false)

  useEffect(() => {
    setUpdateData(data)
  }, [data])

  const handleChangeForm = (evt: ChangeEvent<HTMLTextAreaElement>): void => {
    const {name, value} = evt.target;
    setData({ ...data, [name]: value});
    if (!isChange) {
      setIsChange(true);
    }
  };


  return (
    <form className={styles['post-update']}>
      <div className={styles['post-update__field']}>
        <label>
          <span className={styles['post-update__title']}>Title</span>
          <textarea
            placeholder="Title"
            maxLength={100}
            name='title'
            onChange={handleChangeForm}
            value={data.title}
          />
        </label>
      </div>
      <div className={`${styles['post-update__field']} ${styles['post-update__field--desc']}`}>
        <label>
          <span className={styles['post-update__title']}>Description</span>
          <textarea
            placeholder="Description text"
            maxLength={400}
            name='body'
            onChange={handleChangeForm}
            value={data.body}
          />
        </label>
      </div>
      <div className={styles['post-update__btn']}>
        <BtnTransparent text='Back' />
        <BtnTransparent
          text='Confirm update'
          disabled={!isChange}
        />
      </div>
    </form>
  );
}
