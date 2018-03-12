import {GET_SUBSTITUTE_BY_ME,DELETE_SUBSTITUTE} from '../../../constants'
const initialState=[{ supervisorName:'',
sendEmail: 1,
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
        case GET_SUBSTITUTE_BY_ME:
            return action.payload;
        case DELETE_SUBSTITUTE:
            return state
        default:
            return state;
    }
}