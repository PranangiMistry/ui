import {ADD_NEW_USER_SUCCESS,ADD_NEW_USER_ERROR} from '../../../constants';
export default function(state=[], action){
    switch(action.type){
        case ADD_NEW_USER_SUCCESS:
           return action.payload;
        case ADD_NEW_USER_ERROR:
           return action.payload;
        default:
            return state;
    }
}