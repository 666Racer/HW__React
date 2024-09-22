import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toggleThemeAction } from '../actions/toggleActions';
import '../App.css'

export const ToggleTheme = () => {
    const theme = useSelector((state) => state.theme); //получение темы из состояния
    const dispatch = useDispatch(); //отправка действия

    return (
        <div style={{
          backgroundColor: theme === 'light' ? 'aliceblue' : 'black',
          color: theme === 'light' ? 'black' : 'aliceblue',
        }}>
          <h1>{theme === 'light' ? 'Светлая' : 'Темная'} тема</h1>
          <button onClick={() => dispatch(toggleThemeAction())}>
            Переключить на {theme === 'light' ? 'темную' : 'светлую'} тему
          </button>
        </div>
      );
}