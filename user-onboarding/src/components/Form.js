import React from 'react';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
    margin: 0 auto;
    padding: 30px;
    border: 1px solid black;

    input {
    height: 20px;
    width: 30vw;
    }

    label {
    margin-top: 10px;
    width: 20vw;
    }

    button {
    background-color: cornflowerblue;
    margin-top: 15px;
    height: 35px;
    border-radius: 5px;
    }
`;

const initialUser = {
    name: '',
    email: '',
    password: '',
    terms: null,
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
    const {addUser} = props;
    return (
        <Formik 
        validationSchema={validationSchema}
        initialValues={initialUser}
        onSubmit={addUser}
        render={props => {
            return (
                <Form>
                    <StyledForm>
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
                    </StyledForm>
                </Form>
            )
        }}/>
    )
}

export default UserForm;