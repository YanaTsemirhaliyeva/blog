// import { Link } from 'react-router-dom';
import MemoLayout from '../../components/layout/layout';
import LinkTransparent from '../../components/link-transparent/link-transparent';
import styles from './welcome-screen.module.scss'
import container from '../../sass/global/container.module.scss'
import { AppRoute } from '../../const';



export default function WelcomeScreen(): JSX.Element {
  return (
    <MemoLayout pageTitle='WELCOME'>
      <section className={container.container}>
        <div className={styles['welcome-page']}>
          <p className={styles['welcome-page__text']}>Welcome to<br />
            <span>my blog</span>
          </p>
          <LinkTransparent text='Lets test' href={AppRoute.Blog} />
        </div>
      </section>
    </MemoLayout>
  );
}

