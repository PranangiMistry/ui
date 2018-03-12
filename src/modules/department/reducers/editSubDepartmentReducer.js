import { GET_EDIT_SUBDEPARTMENT,UPDATE_SUBDEPARTMENT } from '../../../constants';
const initialState = [{ subdepartmentName: '',reportToName: '',reportToEmail: '',reportToCell: '',reportToPhone: ''}]

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_EDIT_SUBDEPARTMENT:
            return action.payload;
        case UPDATE_SUBDEPARTMENT:
            return action.payload;
        default:
            return state;
    }
}