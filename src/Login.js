import React, {Component, useState, useEffect} from 'react';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
const NewNote = (props) => {
    const [error, setError] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        const username = sessionStorage.getItem('username');
        if(username === 'Sonam') {
            props.dispatch({
                type: 'LOGIN_SUCCESS',
                username
            });
        }
    }, [])
    const handleSubmit = (e) => {
        if(username === 'Sonam' && password === 'Katiyar') {
            sessionStorage.setItem('username', username);
            props.dispatch({
                type: 'LOGIN_SUCCESS',
                username
            });
        } else {
            setError('Incorrect Username/Password!');
        }
    };
    return (
        <div style={{position:'absolute', top: '100px', margin: '0px auto', left: 0, right: 0, width: 300}}>
            <h1>Login</h1>
            <form className="form">
                <FormControl fullWidth>
                    <TextField id="standard-basic"
                    label="Username"
                    onChange={(e) => setUsername(e.target.value.trim())}
                    required/>
                </FormControl>
                <br/><br/>
                <FormControl fullWidth>
                    <TextField id="standard-basic"
                    label="Password"
                    onChange={(e) => setPassword(e.target.value.trim())}
                    required/>
                </FormControl>
                <br/><br/>
                <Button disabled={username.length == 0 || password.length == 0} variant="contained" color="primary" onClick={handleSubmit}>
                    Login
                </Button>
                {error && <span style={{color:'red', fontSize: '12px', marginLeft: 20}}>{error}</span>}
            </form>
        </div>
    );
}
export default connect()(NewNote);