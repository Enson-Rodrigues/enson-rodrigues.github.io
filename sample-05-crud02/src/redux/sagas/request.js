import http from '../../api'

export const getContacts = async () => {
    let response = await http.get("/contacts");

    return response;
}