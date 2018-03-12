import {GET_EDIT_VENDOR,UPDATE_EDIT_VENDOR,VENDOR_COMPANY_NAME,
    VENDOR_STREET_NAME1,VENDOR_STREET_NAME2,VENDOR_CITY,VENDOR_STATE,VENDOR_COUNTRY,VENDOR_EMAIL,
    VENDOR_CELL,VENDOR_PHONE} from '../../../constants';

const initialState=[{vendorId:'',vendorCompanyName:'',vendorStreetName1:'',vendorStreetName2:'',
    vendorCity:'',vendorState:'',vendorCountry:'',vendorEmail:'',vendorCell:'',vendorPhone:''}];

    export default function(state=initialState, action){
        switch(action.type){
            case GET_EDIT_VENDOR:
                return action.payload;
            case UPDATE_EDIT_VENDOR:
                return state;
            case VENDOR_COMPANY_NAME:
                return [{ ...state[0], vendorCompanyName: action.payload }]
                                    
            case VENDOR_STREET_NAME1:
                return [{...state[0], vendorStreetName1: action.payload }]
            case VENDOR_STREET_NAME2:
                return [{ ...state[0], vendorStreetName2: action.payload }]
            case VENDOR_CITY:
                return [{ ...state[0], vendorCity: action.payload }]
            case VENDOR_STATE:
                return [{ ...state[0], vendorState: action.payload }]
            case VENDOR_COUNTRY:
                return [{ ...state[0], vendorCountry: action.payload }]
            case VENDOR_EMAIL:
                return [{ ...state[0], vendorEmail: action.payload }]
            case VENDOR_CELL:
                return [{ ...state[0], vendorCell: action.payload }]
            case VENDOR_PHONE:
                return [{...state[0], vendorPhone: action.payload }]
            default:
                return state;
        }
    }