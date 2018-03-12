import {GET_ALL_CLIENT,DELETE_CLIENT_PERMANENT,ACTIVE_DEACTIVE_CLIENT} from '../../../constants'
const initialState=[{clientId:'',clientName:'',clientCode:'',streetName1:'',streetName2:'',isActive:'',city:'',state:'',country:'',zipCode:''}];


export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_CLIENT:
            return action.payload;
        case DELETE_CLIENT_PERMANENT:
            return state;
        case ACTIVE_DEACTIVE_CLIENT:
            return action.payload;
        default:
            return state;
    }
}