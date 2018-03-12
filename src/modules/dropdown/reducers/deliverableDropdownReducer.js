import { DELIVERABLE_DROPDOWN } from '../../../constants';

export default function (state = null, action) {
    switch (action.type) {
        case DELIVERABLE_DROPDOWN:
            return action.payload;
        default:
            return state;
    }
}