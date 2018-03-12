import { GET_TIMESHEET } from '../../../constants';
const initialState=[{startDate:'',endDate:''}];

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TIMESHEET:
            return action.payload;
        default:
            return state;
    }
}