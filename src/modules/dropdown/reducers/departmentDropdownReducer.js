import { SUBDEPARTMENT_DEPARTMENT_DROPDOWN } from '../../../constants';

export default function (state = null, action) {
    switch (action.type) {
        case SUBDEPARTMENT_DEPARTMENT_DROPDOWN:
            return action.payload;
        default:
            return state;
    }
}