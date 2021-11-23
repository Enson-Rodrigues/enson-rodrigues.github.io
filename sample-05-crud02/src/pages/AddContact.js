import { Profiler } from 'react'
import FormComponent from '../components/FormComponent';

const callBackFunct = (id, phase, actualDuration, baseDuration, startTime, commitTimme, interaction) => {
    /*console.log("id : "+id);
    console.log("phase : "+phase);
    console.log("actualDuration : "+actualDuration);
    console.log("baseDuration : "+baseDuration);
    console.log("startTime : "+startTime);
    console.log("commitTimme : "+commitTimme);
    console.log("interaction : "+JSON.stringify(interaction));*/
}


const AddContact = () => {
    return (
        <Profiler id="form-list" onRender={callBackFunct}>
            <FormComponent></FormComponent>
        </Profiler>
    )
}

export default AddContact;