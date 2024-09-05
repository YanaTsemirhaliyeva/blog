import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { HelmetProvider } from 'react-helmet-async';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import BlogScreen from '../../pages/blog-screen/blog-screen';
import PostScreen from '../../pages/post-screen/post-screen';
// import { isCamerasDataStatusLoading, isErrorStatus } from '../../store/cameras/cameras.selectors';
// import Spinner from '../spinner/spinner';
// import { isPromoDataLoading } from '../../store/promo/promo.selectors';
// import ErrorScreen from '../../pages/error-screen/error-screen';




function App(): JSX.Element {

  // const isCamerasDataLoading = useAppSelector(isCamerasDataStatusLoading);
  // const isPromoStatusDataLoading = useAppSelector(isPromoDataLoading);
  // const hasError = useAppSelector(isErrorStatus);

  // if (isCamerasDataLoading || isPromoStatusDataLoading) {
  //   return <Spinner/>;
  // }

  // if (hasError) {
  //   return (
  //     <ErrorScreen />
  //   );
  // }

  return (
    <HelmetProvider>
      <Routes>
        <Route
          path={AppRoute.Index}
          element={<WelcomeScreen />}
        />
        <Route
          path={AppRoute.Blog}
          element={<BlogScreen />}
        />
        <Route
          path={`${AppRoute.Post}/:postId`}
          element={<PostScreen />}
        />
        <Route
          path='*'
          element={<NotFoundScreen />}
        />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
