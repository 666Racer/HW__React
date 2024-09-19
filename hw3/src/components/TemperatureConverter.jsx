/*Задание 1: Температурный конвертер с Material UI

Цель: Создать компонент TemperatureConverter, используя компоненты TextField и Button из Material UI для ввода и отображения температур в градусах Цельсия и Фаренгейта.

Компоненты:
Используйте TextField для ввода значения температуры.
Добавьте лейблы к каждому TextField, указывая единицы измерения (Цельсия и Фаренгейта).

Логика:
При вводе значения в одно поле, автоматически конвертируйте его и отобразите в другом.
Реализуйте конвертацию температур в обоих направлениях*/

//Ф = Ц * 1,8 + 32
//Ц = (Ф - 32) / 1,8

import React, { useState } from "react";
import TextField from '@mui/material/TextField';

function TemperatureConverter() {
    
    const [valueCels, setValueCels] = useState('');
    const [valueFahr, setValueFahr] = useState('');
    const isValidNumber = (value) => /^-?\d*\.?\d*$/.test(value);


    const handleValueCelsChange = (event) => {
        const value = event.target.value;
        setValueCels(value);
        if (isNaN(valueCels)) return;
        else if (value === '') {
          setValueFahr('');
        } else if (isValidNumber) {
          const valueFahr = parseFloat(value) * 1.8 + 32;
          setValueFahr(valueFahr.toFixed(1));
        }
    };

    const handleValueFahrChange = (event) => {
        const value = event.target.value;
        setValueFahr(value);
        if (isNaN(valueFahr)) return;
        else if (value === '') {
          setValueCels('');
        } else if (isValidNumber) { 
          const valueCels = (parseFloat(value) - 32) / 1.8;
          setValueCels(valueCels.toFixed(1));
        }
    };

    return ( 
        <div>
            <p></p>
            <h2>Конвертер температуры</h2>
            <TextField fullWidth
            type="number"
            variant="outlined"
            label="Введите температуру в °C"
            onChange={handleValueCelsChange}
            value={valueCels}
            />
        <p></p>
            <TextField fullWidth
            type="number"
            variant="outlined"
            label="Введите температуру в °F"
            onChange={handleValueFahrChange}
            value={valueFahr}
            />
        </div>
    );
}

export default TemperatureConverter;