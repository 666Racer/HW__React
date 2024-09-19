/*Задание 3 (тайминг 30 минут)
Создать приложение с двумя страницами: "Главная страница" и "О нас".
На каждой странице должна быть навигационная ссылка для перехода
на другую страницу.
Шаги выполнения:
1. Установка react-router-dom:
a. Если еще не установлен, добавьте react-router-dom в ваш
проект: npm install react-router-dom.
2. Создание компонентов:
a. Создайте два компонента: HomePage.jsx и AboutPage.jsx.
b. В каждом компоненте добавьте простой текст, например,
<h1>Главная страница</h1> для HomePage и <h1>О нас</h1>
для AboutPage.
1. Настройка роутинга:
a. В корневом компоненте (App.jsx), импортируйте все
необходимые компоненты
b. Для навигации между страницами, добавьте в верхнюю
часть каждого компонента (HomePage и AboutPage)
навигационные ссылки (<Link to="/">Главная</Link> и <Link
to="/about">О нас</Link>).*/

import { NavLink } from "react-router-dom";
import s from "../App.module.css"

export function HomePage() {
    return (
        <div>
            <NavLink to="/about">О нас</NavLink>
            <h1 className={s.heading_1}>Главная страница</h1>
        </div>
    );
}
