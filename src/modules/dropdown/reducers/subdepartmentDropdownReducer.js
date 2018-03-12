import { SUB_DEPARTMENT_DROPDOWN } from '../../../constants';

export default function (state = null, action) {
    switch (action.type) {
        case SUB_DEPARTMENT_DROPDOWN:
            return action.payload;
        default:
            return state;
    }
}