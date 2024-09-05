import styles from './footer.module.scss'
import container from '../../sass/global/container.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={container.container}>
        &copy; Yana Temirgalieva, 2024
      </div>
    </footer>
  );
}
