/*Создать компонент Message, отображающий переданный ему props текст.
Стилизовать компоненты через css (при желании можно использовать less или sass).
Дополнительное задание: Установить расширение React Devtools.*/

export function Message(props) {
    return(
        <div class="message">
        <h2 class="message__title">Сообщение из props:</h2>
        <p class="message__text">{props.text}</p>
        </div>
    )
}

export default Message;