import { GET_ALL_PROJECTS_SUCCESS,DELETE_PROJECT_PERMANENT_SUCCESS } from '../../../constants';
const initialState = [{ projectId: '', projectName: '', projectType: '', projectStartDate: '', projectEndDate: '', departmentName: '', clientName: '', subdepartmentName: '' }];

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_PROJECTS_SUCCESS:
            return action.payload;
        case DELETE_PROJECT_PERMANENT_SUCCESS:
            return state;
        default:
            return state;
    }
}