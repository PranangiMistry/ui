import { SUPERVISOR_DROPDOWN, SELECT_SUPERVISOR_L1, CLEAR_SUPERVISOR, SELECT_SUPERVISOR_L2, SELECT_SUPERVISOR_L3 } from '../../../constants';
const initialState = {
    l1: '',
    l2: '',
    l3: '',
    supervisorList: []
}
export default function (state = initialState, action) {
    switch (action.type) {
        case SUPERVISOR_DROPDOWN:
            return { ...state, supervisorList: action.payload };
        case SELECT_SUPERVISOR_L1:
            return { ...state, l1: action.payload };
        case SELECT_SUPERVISOR_L2:
            return { ...state, l2: action.payload };
        case SELECT_SUPERVISOR_L3:
            return { ...state, l3: action.payload };
        case CLEAR_SUPERVISOR:
            return { ...state, l1:'',l2:'',l3:'' };
        default:
            return state;
    }
}