import { SUPERVISOR_LIST_DROPDOWN } from '../../../constants';

export default function (state={}, action) {
    switch (action.type) {
        case SUPERVISOR_LIST_DROPDOWN:
            return action.payload;
        default:
            return state;
    }
}