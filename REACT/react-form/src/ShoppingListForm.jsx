import { useState } from "react";

function ShoppingListForm({addItem}) {
    const [formData, setFormData] = useState({
        product: "",
        quantity: ""
    });

    const handleChange = (event) => {
        setFormData((currData) => {
            return {
                ...currData,
                [event.target.name] : event.target.value,
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submitted");
        addItem(formData);
        setFormData({product: "", quantity: 0})
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="prduct">Product name</label>
            <input 
            type="text"
            name="product"
            placeholder="pruduct name"
            id="product"
            onChange={handleChange}
            value={formData.product}
            />
            <label htmlFor="quantity">Quantity</label>
            <input 
            type="number"
            name="quantity"
            placeholder="1"
            id="quantity"
            onChange={handleChange}
            value={formData.quantity}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default ShoppingListForm;