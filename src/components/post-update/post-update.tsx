import { ChangeEvent, useEffect, useState } from 'react';
import BtnTransparent from '../btn-transparent/btn-transparent';
import styles from './post-update.module.scss'
import { PostUpdateData } from '../../types/post';
import { usePostItem } from '../../store/post-item';
import toast from 'react-hot-toast';
import { Method } from '../../const';



export default function PostUpdate() {
  const {post, setUpdateData, updateData, updatePost, setMethod} = usePostItem()
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

  const handleBtnUpdate = async () => {
    if (post && updateData) {
      const response = await updatePost(
        {title: updateData.title, body: updateData.body, id: post.id, userId: post.userId}
      );
      if (response) {
        toast.success('Successfully updated');
        setMethod(Method.Read)
      }
    }
  }

  const handleBtnBack = () => {
    setMethod(Method.Read);
  }


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
        <BtnTransparent
          text='Back'
          onClick={handleBtnBack}
        />
        <BtnTransparent
          text='Confirm update'
          disabled={!isChange}
          onClick={handleBtnUpdate}
        />
      </div>
    </form>
  );
}
