import {ADD_NEW_VENDOR} from '../../../constants';
export default function(state={}, action){
    switch(action.type){
        case ADD_NEW_VENDOR:
           return action.payload;
        default:
            return state;
    }
}