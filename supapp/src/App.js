// import logo from './logo.svg';
import "./App.css";
import TemperatureConvert from "./components/TemperatureConvert";
import Themes from "./components/Themes";
import ToDoList from "./components/TodoList";

import themeReducer from "./components/Themes";
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({reducer: themeReducer});

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <div className="main">
          <TemperatureConvert />
          <ToDoList />
          {/* <Themes /> */}
        </div>
      </header>
    </div>
    </Provider>
  );
}

export default App;
