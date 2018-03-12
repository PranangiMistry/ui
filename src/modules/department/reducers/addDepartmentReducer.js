import { ADD_DEPARTMENT } from '../../../constants';

export default function (state = null, action) {
    switch (action.type) {
        case ADD_DEPARTMENT:
            return action.payload;
        default:
            return state;
    }
}