import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default function Auth() {

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleUserName = (value) => {
        setUserName(value)
    }

    const handlePassword = (value) => {
        setPassword(value)
    }

    const sendRequest = (path) => {

        fetch("http://localhost:8080/auth/" + path, {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userName: username,
                password: password,

            }),
        })
            .then((res) => res.json())
            .then((result) => localStorage.setItem("tokenKey", result.message))
            .catch((err) => console.log(err.responseText))
    }

    const handleLogin = () => {
        sendRequest("login");
        setUserName("")
        setPassword("")
    }

    return (
        <div>
            <Form>
                <Form.Field>
                    <label>Kullanıcı Adı</label>
                    <input onChange={(i) => handleUserName(i.target.value)} value={username} placeholder='Kullanıcı Adı' />
                </Form.Field>
                <Form.Input onChange={(i) => handlePassword(i.target.value)} value={password} label='Şifre' type='password' />


                <Button onClick={() => handleLogin()} type='submit' as={NavLink} to="/files" >Submit</Button>
            </Form>


        </div>
    )
}
