import { deleteContactItemAPI } from "../../redux/actions"
import { useSelector, useDispatch } from 'react-redux';

export const AreYouSure = (data) => {
    const {id, name, email} = data.modalData;
    const deleteContactIdDispatch = useDispatch();

    const deleteContactHandler = (id) => {
        deleteContactIdDispatch(deleteContactItemAPI(id));
    }

    return (
        <>
            <h3>Are you sure to delete below info ?</h3>
            <p>{name} & {email}</p>
            <button onClick={()=> deleteContactHandler(id)} className="ui button blue left">Yes</button>
        </>
    )
}