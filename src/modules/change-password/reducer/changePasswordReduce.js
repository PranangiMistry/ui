import {CHANGE_PASSWORD} from '../../../constants'

export default function (state ={}, action) {
    switch (action.type) {
        case CHANGE_PASSWORD:
            return action.payload;
        default:
            return state;
    }
}