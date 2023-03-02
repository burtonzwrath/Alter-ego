import React, { Suspense, lazy } from "react";
const News = lazy(() => import("../pages/newsPage/NewsPage"));
const Home = lazy(() => import("../pages/homePage/HomePage"));
const Profile = lazy(() => import("../pages/profilePages/ProfilePage"));
const Layout = lazy(() => import("../features/ui/sharedLayout/SharedLayout"));
import { Routes, Route } from "react-router-dom";
import ProgressBar from "../features/ui/progressBar/ProgressBar";
import path from "./paths";


const MyRoutes = () => (
  <Suspense fallback={<ProgressBar />}>
    <Routes>
      <Route path={path.LAYOUT} element={<Layout />}>
        <Route path={path.HOME} element={<Home />} />
        <Route path={path.PROFILE} element={<Profile />} />
        <Route path={path.NEWS} element={<News />} />
        <Route index element={<News />} />
      </Route>
    </Routes>
  </Suspense>
);

export default MyRoutes;

