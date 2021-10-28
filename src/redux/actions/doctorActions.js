import { ActionTypes } from '../constants/action-type'
export const setDoctors = (doctors) => {
    return {
        type: ActionTypes.SET_DOCTORS,
        payload: doctors,
    }
}

export const selectDoctors = (doctor) => {
    return {
        type: ActionTypes.SELECTED_DOCTORS,
        payload: doctor,
    }
}