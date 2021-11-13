import http from '../../api'

export const getContacts = async () => {
    const response = await http.get("/contacts");

    return response;
}

export const addContactDetails = async (requestObject) => {
    const response = await http.post('/contacts', requestObject)

    return response;
}