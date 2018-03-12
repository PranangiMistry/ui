import { DO_LOGIN, CHANGE_PASSWORD } from '../../../constants';
const intialState={isAdmin:undefined,isEmployee:"",isProjectManager:"",isSupervisor:"",password:undefined,userId:undefined}
export default function (state = null, action) {
    console.log("action.payload",action.payload)
    switch (action.type) {
        case DO_LOGIN:
            return action.payload;
        case CHANGE_PASSWORD:
            return { ...state, password: action.payload }  
        default:
            return state;
    }
}