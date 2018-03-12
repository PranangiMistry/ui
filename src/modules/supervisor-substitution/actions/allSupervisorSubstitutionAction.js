import {RETRIVE_ALL_SUPPERVISOR_SUBSTITUTE,DELETE_SUBSTITUTE_BY_ADMIN} from '../../../constants';
const URL='http://localhost:9797/webapp/SupervisorSubstitution';

export const getallSupervisorSubstitute = () => async dispatch => {
        const response = await fetch(`${URL}`, { method: 'GET' })
        const responseBody = await response.json();
         dispatch(getallSupervisorSubstituteSuccess(responseBody));
    
}
export const getallSupervisorSubstituteSuccess = responseBody => ({
    type: RETRIVE_ALL_SUPPERVISOR_SUBSTITUTE,
    payload: responseBody
})

export const deleteSubstituter = (supervisorSubstituteId) => async (dispatch) => {
 
        const response = await fetch(`http://localhost:9797/webapp/SupervisorSubstitution/${supervisorSubstituteId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            },
        })
        const responseBody = await response.json();

        dispatch(deleteSubstituterSuccess(responseBody));
        dispatch(getallSupervisorSubstitute());
    
}
export const deleteSubstituterSuccess = responseBody => ({
    type: DELETE_SUBSTITUTE_BY_ADMIN,
    payload: responseBody
})