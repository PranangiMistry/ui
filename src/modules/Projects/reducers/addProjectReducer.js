import { ADD_PROJECT_SUCCESS } from '../../../constants';

export default function (state = null, action) {
    switch (action.type) {
        case ADD_PROJECT_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}