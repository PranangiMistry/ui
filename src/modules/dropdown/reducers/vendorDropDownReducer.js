import { VENDOR_DROPDOWN } from '../../../constants';

export default function (state = null, action) {
    switch (action.type) {
        case VENDOR_DROPDOWN:
            return action.payload;
        default:
            return state;
    }
}