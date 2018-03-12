import { ADD_PROJECT_DELIVERABLE } from '../../../constants';

export default function (state = null, action) {
    switch (action.type) {
        case ADD_PROJECT_DELIVERABLE:
            return action.payload;
        default:
            return state;
    }
}