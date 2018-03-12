import { GET_ALL_HOLIDAYS,DELETE_HOLIDAY_SUCCESS } from '../../../constants';
const initialState=[{uEmail:'',uFirstName:'',uLastName:'',uPhone:'',uPhone2:'',isActive:'',
city:'',state:'',country:'',streetName1:'',streetName2:'',roleList:[""]}];


export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_HOLIDAYS:
            return action.payload;
        case DELETE_HOLIDAY_SUCCESS:
            return state;
        default:
            return state;
    }
}