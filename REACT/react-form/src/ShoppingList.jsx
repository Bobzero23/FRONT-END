import { useState } from "react";


function ShoppingList() {
    const [items, setItems] = useState([
        {id: 1, product: "Bananas", quantity: 2},
        {id: 2, product: "Eggs", quantity: 18},
]);

    return (
        <div>
            <h1>Shopping List</h1>
            <ul>
                {items.map((i) => <li key={i.id} >{i.product} - {i.quantity}</li> )}
            </ul>
        </div>
    );
}

export default ShoppingList;