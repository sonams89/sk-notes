import React, {Component} from 'react';
import {connect} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
});

const ViewNote = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <h1 className="note_heading">View Note</h1>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {props.note.title}
                    </Typography>
                    <Typography color="textSecondary" className={classes.pos}>
                        {props.note.message}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="primary" size="small" onClick={()=>props.dispatch({type: 'CLOSE_VIEW'})}>Close</Button>
                    <Button color="primary" size="small" onClick={()=>props.dispatch({type: 'EDIT_NOTE', id: props.note.id})}>EDIT</Button>
                </CardActions>
            </Card>
        </React.Fragment>
    )
}
function mapDispatchToProps(dispatch) {
    return {
      dispatch,
    };
}
export default connect(mapDispatchToProps)(ViewNote);