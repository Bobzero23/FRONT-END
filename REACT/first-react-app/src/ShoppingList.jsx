import ShoppingListItem from "./ShoppingListItem";

export default function ShoppingList({ items }) {
    return (
        <ul>
            {items.map((i) => (
                <ShoppingListItem
                    key={i.id}
                    item={i.item}
                    quantity={i.quantity}
                    completed={i.completed}
                />
            ))}
        </ul>
    );
}

{/* <li
    key={i.id}
    style={{
        color: i.completed ? "green" : "red",
        textDecoration: i.completed ? "none" : "line-through"
    }}>
    {i.item} - {i.quantity}
</li> */}