import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: JSON.parse(localStorage.getItem("product-catalog") || "[]"),
  };

const saveToLS = (products) => { //коллбэк=функция для сохранения в LocalStorage
    localStorage.setItem("product-catalog", JSON.stringify(products));
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers:{
        addProduct: (state, action) => {
            const newProduct = { ...action.payload, id: crypto.randomUUID() }; //в action.payload все данные по продукту
            const products = [...state.products, newProduct]; //добавление нового продукта к уже имеющимся; использование products нужно для сохранения в LocalStorage - иначе бы использовали state.products
            saveToLS(products); //сохранение в LocalStorage
            state.products = products; //перезаписываем products
        },
        delProduct: (state, action) => {
            const products = state.products.filter(product => { //использование products нужно для сохранения в LocalStorage - иначе бы использовали state.products
                return product.id !== action.payload.id
            }
            );
            saveToLS(products); //сохранение в LocalStorage
            state.products = products; //перезаписываем products
        },
        changeProduct: (state, action) => {
            const index = state.products.findIndex(
                (product) => {
                    return product.id === action.payload.id
                }
            );
            if (index !== -1) {
                state.products[index] = action.payload;
                saveToLS(state.products);
            }
        },
        toggleAvailability: (state, action) => {
            const product = state.products.find(
                (product) => {
                    return product.id === action.payload.id
                }
            );
            if (product) {
                product.available = !product.available;
                saveToLS(state.products);
            }
        }
    }
})
export const { addProduct, delProduct, changeProduct, toggleAvailability } = productSlice.actions;
export default productSlice.reducer;