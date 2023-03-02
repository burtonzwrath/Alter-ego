import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ThemeProvider } from "@mui/material/styles";
import {theme} from "./appStyles";
import MyRoutes from "./Routes/MyRoutes";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <MyRoutes/>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
