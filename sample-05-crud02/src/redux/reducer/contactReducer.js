//reducer 
const initialValue = {
    loadingFlag: false,
    contact: [],
    errorMsgFlag: false
};


const contactReducer = (state = initialValue, action) => {
    switch(action.type) {
        case "Set_Contact_List":
            if(action.payload) {
                state = {
                    loadingFlag: true,
                    contact: action.payload,
                    errorMsgFlag: false
                }
                return state;
            }
            break;
        case "Error_Status":
            state = {
                loadingFlag: false,
                contact: [],
                errorMsgFlag: true
            }
            return state;
        default:
            return state;
    }
}

export default contactReducer;