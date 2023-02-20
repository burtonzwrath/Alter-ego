import React from 'react';
import './App.css';

function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home/>} />
            <Route path="news/*" element={<News />} />
            <Route path="profile/*" element={<Profile />} />
          </Route>
        </Routes>
      </>
  );
}

export default App;
