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
        setComments(comments.filter(comment => comment.id != id));
    }

    return(
        <div>
            <ul class="comment__title">Комментарии</ul>
            {comments.length > 0 ?
             comments.map ((comment) =>
                <div class="comment__box">
                    <li key={comment.id} class="comment__text">{comment.text}
                    <p></p>
                    <button onClick={() => delFromList(comment.id)} class="comment__delButton">Удалить комментарий</button>
                    </li>
                </div>) :
                <p>Комментариев нет</p>
            }
        </div>
    );
}

export default CommentsList;