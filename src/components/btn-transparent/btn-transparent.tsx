import toast from 'react-hot-toast';
import { AppRoute, BtnText, Method } from '../../const';
import { usePostItem } from '../../store/post-item';
import styles from './btn-transparent.module.scss'
import { useNavigate } from 'react-router-dom';



export default function BtnTransparent({ text, disabled }: { text: string, disabled?: boolean}) {
  const { updatePost, deletePost, createPost, createData, currentId, setMethod, updateData, post, setIsModalActive } = usePostItem()
  const incomingText = text.toUpperCase();
  const navigate = useNavigate();


  const handleClickBtn = async () => {
    if (incomingText === BtnText.CreateNew.toUpperCase()) {
      setIsModalActive(true);
      return;
    }

    if (incomingText === BtnText.Create.toUpperCase() && createData) {
      const response = await createPost(
        {title: createData.title, body: createData.body, userId: 1}
      );
      if (response) {
        toast.success('Successfully created');
        navigate(AppRoute.Blog);
        setIsModalActive(false);
      }
      if (!response) {
        toast.error('Something went wrong, please try again');
      }
      return;
    }

    if (incomingText === BtnText.Delete.toUpperCase() && currentId) {
      const response = await deletePost(currentId.toString());
      if (response) {
        toast.success('Successfully deleted');
        navigate(AppRoute.Blog)
      }
      return
    }

    if (incomingText === BtnText.Update.toUpperCase()) {
      setMethod(Method.Update)
      return
    }

    if (incomingText === BtnText.Confirm.toUpperCase() && post && updateData) {
      const response = await updatePost(
        {title: updateData.title, body: updateData.body, id: post.id, userId: post.userId}
      );
      if (response) {
        toast.success('Successfully updated');
        setMethod(Method.Read)
      }
      return
    }

    if (incomingText === BtnText.Back.toUpperCase()) {
      setMethod(Method.Read)
    }
  }

  return (
    <button
      className={styles['btn-transp']}
      type='button'
      onClick={handleClickBtn}
      disabled={disabled ? disabled : false}
    >
      <span className={styles['btn-transp__text']}>
        {text}
      </span>
    </button>
  );
}
