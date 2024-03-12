import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './actions';

const App = () => {
  const dispatch = useDispatch();
  const darkTheme = useSelector(state => state.darkTheme);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={darkTheme ? 'dark' : 'light'}>
      <h1>Приложение с переключателем темы</h1>
      <label>
        <input type="checkbox" checked={darkTheme} onChange={handleThemeToggle} />
        Темная тема
      </label>
    </div>
  );
};

export default App;

