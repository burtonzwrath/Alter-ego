import React from 'react';
import './App.css';
import SharedLayout from "./features/ui/sharedLyout/SharedLayout";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import ProfilePage from "./pages/ProfilePage";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="news/*" element={<NewsPage />} />
            <Route path="profile/*" element={<ProfilePage />} />
          </Route>
        </Routes>
      </>
  );
}

export default App;
