import {ADD_SUBSTITUTION} from '../../../constants';
export default function(state={}, action){
    switch(action.type){
        case ADD_SUBSTITUTION:
           return action.payload;
        default:
            return state;
    }
}