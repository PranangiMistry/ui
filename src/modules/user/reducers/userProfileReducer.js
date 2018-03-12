import {
    UEMAIL, GET_PROFILE_SUCCESS, GET_PROFILE_ERROR, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_ERROR,
    UFIRSTNAME, ULASTNAME, UPHONE, UPHONE2, CITY, STATE, COUNTRY, STREETNAME1, STREETNAME2
} from '../../../constants';

const initialState = [{
    uEmail: '', uFirstName: '', uLastName: '', uPhone: '', uPhone2: '',
    city: '', state: '', country: '', streetName1: '', streetName2: '',isAdmin:false,isEmployee:false,isSupervisor:false,streetName2:'',isProjectManager:false}];

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PROFILE_SUCCESS:
            return action.payload;
        case GET_PROFILE_ERROR:
            return action.payload;
        case UPDATE_PROFILE_SUCCESS:
            return action.payload;
        case UPDATE_PROFILE_ERROR:
            return action.payload;
        case UEMAIL:
            return [{ ...state[0], uEmail: action.payload }]
        case UFIRSTNAME:
            return [{ ...state[0], uFirstName: action.payload }]
        case ULASTNAME:
            return [{ ...state[0], uLastName: action.payload }]
        case UPHONE:
            return [{ ...state[0], uPhone: action.payload }]
        case UPHONE2:
            return [{ ...state[0], uPhone2: action.payload }]
        case CITY:
            return [{ ...state[0], city: action.payload }]
        case STATE:
            return [{ ...state[0], state: action.payload }]
        case COUNTRY:
            return [{ ...state[0], country: action.payload }]
        case STREETNAME1:
            return [{ ...state[0], streetName1: action.payload }]
        case STREETNAME2:
            return [{ ...state[0], streetName2: action.payload }]
        default:
            return state;
    }
}