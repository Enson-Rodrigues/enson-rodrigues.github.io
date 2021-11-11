import { ActionTypes } from "./actionTypes";

export const getContactList = () => {
    return {
        type: ActionTypes.Get_Contact_List
    }
}

export const setContactList = (data) => {
    return {
        type: ActionTypes.Set_Contact_List,
        payload: data
    }
}

export const errorStatus = () => {
    return {
        type: ActionTypes.Error_Status
    }
}