import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import {Route,Routes} from "react-router-dom";
import SharedLayout from "./features/ui/sharedLyout/SharedLayout";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import ProfilePage from "./pages/ProfilePage";


const App:React.FC = () => {
  return (
      <Provider store={store}>
              <Routes>
                  <Route path="/" element={<SharedLayout />}>
                      <Route index element={<HomePage />}/>
                      <Route path="/news" element={<NewsPage/>} />
                      <Route path="/profile" element={<ProfilePage/>} />
                  </Route>
              </Routes>
      </Provider>
  );
}

export default App;
