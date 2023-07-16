function ShoppingListItem({ item, quantity, completed }) {
    const styles = {
        color: completed ? "green" : "red",
        textDecoration: completed ? "line-through" : "none",
    };

    return (
        <li style={styles}>
            {item} - {quantity}
        </li>
    );
}

export default ShoppingListItem;

{/* <li
key={i.id}
style={{
    color: i.completed ? "green" : "red",
    textDecoration: i.completed ? "none" : "line-through"
}}>
{i.item} - {i.quantity}
</li> */
} 