import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from 'react';
import Loader from "./Loader/Loader";
// import Home from "pages/Home/Home";
// import Movies from "pages/Movies/Movies";
// import MovieDetails from "pages/MovieDetailes/MovieDetails";
// import NotFound from "pages/NotFound/NotFound";
// import Cast from "./Cast/Cast";
// import Reviews from "./Reviews/Reviews";
// import Layout from "./Layout/Layout";


const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Layout = lazy(() => import('./Layout/Layout'));


export const App = () => {
  return (
    
    <div>
     <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:movieId' element={<MovieDetails />}>
          <Route path='/movies/:movieId/cast' element={<Cast />} />
          <Route path='/movies/:movieId/reviews' element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        </Suspense>
    </div>
  );
};
