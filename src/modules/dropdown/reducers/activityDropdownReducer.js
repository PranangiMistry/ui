import { ACTIVITY_DROPDOWN } from '../../../constants';

export default function (state = null, action) {
    switch (action.type) {
        case ACTIVITY_DROPDOWN:
            return action.payload;
        default:
            return state;
    }
}