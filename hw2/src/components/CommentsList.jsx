/*Создать компонент CommentsList, который отображает список комментариев.
Каждый комментарий должен иметь кнопку для его удаления.
При нажатии на кнопку комментарий должен удаляться из списка.*/

import React, { useState } from "react";

function CommentsList() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" },
        { id: 4, text: "Это четвертый комментарий" },
        { id: 5, text: "Это пятый комментарий" },
        ]);

    const delFromList = (id) => {
        setComments(comments.filter(comment => comment.id !== id));
    }

    return(
        <div>
            <h2 className="comment__title">Комментарии</h2>
            <ul>
            {comments.length > 0 ?
             comments.map ((comment) =>
                <li key={comment.id} className="comment__text">{comment.text}
                    <button onClick={() => delFromList(comment.id)} className="comment__delButton">Удалить комментарий</button>
                </li>) :
                <p>Комментариев нет</p>
            }
            </ul>
        </div>
    );
}

export default CommentsList;