import {GET_EDIT_CLIENT,CLIENT_NAME,CLIENT_CODE,CLIENT_STREETNAME1,CLIENT_STREETNAME2,CLIENT_CITY,CLIENT_STATE
    ,CLIENT_COUNTRY,CLIENT_ZIP_CODE,CLIENT_REPORT_TO_NAME,CLIENT_REPORT_TO_EMAIL,CLIENT_REPORT_TO_CELL
,CLIENT_REPORT_TO_PHONE,UPDATE_EDIT_CLIENT} from '../../../constants';
const initialState=[{clientId:'',clientName:'',clientCode:'',streetName1:'',streetName2:'',isActive:'',city:'',state:'',country:'',zipCode:''},
{reportToName:'',reportToEmail:'',reportToCell:'',reportToPhone:''}];

export default function(state=initialState, action){
    switch(action.type){
        case GET_EDIT_CLIENT:
            return action.payload;
        case CLIENT_NAME:
            return [{ ...state[0], clientName: action.payload },{...state[1]}]
            // return state;
        case CLIENT_CODE:
            return [{ ...state[0], clientCode: action.payload},{...state[1]}]
        case CLIENT_STREETNAME1:
            return [{ ...state[0], streetName1: action.payload},{...state[1] }]
        case CLIENT_STREETNAME2:
            return [{ ...state[0], streetName2: action.payload},{...state[1] }]
        case CLIENT_CITY:
            return [{ ...state[0], city: action.payload},{...state[1] }]
        case CLIENT_STATE:
            return [{ ...state[0], state: action.payload} ,{...state[1]}]
        case CLIENT_COUNTRY:
            return [{ ...state[0], country: action.payload},{...state[1]}]
        case CLIENT_ZIP_CODE:
            return [{ ...state[0], zipCode: action.payload },{...state[1]}]
        case CLIENT_REPORT_TO_NAME:
            return [{...state[0]},{ ...state[1], reportToName: action.payload }]
        case CLIENT_REPORT_TO_EMAIL:
            return [{ ...state[0]},{ ...state[1], reportToEmail: action.payload }]   
        case CLIENT_REPORT_TO_CELL:
            return [{ ...state[0]},{ ...state[1], reportToCell: action.payload }]     
        case CLIENT_REPORT_TO_PHONE:
            return [{ ...state[0]},{ ...state[1], reportToPhone: action.payload }]    
        case UPDATE_EDIT_CLIENT:
            return state;
        default:
            return state;
    }
}