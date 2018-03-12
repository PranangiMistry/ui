import {GET_PAGE_DATA} from '../../../constants'
const initialState=[{clientId:'',clientName:'',clientCode:'',streetName1:'',streetName2:'',isActive:'',city:'',state:'',country:'',zipCode:''}];


export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PAGE_DATA:
            return action.payload;
        default:
            return state;
    }
}