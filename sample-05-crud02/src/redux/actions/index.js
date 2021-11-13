import { ActionTypes } from "./actionTypes";


// Below all action methods are important in terms of when are we calling it.
// Basically each depends when did u call them based on which reducer will be trigger.
// This same types are writtern as a switch case in reducer

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

export const updateContactList = (data) => {
    return {
        type: ActionTypes.Update_Contact_List,
        payload: data
    }
}

export const updateContactListState = (data) => {
    return {
        type: ActionTypes.Update_Contact_List_State,
        payload: data
    }
}

export const errorStatus = () => {
    return {
        type: ActionTypes.Error_Status
    }
}