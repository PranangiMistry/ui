import {RETRIVE_ALL_SUPPERVISOR_SUBSTITUTE,DELETE_SUBSTITUTE_BY_ADMIN} from '../../../constants'
const initialState=[{
    supervisorName:'',
    sendEmail:1,
    endDate:'',
    supLastName:'',
    uLastName:'',
    supervisorSubstituteId:'',
    uFirstName:'',
    supervisorId:'',
    supFirstName:'',
    userName:'',
    userId:'',
    startDate:''
}];


export default function (state = initialState, action) {
    switch (action.type) {
        case RETRIVE_ALL_SUPPERVISOR_SUBSTITUTE:
            return action.payload;
        case DELETE_SUBSTITUTE_BY_ADMIN:
            return state;
        default:
            return state;
    }
}