import {ActionTypes} from "./actionType";

export const increment = (num) => {
    return {
        type: ActionTypes.INCREMENT,
        payload: num
    }
}

export const decrement = () => {
    return {
        type: ActionTypes.DECREMENT
    }
}

export const user = () => {
    return {
        type: ActionTypes.SIGN_IN
    }
}