import React, {Component, useState} from 'react';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const EditNote = (props) => {
    const [newTitle, setNewTitle] = useState(props.note.title);
    const [newMessage, setNewMessage] = useState(props.note.message);
    const handleUpdate = (e) => {
        const data = {
            newTitle,
            newMessage
        };
        props.dispatch({type: 'UPDATE_NOTE', id: props.note.id, data: data});
    };
    return (
        <div key={props.note.id} className="note">
            <h1 className="note_heading">Edit Note</h1>
            <form className="form">
                <FormControl fullWidth>
                    <TextField id="standard-basic"
                    label="Title"
                    defaultValue={newTitle}
                    placeholder="Enter Note Title"
                    onChange={(e) => setNewTitle(e.target.value.trim())}
                    required/>
                </FormControl>
                <br/>
                <br/>
                <FormControl fullWidth>
                    <TextField
                        id="outlined-multiline-static"
                        label="Note"
                        multiline
                        rows={10}
                        required
                        placeholder="Note"
                        variant="outlined"
                        defaultValue={newMessage} placeholder="Enter Note"
                        onChange={(e) => setNewMessage(e.target.value.trim())}
                    />
                </FormControl>
                <br/>
                <br/>
                <Button disabled={newMessage.length == 0 || newTitle.length == 0} variant="contained" color="primary" onClick={handleUpdate}>
                    Update Note
                </Button>
            </form>
        </div>
    );
}
export default connect()(EditNote);