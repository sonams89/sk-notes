import React, {Component} from 'react';
import {connect, useDispatch} from 'react-redux';
import Note from './Note';
import EditComponent from './EditNote';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%'
    },
}));

const NoteList = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <div style={{height: '100%'}}>
            {/* <h1 className="note_heading">Notes</h1>
            <hr /> */}
            {/* {note.editing ? <EditComponent note={note} key={note.id}/> : */}
            {props.notes.length > 0 ? <List className={classes.root}>
                {props.notes.map((note, idx) => (
                    <>
                    <ListItem key={note.id + 'item'} button>
                        <Note key={note.id  + 'note'} note={note}/>
                    </ListItem>
                    {idx !== props.notes.length -1 ? <Divider key={note.id  + 'divider'} variant="middle" component="li" /> : null}
                    </>
                ))}
            </List> : <h4 style={{textAlign: 'center', color: 'red', marginTop: '150px', display: 'inline-block', width: '100%'}}>No Note exist!<br />Please create a Note.</h4>}
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
};


export default connect(mapStateToProps)(NoteList);