import { GET_ALL_SUBDEPARTMENTS_SUCCESS, ACTIVE_DEACTIVE_SUBDEPARTMENT } from '../../../constants';
const initialState = [{ subDepartmentName: '', clientName: '', dIsActive: '' }]

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_SUBDEPARTMENTS_SUCCESS:
            return action.payload;
        case ACTIVE_DEACTIVE_SUBDEPARTMENT:
            return action.payload;
        default:
            return state;
    }
}