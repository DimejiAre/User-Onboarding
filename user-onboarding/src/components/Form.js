import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const initialUser = {

}

const onSubmit = () => {

}

function UserForm(props){
    return (
        <Formik 
        initialValues={initialUser}
        onSubmit={onSubmit}
        render={props => {
            return (
                <Form>
                    <label>
                        Name
                        <Field name='name' type='text' placeholder='Name'/>
                    </label>
                    <label>
                        Email
                        <Field name='email' type='text' placeholder='Email'/>
                    </label>                    
                    <label>
                        Password
                        <Field name='password' type='password' placeholder='Password'/>
                    </label>                   
                    <label>
                        I agree to terms and conditions
                        <Field name='terms' type='checkbox' />
                    </label>                   
                    <button type='submit'>Submit</button>
                </Form>
            )
        }}/>
    )
}

export default UserForm;