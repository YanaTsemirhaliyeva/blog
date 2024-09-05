import { Link } from 'react-router-dom';
import styles from './link-transparent.module.scss'


export default function LinkTransparent ({text, href}: {text: string, href: string}) {
  return (
    <Link className={styles['btn-transp']} to={href}>
      <span className={styles['btn-transp__text']}>
        {text}
      </span>
    </Link>
  );
}
