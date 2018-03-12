import { GET_PROJECT_STAFF_DISPLAY ,DELETE_PROJ_STAFF_SUCCESS} from '../../../constants';
const initialState = [{ projectId: '', projectName: '', userName: '',deliverables:[""], supervisor1Name: '', supervisor2Name: '', supervisor3Name: '', tsType: '', tsStartDate: '' ,tsEndDate:''}];

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PROJECT_STAFF_DISPLAY:
            return action.payload;
        case DELETE_PROJ_STAFF_SUCCESS:
            return state;
        default:
            return state;
    }
}