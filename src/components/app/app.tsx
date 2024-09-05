import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { HelmetProvider } from 'react-helmet-async';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import BlogScreen from '../../pages/blog-screen/blog-screen';
import PostScreen from '../../pages/post-screen/post-screen';


function App(): JSX.Element {

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
