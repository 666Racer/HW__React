/*Задание 4 (тайминг 25 минут)
● Создайте маленькое приложение со страницей списка
(ListPage) и страницей деталей (DetailPage).
● На ListPage отобразите список элементов (например, статей или
продуктов), где каждый элемент является ссылкой на
DetailPage, содержащую детальную информацию об элементе.
Используйте react-router-dom для настройки маршрутизации.
● На DetailPage используйте useParams для извлечения
параметра из URL (например, ID элемента) и отобразите
детальную информацию об элементе.*/

import React from 'react';
import { useParams } from 'react-router-dom';
import s from ".././App.module.css";

export function DetailPage({ products }) {
    const { productId } = useParams();
    const product = products.find(product => product.id === parseInt(productId, 10));


    return ( 
        <>
            <h2 className={s.heading_2}>{product.title}</h2>
            <p className={s.text}>{product.price}</p>
        </>
    );
}
