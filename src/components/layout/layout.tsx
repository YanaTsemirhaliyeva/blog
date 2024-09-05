import { Helmet } from 'react-helmet-async';
import { memo } from 'react';
import { Toaster } from 'react-hot-toast'
import styles from './layout.module.scss'
import Footer from '../footer/footer';
import Header from '../header/header';
import { useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';

type LayoutProps = {
  pageTitle?: string;
  children: React.ReactNode;
}

function Layout({pageTitle, children}: LayoutProps): JSX.Element {
  const location = useLocation();
  const isNeedHeader = location.pathname === AppRoute.Index || AppRoute.Blog

  return (
    <div className={styles.wrapper}>
      <Helmet>
        <title>{pageTitle ? `${pageTitle}` : ''} &#8211; BLOG</title>
      </Helmet>
      {isNeedHeader && <Header />}
      {!isNeedHeader && <div className={styles['without-header']}></div>}
      <main>{children}</main>
      <Footer />
      <Toaster
        // position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#1d2e5b',
            color: '#ffffff',
            border: '1px solid #ffffff'
          }
        }}
      />
    </div>
  );
}

const MemoLayout = memo(Layout);
export default MemoLayout;
