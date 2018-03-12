import { GET_ALL_DEPARTMENTS_SUCCESS,ACTIVE_DEACTIVE_DEPARTMENT } from '../../../constants';
const initialState = [{ departmentName: '',clientName: '',dIsActive: ''}]

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_DEPARTMENTS_SUCCESS:
            return action.payload;
            case ACTIVE_DEACTIVE_DEPARTMENT:
            return action.payload;
        default:
            return state;
    }
}