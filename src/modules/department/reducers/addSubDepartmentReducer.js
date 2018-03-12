import { ADD_SUBDEPARTMENT } from '../../../constants';

export default function (state = null, action) {
    switch (action.type) {
        case ADD_SUBDEPARTMENT:
            return action.payload;
        default:
            return state;
    }
}