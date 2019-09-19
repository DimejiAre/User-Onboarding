import React from 'react';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const initialUser = {

}

const onSubmit = () => {

}

const validationSchema = yup.object().shape({
    name: yup.string()
    .required('You must enter a Name'),
    email: yup.string()
    .email('You must enter a valid email address')
    .required('You must enter a valid email address'),
    password: yup.string()
    .required('You must enter a password'),
  });

function UserForm(props){
    return (
        <Formik 
        validationSchema={validationSchema}
        initialValues={initialUser}
        onSubmit={onSubmit}
        render={props => {
            return (
                <Form>
                    <label>
                        Name
                        <Field name='name' type='text' placeholder='Name'/>
                        <ErrorMessage name='name' component='div' />
                    </label>
                    <label>
                        Email
                        <Field name='email' type='text' placeholder='Email'/>
                        <ErrorMessage name='name' component='div' />
                    </label>                    
                    <label>
                        Password
                        <Field name='password' type='password' placeholder='Password'/>
                        <ErrorMessage name='name' component='div' />
                    </label>                   
                    <label>
                        I agree to terms and conditions
                        <Field name='terms' type='checkbox' />
                        <ErrorMessage name='name' component='div' />
                    </label>                   
                    <button type='submit'>Submit</button>
                </Form>
            )
        }}/>
    )
}

export default UserForm;