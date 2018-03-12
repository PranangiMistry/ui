import { EMPLOYEE_DROPDOWN } from '../../../constants';

export default function (state = null, action) {
    switch (action.type) {
        case EMPLOYEE_DROPDOWN:
            return action.payload;
        default:
            return state;
    }
}