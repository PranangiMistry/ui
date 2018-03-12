import { GET_TIMESHEET_PROJECT_DROPDOWN } from '../../../constants';

export default function (state = null, action) {
    switch (action.type) {
        case GET_TIMESHEET_PROJECT_DROPDOWN:
            return action.payload;
        default:
            return state;
    }
}