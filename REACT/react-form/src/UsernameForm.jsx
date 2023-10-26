import { useState } from "react";

function UsernameForm() {
    const [username, setUsername] = useState("")
    const updateUsername = (event) => {
        setUsername(event.target.value)
    }

    return (
        <div>
            <label htmlFor="username">Enter a user name</label>
            <input 
            type="text"
             placeholder="username"
             value={username} 
             onChange={updateUsername} 
             id="username"
             />
            <button>submit</button>
        </div>
    );
}


export default UsernameForm;