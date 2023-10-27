import { useState } from "react";
import { v4 as uuid } from "uuid";
import ShoppingListForm from "./ShoppingListForm";

function ShoppingList() {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems((currItems) => {
            return [...currItems, {...item, id: uuid()}];
        });
    }

    return (
        <div>
            <ShoppingListForm addItem={addItem}/>
            <h1>Shopping List</h1>
            <ul>
                {items.map((i) => <li key={i.id} >{i.product} - {i.quantity}</li> )}
            </ul>
        </div>
    );
}

export default ShoppingList;