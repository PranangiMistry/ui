import { GET_EDIT_PROJ_STAFF, UPDATE_PROJ_STAFF_SUCCESS, TS_START_DATE, TS_END_DATE, WEEK_OFF1, WEEK_OFF2, TS_SPLIT_DATE, WEEK_START_DAY, TS_TYPE, SUPERVISOR_1, SUPERVISOR_2, SUPERVISOR_3 } from '../../../constants';
const initialState = [{
    projectName: '', deliverables: [], projStaffId: '', projectIdFk: '',
    supervisor1: '', supervisor2: '', supervisor3: '', tsEndDate: '', tsSplitDate: '', tsStartDate: '',
    tsType: '', userIdFk: '', userName: '', weekOff1: '', weekOff2: '', weekStartDay: ''
}];

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_EDIT_PROJ_STAFF:
            return action.payload;
        case UPDATE_PROJ_STAFF_SUCCESS:
            return state;
        case TS_START_DATE:
            return [{ ...state[0], tsStartDate: action.payload }];
        case TS_END_DATE:
            return [{ ...state[0], tsEndDate: action.payload }];
        case WEEK_OFF1:
            return [{ ...state[0], weekOff1: action.payload }];
        case WEEK_OFF2:
            return [{ ...state[0], weekOff2: action.payload }];
        case TS_SPLIT_DATE:
            return [{ ...state[0], tsSplitDate: action.payload }];
        case WEEK_START_DAY:
            return [{ ...state[0], weekStartDay: action.payload }];
        case TS_TYPE:
            return [{ ...state[0], tsType: action.payload }];
        case SUPERVISOR_1:
            return [{ ...state[0], supervisor1: action.payload }];
        case SUPERVISOR_2:
            return [{ ...state[0], supervisor2: action.payload }];
        case SUPERVISOR_3:
            return [{ ...state[0], supervisor3: action.payload }];
        default:
            return state;
    }
}