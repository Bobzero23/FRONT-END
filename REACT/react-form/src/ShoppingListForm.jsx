import { useState } from "react";

function ShoppingListForm() {
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

    return (
        <form action="">
            <h1>Product is: {formData.product} and Quantity is: {formData.quantity}</h1>
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
        </form>
    );
}

export default ShoppingListForm;