import { GET_EDIT_PROJECT,UPDATE_PROJECT_SUCCESS,P_IS_ACTIVE,P_PROJECT_TYPE ,P_START_DATE,P_END_DATE,P_CLIENT_NAME,P_DEPT_NAME,P_SUB_DEPT_NAME,P_PROJECT_NAME } from '../../../constants';

const initialState = [{
    projectName: '', projectStartDate: '', projectEndDate: '', isActive: '', departmentName: ''
    , subdepartmentName: '', projectType: '', clientName: '',subdepartmentIdFk:'',departmentIdFk:'',clientIdFk:''
}];

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_EDIT_PROJECT:
            return action.payload;
        case UPDATE_PROJECT_SUCCESS:
            return state;
        case P_IS_ACTIVE:
            return [{...state[0],isActive:!state[0].isActive}];
        case P_PROJECT_TYPE:
            return [{...state[0],projectType:action.payload}];
        case P_START_DATE:
            return [{...state[0],projectStartDate:action.payload}];
        case P_END_DATE:
            return [{...state[0],projectEndDate:action.payload}];
        case P_CLIENT_NAME:
            return [{...state[0],clientName:action.payload.clientName,clientIdFk:action.payload.clientId}];
        case P_DEPT_NAME:
            return [{...state[0],departmentName:action.payload.departmentName,departmentIdFk:action.payload.departmentId}];
        case P_SUB_DEPT_NAME:
            return [{...state[0],subdepartmentName:action.payload.subdepartmentName,subdepartmentIdFk:action.payload.subdepartmentId}];
        case P_PROJECT_NAME:
            return [{...state[0],projectName:action.payload}];
        default:
            return state;
    }
}