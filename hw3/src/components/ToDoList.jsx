/*Задание 2: Список дел с Material UI

Цель: Разработать компонент TodoList для управления задачами: добавление, отображение, и удаление задач.

Компоненты:
Используйте TextField для ввода новой задачи.
Добавьте Button для добавления задачи в список.
Для каждой задачи в списке используйте Card или ListItem из Material UI. Внутри каждого элемента списка разместите текст задачи и IconButton с иконкой удаления (например, DeleteIcon).

Логика:
При нажатии на кнопку добавления, новая задача должна добавляться в список.
Рядом с каждой задачей должна быть кнопка для её удаления.*/

import React, { useState } from "react";
import { Button, List, ListItem, ListItemText, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export function ToDoList(){
    const [value, setValue] = useState('');
    const [tasks, setTasks] = useState([]);

    const upText = (event) => {             
        setValue(event.target.value);
    }
    
    const addToList = () => {
        // const newTasks = [...tasks, {value, id: crypto.randomUUID()}]; 
        if (value.trim() === ''){
            return;
        }        
        // setTasks(newTasks);
        setTasks([...tasks, value]);
        setValue('');       
    }

    const delFromList = (id) => {
        setTasks(tasks.filter((_, index) => index !== id));
    }

    return (
        <div>
        <p></p>
        <h2>Управление задачами</h2>
        <TextField fullWidth
            variant="outlined"
            label="Введите новую задачу"
            onChange={upText}
            value={value}
        />
        <Button variant="contained" onClick={addToList}>Добавить в список</Button>
        <h2>Список дел</h2>
        <List sx={{ mt: 4 }}>
            {tasks.map((value, id) => (
                <ListItem
                key={id}
                secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={() => delFromList(id)}>
                    <DeleteIcon />
                    </IconButton>
              }
            >
            <ListItemText primary={value} />
            </ListItem>
          ))}
        </List>
      </div>
        /*<div>
            <TextField fullWidth
                variant="outlined"
                label="Введите новую задачу"
                onChange={upText}
                value={value}
            />
            <Button variant="contained" onClick={addToList}>Добавить в список</Button>
            <h2>Список дел</h2>
            <List sx={{ mt: 4 }}>
                {messages.map ((value, id) => (
                    <div className="comment__box">
                    <ListItem
                        key={id}
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete" onClick={() => delFromList(id)}>
                                <DeleteIcon />
                            </IconButton>
                        }
                    >
                    <ListItemText primary={value} />
                    </ListItem>
                }
            </List>
        </div>*/
    );
}

export default ToDoList;