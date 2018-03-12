import { ADD_PROJECT_STAFF } from '../../../constants';

export default function (state = null, action) {
    switch (action.type) {
        case ADD_PROJECT_STAFF:
            return action.payload;
        default:
            return state;
    }
}