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
import { useParams } from "react-router-dom";
import Product from "./Products";
import Pagination from "./Pagination";

export function ListPage({ products }) {
    const { pageNumber } = useParams();
    const currentPage = pageNumber ? parseInt(pageNumber, 10) : 1;
    const produtsPerPage = 2;
    const startIndex = (currentPage - 1) * produtsPerPage;
    const currentProducts = products.slice(startIndex, startIndex + produtsPerPage);
    
    return (
        <div>
            {currentProducts.map((product, index) => (
                <Product key={index} product={product} />
            ))}
            <Pagination totalProducts={products.length} productsPerPage={produtsPerPage}
                currentPage={currentPage} />
                
        </div>
    );
}