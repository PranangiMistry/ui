import {GET_SUBSTITUTE_BY_ME,DELETE_SUBSTITUTE} from '../../../constants';

const URL='http://localhost:9797/webapp/SupervisorSubstitution';

export const getAllSubstituteByMe = (id) => async dispatch => {
        const response = await fetch(`${URL}/${id}`, { method: 'GET' })
        const responseBody = await response.json();
        dispatch(getAllSubstituteByMeSuccess(responseBody));
    
}
export const getAllSubstituteByMeSuccess = responseBody => ({
    type: GET_SUBSTITUTE_BY_ME,
    payload: responseBody
})

export const deleteSubstituter = (supervisorSubstituteId,supervisorId) => async (dispatch) => {
        const response = await fetch(`http://localhost:9797/webapp/SupervisorSubstitution/${supervisorSubstituteId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            },
        })
        const responseBody = await response.json();

        dispatch(deleteSubstituterSuccess(responseBody));
        dispatch(getAllSubstituteByMe(supervisorId));
    
}
export const deleteSubstituterSuccess = responseBody => ({
    type: DELETE_SUBSTITUTE,
    payload: responseBody
})