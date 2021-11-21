const validateInfo = (values) => {
    let errors = {};
    
    if(!values.name)
    errors.name = inputName(values.name);

    if(!values.email)
    errors.email = inputEmail(values.email);

    if(!values.imageUrl)
    errors.imageUrl = "Please add the image URL"

    return errors;
}

export const inputName = (param) => {
    if(!param.trim()) {
        return "firstName field cannot be blank";
    }
}

export const inputEmail = (param) => {
    const regex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;,.](([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+)*$/;

    if(param == "" ) {
        return "email field cannot be blank";
    } else if(!param.match(regex)) {
        return "Please enter correct email address !";
    }
}

export default validateInfo;