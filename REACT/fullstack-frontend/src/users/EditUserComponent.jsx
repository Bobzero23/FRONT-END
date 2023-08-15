import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function EditUserComponent() {
    let navigate = useNavigate() //to be able to navigate to other pages

    const { id } = useParams() //to be able to work with id's coming from the user

    /**declaring the states*/
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    })

    //deconstructing the objects coming from the state
    const { name, username, email } = user

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        loadUser()
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/user${id}`, user)
        navigate("/") //declaring a navigation to home
    }

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`, user)
        setUser(result.data)
    }

    return (
        <div className='container'>
            <div className="row">
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center'>Edit User</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className='form-label'>Name</label>
                            <input
                                type="text"
                                className='form-control'
                                placeholder='Enter your name'
                                name='name'
                                value={name}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Username" className='form-label'>Username</label>
                            <input
                                type="text"
                                className='form-control'
                                placeholder='Enter your username'
                                name='username'
                                value={username}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email" className='form-label'>Email</label>
                            <input
                                type="email"
                                className='form-control'
                                placeholder='Enter your email'
                                name='email'
                                value={email}
                                onChange={(e) => onInputChange(e)}

                            />
                        </div>
                        <button type='submit' className='btn btn-outline-primary'>Submit</button>
                        <Link type='submit' className='btn btn-outline-danger mx-2' to={"/"}>Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
