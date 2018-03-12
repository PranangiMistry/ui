import { ADD_HOLIDAY } from '../../../constants';

export default function (state = null, action) {
    switch (action.type) {
        case ADD_HOLIDAY:
            return action.payload;
        default:
            return state;
    }
}