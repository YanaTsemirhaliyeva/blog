import styles from './header.module.scss'
import container from '../../sass/global/container.module.scss'
import BtnTransparent from '../btn-transparent/btn-transparent';
import Socials from '../socials/socials';
import { useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';

export default function Header() {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={`${container.container} ${styles['header__flex']}`}>
        <Socials />
        <div>
          {location.pathname !== AppRoute.Index &&
            <BtnTransparent text='Create new post'/>
          }
        </div>
      </div>
    </header>
  );
}
