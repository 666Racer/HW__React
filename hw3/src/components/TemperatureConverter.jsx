/*Задание 1: Температурный конвертер с Material UI

Цель: Создать компонент TemperatureConverter, используя компоненты TextField и Button из Material UI для ввода и отображения температур в градусах Цельсия и Фаренгейта.

Компоненты:
Используйте TextField для ввода значения температуры.
Добавьте лейблы к каждому TextField, указывая единицы измерения (Цельсия и Фаренгейта).

Логика:
При вводе значения в одно поле, автоматически конвертируйте его и отобразите в другом.
Реализуйте конвертацию температур в обоих направлениях*/

//А зачем нужен Button, если значения конвертируются автоматически (onChange)?

//Ф = Ц * 1,8 + 32
//Ц = (Ф - 32) / 1,8

import React, { useState } from "react";
import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';

function TemperatureConverter() {
    
    const [valueCels, setValueCels] = useState('');
    const [valueFahr, setValueFahr] = useState('');


    const handleValueCelsChange = (event) => {
        const value = event.target.value;
        setValueCels(value);
        if (value === '') {
          setValueFahr('');
        } else {
          const valueFahr = parseFloat(value) * 1.8 + 32;
          setValueFahr(valueFahr.toFixed(1));
        }
    };

    const handleValueFahrChange = (event) => {
        const value = event.target.value;
        setValueFahr(value);
        if (value === '') {
          setValueCels('');
        } else { 
          const valueCels = (parseFloat(value) - 32) / 1.8;
          setValueCels(valueCels.toFixed(1));
        }
    };

    return ( 
        <div>
            <p></p>
            <h2>Конвертер температуры</h2>
            <TextField fullWidth
            variant="outlined"
            label="Введите температуру в °C"
            onChange={handleValueCelsChange}
            value={valueCels}
            />
        <p></p>
            <TextField fullWidth
            variant="outlined"
            label="Введите температуру в °F"
            onChange={handleValueFahrChange}
            value={valueFahr}
            />
        </div>
    );
}

export default TemperatureConverter;