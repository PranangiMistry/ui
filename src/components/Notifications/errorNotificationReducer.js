// import {CHANGE_MSG} from './constants';

let intialState = {
    msg:'',
    autoDismiss: 0,
    level: "error",
    position: "tc",
    action: {
        label: 'ok',
        callback:''
    }
}
export default function (state = intialState, action) {
    switch (action.type) {
        case 'CHANGE_MSG':
            return { ...state, msg: action.payload }    
        default:
            return state;
    }
}