import { ADD_PROJECT_ACTIVITY } from '../../../constants';

export default function (state = null, action) {
    switch (action.type) {
        case ADD_PROJECT_ACTIVITY:
            return action.payload;
        default:
            return state;
    }
}