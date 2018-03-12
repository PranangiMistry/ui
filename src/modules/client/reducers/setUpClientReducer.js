import {ADD_NEW_CLIENT_ERROR,ADD_NEW_CLIENT_SUCCESS} from '../../../constants';
export default function(state={}, action){
    switch(action.type){
        case ADD_NEW_CLIENT_SUCCESS:
           return action.payload;
        case ADD_NEW_CLIENT_ERROR:
           return action.payload;
        default:
            return state;
    }
}