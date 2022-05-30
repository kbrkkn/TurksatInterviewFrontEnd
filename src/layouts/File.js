import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default function File() {

    const [file, setFile] = useState([])
    const [password, setPassword] = useState("")

    const handleFile = (value) => {
        setFile(value[0])
    }

    const handlePassword = (value) => {
        setPassword(value)
    }

    const sendRequest = (path) => {
        const data = new FormData();
        data.append("file", file);
        data.append("password", password);

        fetch("http://localhost:8080/files/" + path, {

            method: "POST",
            headers: {
                "Authorization": localStorage.getItem("tokenKey")
            },
            body: data,
        })
            .then((res) => res.json())
            .catch((err) => console.log(err.responseText))
    }

    const handleUploadFile = () => {
        sendRequest("upload");
        setFile([])
        setPassword("")
    }

    return (
        <div>
            <Form>
                <Form.Field>
                    <input onChange={(i) => handleFile(i.target.files)} placeholder='File' type='file' />
                </Form.Field>
                <Form.Input onChange={(i) => handlePassword(i.target.value)} value={password} label='Şifre' type='password' />


                <Button onClick={() => handleUploadFile()} type='submit' as={NavLink} to="/files" >Submit</Button>
            </Form>


        </div>
    )
}
