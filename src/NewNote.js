import React, {Component, useState} from 'react';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
const NewNote = (props) => {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = (e) => {
        const data = {
            id: Date.now(),
            title,
            message,
            editing: false
        };
        props.dispatch({
            type: 'ADD_NOTE',
            data
        });
    };
    return (
        <div className="note-container">
            <h1 className="note_heading">Create Note</h1>
            <form className="form">
                <FormControl fullWidth>
                    <TextField id="standard-basic"
                    label="Title"
                    onChange={(e) => setTitle(e.target.value.trim())}
                    required/>
                </FormControl>
                <br/><br/>
                <FormControl fullWidth>
                    <TextField
                        id="outlined-multiline-static"
                        label="Note"
                        multiline
                        rows={10}
                        required
                        placeholder="Note"
                        variant="outlined"
                        onChange={(e) => setMessage(e.target.value.trim())}
                    />
                </FormControl>
                <br/><br/>
                <Button disabled={message.length == 0 || title.length == 0} variant="contained" color="primary" onClick={handleSubmit}>
                    Add Note
                </Button>
            </form>
        </div>
    );
}
export default connect()(NewNote);