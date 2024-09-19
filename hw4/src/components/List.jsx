export function List ({ items, renderItem }) {
    return (
        <ul>
            {items.map((item, i) => (
                <li key={i}>{renderItem(item, i)}</li> //здесь на практике прописываются стили
            ))}
        </ul>
    );
}
