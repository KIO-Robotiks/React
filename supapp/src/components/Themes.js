import { useSelector, useDispatch } from "react-redux";

const TOGGLE_THEME = "TOGGLE_THEME";

const toggleTheme = () => ({
  type: TOGGLE_THEME,
});

const initialState = {
  dark: false,
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        dark: !state.dark,
      };
    default:
      return state;
  }
};



function Themes() {
  const darkTheme = useSelector((state) => state.theme.dark);
  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={darkTheme ? "dark" : "light"}>
      <h1>Темная и светлая тема</h1>
      <label>
        <input
          type="checkbox"
          checked={darkTheme}
          onChange={handleThemeToggle}
        />
        Переключить тему
      </label>
    </div>
  );
}

export default Themes;
