import { SUBSTITUTION_DROPDOWN } from '../../../constants';

export default function (state = null, action) {
    switch (action.type) {
        case SUBSTITUTION_DROPDOWN:
            return action.payload;
        default:
            return state;
    }
}