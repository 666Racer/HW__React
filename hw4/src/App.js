import { Box } from './components/Box';
import { List } from './components/List';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ListPage } from './components/ListPage';
import { DetailPage } from './components/DetailPage';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import s from "./App.module.css";

const arr = ["пункт 1", "пункт 2", "пункт 3"];
const goods = [
  {
    id: 1,
    title: "Xiaomi",
    price: "30000",
  },
  {
    id: 2,
    title: "Samsung",
    price: "50000",
  },
  {
    id: 3,
    title: "iPhone",
    price: "80000",
  },
];

const App = () => {
  const renderItem = (item, i) => {
    const style = { borderBottom: `1px solid ${i % 2 ? "green" : "red"}` };
    return <article style={style}>{item}</article>;
  };

  const routes = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
  ];

  const styleActiveLink = ({ isActive }) => {
    return isActive ? `${s.link} ${s.active}` : s.link;
  };
  return (
    <BrowserRouter>
      <nav classNameName={s.nav}>
        <NavLink classNameName={styleActiveLink} to="/">
          Главная
        </NavLink>
        <NavLink classNameName={styleActiveLink} to="/about">
          О нас
        </NavLink>
        <NavLink classNameName={styleActiveLink} to="/text">
          Текст
        </NavLink>
        <NavLink classNameName={styleActiveLink} to="/arr">
          Пункты
        </NavLink>
        <NavLink classNameName={styleActiveLink} to="/goods">
          Товары
        </NavLink>
      </nav>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/text"
          element={
            <Box customStyle={s.box}>
              <p classNameName={s.text}>Текст внутри Box</p>
            </Box>
          }
        />
        <Route
          path="/arr"
          element={
            <Box>
              <List items={arr} renderItem={renderItem} />
            </Box>
          }
        />
        <Route
          path='/page/:pageNumber'
          element={<ListPage products={goods}/>}/>
        <Route
          path='/product/:productId'
          element={<DetailPage products={goods}/>}/>
        <Route
          path="/goods"
          element={<ListPage products={goods}/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
