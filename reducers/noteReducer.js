import {ADD, EDIT, VIEW} from '../src/constant';

export const initialState = {
    notes: [],
    selectedNoteId: null,
    mode: null,
    loginSuccess: false
};
const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS': 
            return {
                ...state,
                loginSuccess: true
            }
        case 'OPEN_ADD_NOTE':
            return {
                ...state,
                mode: ADD
            };
        case 'OPEN_VIEW_NOTE':
            return {
                ...state,
                mode: VIEW,
                selectedNoteId: action.id
            };
        case 'CLOSE_VIEW':
            return {
                ...state,
                mode: null
            };
        case 'ADD_NOTE':
            return {
                ...state,
                notes: [...state.notes, action.data],
                mode: null
            };
        case 'DELETE_NOTE':
            return {
                ...state,
                mode: null,
                notes: state.notes.filter((note) => note.id !== action.id)
            }
        case 'EDIT_NOTE':
            return {
                ...state,
                mode: EDIT,
                selectedNoteId: action.id
            }
        case 'UPDATE_NOTE':
            return {
                ...state,
                mode: null,
                selectedNoteId: null,
                notes: state.notes.map((note) => {
                    if (note.id === action.id) {
                        return {
                            ...note,
                            title: action.data.newTitle,
                            message: action.data.newMessage,
                            editing: !note.editing
                        }
                    } else {
                        return note;
                    }
                })
            };
        default:
            return state;
    }
};
export default noteReducer;