import {GET_EDIT_SUPERVISOR_SUBSTITUTE,CHANGE_SUPERVISOR,CHANGE_USER,CHANGE_START_DATE,CHANGE_END_DATE,CHANGE_SEND_EMAIL,UPDATE_EDIT_SUPERVISOR_SUBSTITUTE,CHANGE_NAME_SUPERVISOR, CHANGE_NAME_USER } from '../../../constants';
const initialState=[{
    supervisorName:'',
        sendEmail:true,
        endDate:'',
        supervisorSubstituteId:'', 
        supervisorId:'',
        userName:'',
        userId:'',
        startDate:''
}];

export default function(state=initialState, action)
{
    switch(action.type){
        case GET_EDIT_SUPERVISOR_SUBSTITUTE:
            return action.payload;
        case CHANGE_SUPERVISOR:
            return [{...state[0], supervisorId: action.payload}];

            // [{ ...state[0], vendorCompanyName: action.payload }]
        case CHANGE_USER:
            return [{...state[0], userId: action.payload }];
        case CHANGE_START_DATE:
            return [{...state[0], startDate: action.payload }];
        case CHANGE_END_DATE:
            return [{...state[0], endDate: action.payload }];
        case CHANGE_SEND_EMAIL:
            return [{...state[0], sendEmail:!state[0].sendEmail }];
            
        case UPDATE_EDIT_SUPERVISOR_SUBSTITUTE:
            return state;
        case CHANGE_NAME_SUPERVISOR:
                return [{...state[0], supervisorName: action.payload }];
        case CHANGE_NAME_USER:
                return [{...state[0], userName: action.payload }];
        default:
            return state;
    }
}