import {EDIT_VENDOR_NAME,EDIT_PROJECT_MANAGER,IS_VENDOR,UEMAIL,EDIT_ADMIN,UPDATE_EDIT_USER_SUCCESS,EDIT_EMPLOYEE,EDIT_SUPERVISOR,GET_EDIT_USER_SUCCESS,UFIRSTNAME,ULASTNAME,UPHONE,UPHONE2,CITY,STATE,COUNTRY,STREETNAME1,STREETNAME2, VENDOR_COMPANY_NAME, VENDOR_COUNTRY, VENDOR_STREET_NAME1} from '../../../constants';

const initialState=[{uEmail:'',uFirstName:'',uLastName:'',uPhone:'',uPhone2:'',isVendor:false,vendorName:'',
city:'',state:'',country:'',streetName1:'',isAdmin:false,isEmployee:false,isSupervisor:false,streetName2:'',isProjectManager:false}];

export default function(state=initialState, action){
    switch(action.type){
        case GET_EDIT_USER_SUCCESS:
            return action.payload;
        case UPDATE_EDIT_USER_SUCCESS:
            return state;
        case EDIT_ADMIN:
            return [{ ...state[0],isAdmin:!state[0].isAdmin }]
        case EDIT_EMPLOYEE:
            return [{ ...state[0],isEmployee:!state[0].isEmployee}]
        case EDIT_SUPERVISOR:
            return [{ ...state[0],isSupervisor:!state[0].isSupervisor}]
        case EDIT_PROJECT_MANAGER:
            return [{ ...state[0],isProjectManager:!state[0].isProjectManager}]
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
        case IS_VENDOR:
            return [{ ...state[0], isVendor:!state[0].isVendor}]
        case EDIT_VENDOR_NAME:
            return [{ ...state[0], vendorName: action.payload }];
        default:
            return state;
    }
}