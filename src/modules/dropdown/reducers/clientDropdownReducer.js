import { DEPARTMENT_CLIENT_DROPDOWN } from '../../../constants';

export default function (state = null, action) {
    switch (action.type) {
        case DEPARTMENT_CLIENT_DROPDOWN:
            return action.payload;
        default:
            return state;
    }
}