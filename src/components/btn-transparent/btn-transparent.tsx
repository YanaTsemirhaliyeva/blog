import styles from './btn-transparent.module.scss'


export default function BtnTransparent(
  { text, disabled, onClick }: { text: string, disabled?: boolean, onClick?: () => void}
) {

  return (
    <button
      className={styles['btn-transp']}
      type='button'
      onClick={onClick}
      disabled={disabled ? disabled : false}
    >
      <span className={styles['btn-transp__text']}>
        {text}
      </span>
    </button>
  );
}
