import { SUPERVISOR_DROPDOWN,SELECT_SUPERVISOR_L1,CLEAR_SUPERVISOR,SELECT_SUPERVISOR_L2,SELECT_SUPERVISOR_L3} from '../../../constants'
const URL_PROJECT_LIST = 'http://localhost:9797/webapp/dropdown/supervisorDropdown'
/*-----------------------------------------------------------------------------------------

--------------------------------------client dropdown---------------------------------------

-------------------------------------------------------------------------------------------*/

export const getSupervisorDropdown = () => async dispatch => {
        const response = await fetch(`${URL_PROJECT_LIST}`, { method: 'GET' })
        const responseBody = await response.json();
        dispatch(supervisorDropdownResponse(responseBody));
}

export const supervisorDropdownResponse = responseBody => ({
    type: SUPERVISOR_DROPDOWN,
    payload: responseBody
})

export const selectSupervisorL1 = (superId)=>({
    type: SELECT_SUPERVISOR_L1,
    payload: superId
})
export const selectSupervisorL2 = (superId)=>({
    type: SELECT_SUPERVISOR_L2,
    payload: superId
})
export const selectSupervisorL3 = (superId)=>({
    type: SELECT_SUPERVISOR_L3,
    payload: superId
})

export const clearSupervisor = ()=>({
    type: CLEAR_SUPERVISOR,
    payload: ''
})