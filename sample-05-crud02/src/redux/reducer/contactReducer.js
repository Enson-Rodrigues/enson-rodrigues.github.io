//reducer 
const contactReducer = (state = [], action) => {
    switch(action.type) {
        case "Set_Contact_List":
            return action.payload;
        default:
            return state;
    }
}

export default contactReducer;