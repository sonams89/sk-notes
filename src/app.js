import React, {Component, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import {connect, useDispatch} from 'react-redux';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import NodeList from './NoteList';
import EditNote from './EditNote';
import NewNote from './NewNote';
import ViewNote from './ViewNote';
import Login from './Login';
import {ADD, EDIT, VIEW} from '../src/constant';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100%'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    padding: 20,
    height: 'calc(100% - 86px)',
    paddingBottom: 0
  },
  divider: {
    margin: '0 10px'
  },
  button: {
    float: 'right'
  }
}));

const App = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            SK-Notes
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper elevation={3} className={classes.paper}>
        {props.loginSuccess ? <Grid container className={classes.root} spacing={2}>
            <Grid item xs={5} sm={4} style={{height: '100%', overflow: 'auto', borderRight: '2px solid grey'}}>
              <NodeList></NodeList>
            </Grid>
            {/* <Divider className={classes.divider} orientation="vertical" flexItem /> */}
            <Grid item xs={7} sm={8} style={{paddingLeft: '30px'}}>
              {props.mode == null && <Button className={classes.button} variant="contained" color="primary" onClick={()=>dispatch({type: 'OPEN_ADD_NOTE'})}>Add Note</Button>}
              {props.mode === EDIT && <EditNote note={props.notes.find((note) => note.id === props.selectedNoteId)} key={props.selectedNoteId}/>}
              {props.mode === ADD && <NewNote></NewNote>}
              {props.mode === VIEW && <ViewNote note={props.notes.find((note) => note.id === props.selectedNoteId)} key={props.selectedNoteId}></ViewNote>}
            </Grid>
        </Grid>: <Login></Login>}
      </Paper>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
      notes: state.notes,
      mode: state.mode,
      selectedNoteId: state.selectedNoteId,
      loginSuccess: state.loginSuccess
  }
};
export default connect(mapStateToProps)(App);