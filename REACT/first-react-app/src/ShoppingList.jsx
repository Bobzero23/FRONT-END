export default function ShoppingList({ items }) {
    return (
        <ul>
            {items.map((i) => (
                <li
                    key={i.id}
                    style={{
                        color: i.completed ? "green" : "red",
                        textDecoration: i.completed ? "none" : "line-through"
                    }}>
                    {i.item} - {i.quantity}
                </li>
            ))}
        </ul>
    );
}