import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { updateContactList } from "../redux/actions"
import { Link, useNavigate } from "react-router-dom";
import { uuid } from "uuidv4";
import { inputName, inputEmail } from "../forms/validateInfo"

const useForms = (validate) => {
    const addDetailsDispatch = useDispatch();
    const navigate = useNavigate();

    const [values, setValues] = useState({
        name: "",
        email: "",
        imageUrl: ""
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name] : value
        })
    }

    const handleBlur = (e) => {
        console.log(e.target);
        console.log("I a triggered");
        const innerErrors = {};
        if(e.target.name === "name")
        innerErrors.name = inputName(values.name);

        if(e.target.name === "email")
        innerErrors.email = inputEmail(values.email) || "";

        console.log(innerErrors);
        setErrors({
            ...errors,
            ...innerErrors
        });
        console.log(errors);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setErrors(
            validate(values)
        );
        setIsSubmitting(true);
    }

    useEffect(()=>{
        if(Object.keys(errors).length === 0 && isSubmitting) {
            console.log("Form submitted");
            const frmdetails = {
                'id': uuid(),
                'name' : values.name,
                'email' : values.email,
                'imageUrl' : values.imageUrl
            }
            console.log(frmdetails);
            addDetailsDispatch(updateContactList(frmdetails));
            //nameInput.current.value=""; emailInput.current.value = "";
            setValues({name: "", email: "", imageUrl: ""});
            navigate("/");
        } else {
            console.log("Form not submitted");
        }
    }, [errors])

    return {
        values, errors, handleChange, handleBlur, handleSubmit
    }
}

export default useForms;