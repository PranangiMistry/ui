import { GET_EDIT_DEPARTMENT,UPDATE_DEPARTMENT } from '../../../constants';
const initialState = [{ departmentName: '',reportToName: '',reportToEmail: '',reportToCell: '',reportToPhone: ''}]

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_EDIT_DEPARTMENT:
            return action.payload;
        case UPDATE_DEPARTMENT:
            return action.payload;
        default:
            return state;
    }
}