import { useState } from "react";

function SignupForm(params) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        password: ""
    })

    const handleChange = (event) => {
        const changedField = event.target.name;
        const newValue = event.target.value;
        setFormData((currData) => {
            currData[changedField] = newValue;
            return {...currData}
        })
    }

    const handleSubmit = () => {
        console.log(formData);
    }

    return (
        <div>
            <label htmlFor="firstname">Enter first name </label>
            <input 
            type="text" 
            id="firstname" 
            value={formData.firstName} 
            name="firstName"
            onChange={handleChange}
            />
            <label htmlFor="lastname">Enter last name </label>
            <input 
            type="text" 
            id="lastname" 
            value={formData.lastName}
            name="lastName" 
            onChange={handleChange}
            />
            <label htmlFor="password">Enter password </label>
            <input 
            type="text" 
            id="password" 
            value={formData.password}
            name="password" 
            onChange={handleChange}
            />
            <button type="submit" onClick={handleSubmit}>submit</button>
        </div>
    );
}

export default SignupForm;