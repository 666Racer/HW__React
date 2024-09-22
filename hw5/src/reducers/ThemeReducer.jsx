import { TOGGLE_THEME } from "../actions/toggleActions";

const initialState = {
    theme: 'light', // Начальное состояние — светлая тема
  };

export const ThemeToggler = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    default:
      return state;
  }
};