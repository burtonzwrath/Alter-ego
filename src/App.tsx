import React from "react";
import { Provider } from "react-redux";
import MyRoutes from "./routes/MyRoutes";
import { ThemeProvider } from "@mui/material/styles";
import { store } from "./redux/store";
import { theme } from "./appStyles";
import "./App.css";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <MyRoutes />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
