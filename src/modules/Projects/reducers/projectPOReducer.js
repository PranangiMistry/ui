import {ADD_PROJECT_PAY_ORDER} from '../../../constants';
export default function(state={}, action){
    switch(action.type){
        case ADD_PROJECT_PAY_ORDER:
           return action.payload;
        default:
            return state;
    }
}