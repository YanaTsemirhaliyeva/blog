import { SOCIALS } from '../../const';
import styles from './socials.module.scss'


export default function Socials() {
  return (
    <ul className={styles.socials}>
      {SOCIALS.map((item) => {
        const isGmail = item.title === 'gmail';
        return (
          <li key={item.title} className={styles['socials__item']}>
            <a
              href={isGmail ? `mailto:${item.href}` : item.href}
              className={styles['socials__link']}
              target={isGmail ? undefined : '_blank'}
              rel={isGmail ? undefined : 'noopener noreferrer'}
            >
              <img src={'img/icons/icon-bg.svg'} className={styles['socials__bg']} />
              <img src={item.src} alt={item.title} className={styles['socials__icon']} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
