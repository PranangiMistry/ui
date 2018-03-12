import {GET_ALL_VENDOR,DELETE_VENDOR} from '../../../constants'
const initialState=[{vendorStreetName2:'',
                    vendorCell: '',
                    vendorPhone:'',
                    vendorStreetName1:'',
                    vendorCompanyName:'',
                    vendorEmail:'',
                    vendorId: '',
                    vendorCity:'',
                    vendorCountory:'',
                    vendorState:''}];


export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_VENDOR:
            return action.payload;
         case DELETE_VENDOR:
            return state;
        default:
            return state;
    }
}