import { DELETE_USER_PERMANENT_SUCCESS,GET_ALL_USERS_SUCCESS, GET_ALL_USERS_ERROR,DELETE_USER_SUCCESS,DELETE_USER_ERROR } from '../../../constants';
const initialState=[{uEmail:'',uFirstName:'',uLastName:'',uPhone:'',uPhone2:'',isActive:'',
city:'',state:'',country:'',streetName1:'',streetName2:'',isEmployee:'',isProjectmanager:'',isSupervisor:'',isAdmin:''}];


export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_USERS_SUCCESS:
            return action.payload;
        case GET_ALL_USERS_ERROR:
            return action.payload;
        case DELETE_USER_SUCCESS:
            return state;
        case DELETE_USER_ERROR:
            return action.payload;
        case DELETE_USER_PERMANENT_SUCCESS:
            return state;
        default:
            return state;
    }
}