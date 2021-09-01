import React from "react";
import { ErrorMessage ,useField } from "formik";

export const Textfield=({label, ...props}) => {
    const[field,meta]= useField(props);
    return(
        <div className="mb2">
            <label htmlFor={field.name}>{label}</label>
            <input 
            className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`} 
            {...field} {...props}
            autoComplete="off" />
            <ErrorMessage name={field.name}></ErrorMessage>
        </div>
    )

}