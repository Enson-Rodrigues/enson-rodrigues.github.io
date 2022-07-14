import React, { Component } from 'react';
import Field from '../../components/field/field'
class Form extends Component {
 state = {
     fields: [
         {
            id: 'name',
            type: 'input',
            placeholder: 'Enter name',
            config: {
                dataType: 'text',
                placeholder: 'Your Name'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false, 
            errorMessage: 'Enter Valid data',
            touched: false
        },
        {
            id: 'age',
            type: 'input',
            placeholder: 'Enter age',
            config: {
                dataType: 'text',
                placeholder: 'Your Age'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false, 
            errorMessage: 'Enter Valid Age',
            touched: false
        },
           {
            id: 'street',
            type: 'textarea',
            placeholder: 'Enter Address',
            config: {
                dataType: 'text',
                placeholder: 'Street'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            errorMessage: 'Enter Valid data',
            touched: false
        },
         {
            id: 'zipCode',
            type: 'input',
            placeholder: 'Enter zipcode',
            config: {
                dataType: 'text',
                placeholder: 'ZIP Code'
            },
            value: '',
            validation: {
                required: true,
                minLength: 5,
                maxLength: 5,
            },
            valid: false,
            errorMessage: 'Enter Valid data',
            touched: false
        },
        {
            id: 'country',
            type: 'select',
            placeholder: 'Enter country',
            config: {
                dataType: 'text',
                placeholder: 'Country'
            },
            options: [
                {
                    value: 'USA',
                    displayValue: 'United state of america'
                },
                {
                    value: 'UK',
                    displayValue: 'United kingdom'
                },
                {
                    value: 'IN',
                    displayValue: 'India'
                }
            ],
            value: '',
            validation: {
                required: true
            },
            valid: false,
            errorMessage: 'Enter Valid data',
            touched: false
        },
         {
            id: 'email',
            type: 'input',
            placeholder: 'Enter email',
            config: {
                dataType: 'email',
                placeholder: 'Your E-Mail'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            errorMessage: 'Enter Valid data',
            touched: false
        },
    ],
    formValid: false
 }

 fieldChange = (event,field,index) => {
     const updatedField = {...field};
     updatedField.value = event.target.value;
     [updatedField.valid,  updatedField.errorMessage] = this.checkValidity(updatedField);
    //console.log(this.checkValidity(updatedField));
     const updatedFields =  [...this.state.fields];
     console.log("Check Now");
     console.log(updatedFields.splice(index,1,updatedField));
     updatedFields.splice(index,1,updatedField);
     let formValid = true;
     for(let field of updatedFields){
        if(!field.valid){
           formValid = false;
        }
    }
     this.setState({
         fields: updatedFields,
         formValid: formValid
     })
     console.log("After update");
     console.log(updatedFields);
    console.log('field changed')
 }


 checkValidity = (field) =>{
     console.log(field);
     const rules = field.validation;
     const value = field.value;
     let isValid = true;
     let errorMsg = "";
    if (!rules) {
        return true;
    }

    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
        errorMsg = isValid === false && value.trim() === '' ? field.placeholder + " cannot be empty" : "";
    }

    if (rules.minLength && value.trim() !== '') {
        isValid = value.length >= rules.minLength && isValid;
        errorMsg = field.placeholder + " cannot be max";
    }

    if (rules.maxLength && value.trim() !== '') {
        isValid = value.length <= rules.maxLength && isValid;
        errorMsg = field.placeholder + " cannot be less";
    }

    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid;
        errorMsg = field.placeholder + " is not a proper format";
    }

    return [isValid, errorMsg];
 }

 fieldBlur(event,field,index){
     /*if(field.touched){
         return;
     }*/
    const updatedField = {...field};
     updatedField.touched = true;
     [updatedField.valid,  updatedField.errorMessage] = this.checkValidity(updatedField);
     const updatedFields =  [...this.state.fields];
     updatedFields.splice(index,1,updatedField);
     
   
     this.setState({
         fields: updatedFields,
     })
     console.log(this.state.formValid);

 }
 onSubmit(event) {
    event.preventDefault();
    if(this.state.formValid) {
        console.log("data submitted");
    } else {
        console.log("not submitted");

        //console.log(document.querySelectorAll('.field-wrapper  [data-parent=cars]').blur());

        Array.from(document.querySelectorAll('.field-wrapper  [data-parent=cars]')).forEach(function(target){
            //target.click();
            console.log(target);
            target.dispatchEvent(new Event("input"));
        })
    }
 }

    render(){
       return (<form > {/*onSubmit={(event)=>this.onSubmit(event)}*/}
            {this.state.fields.map((field,index)=>{
                return <Field 
                 key={field.id}
                 fieldConfig={field}
                 focused={(event)=>this.fieldBlur(event,field,index)} 
                 changed={(event)=>this.fieldChange(event,field,index)} 
                 dataParent={"cars"}/>
            })}
            <button type='submit' onClick={(event)=>this.onSubmit(event)}>Submit</button> {/*disabled={!this.state.formValid}*/}
        </form>)

    }
}

export default Form;