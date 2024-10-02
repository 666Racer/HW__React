import { useState } from "react";
import { useDispatch } from "react-redux";
import addProduct from '../redux/slices/productSlice'

const AddProduct = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [available, setAvailable] = useState(true); //true - т.к. это чекбокс

    const dispatch = useDispatch();

    const handlerSubmit = (e) => {
        e.preventDefault();
        dispatch(addProduct({name, description, price: parseFloat(price), available})); //попадает в payload
        setName('');
        setDescription('');
        setPrice('');
        setAvailable (true); //по умолчанию доступен - чекбокс с галочкой
    }

    return( //3 инпута (название, описание, цена) и чекбокс (доступность)
        <form onSubmit={handlerSubmit}>
            <input //название
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Название продукта"
                required
            />
            <input //описание
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                type="text"
                placeholder="Описание продукта"
                required
            />
            <input //цена
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                type="number"
                placeholder="Цена продукта"
                required
            />
            <label> 
                Available:
                <input //чекбокс доступности
                    onChange={(e) => setAvailable(e.target.checked)}
                    checked={available}
                    type="checkbox"
                />
            </label>
            <button type="submit">Добавить продукт</button>
        </form>
    )
}

export default AddProduct;