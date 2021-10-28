import { ActionTypes } from "../constants/action-type"

const initialState = {
    products: [
        {
            id:1,
        name: "Donat",
        email: "uwadonat@gmail.com",
        },

    ],
}
export const doctorReducer = (state, {type, payload}) => {
   switch (type) {
       case ActionTypes.SET_DOCTORS:
           return state;
        default:
            return state;
   }
}