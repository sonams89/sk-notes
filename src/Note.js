import React, {Component} from 'react';
import {connect} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    listItemText: {
        height: 48,
        marginRight: 72,
        overflow: 'hidden',
    }
  }));
const Note = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <ListItemText className={classes.listItemText} onClick={()=>props.dispatch({type: 'OPEN_VIEW_NOTE', id: props.note.id})}
                primary={props.note.title}
                secondary={props.note.message}
            />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="edit" onClick={() => props.dispatch({type: 'EDIT_NOTE', id: props.note.id})}>
                    <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => props.dispatch({type: 'DELETE_NOTE', id: props.note.id})}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </React.Fragment>
    )
}
function mapDispatchToProps(dispatch) {
    return {
      dispatch,
    };
  }
export default connect(mapDispatchToProps)(Note);