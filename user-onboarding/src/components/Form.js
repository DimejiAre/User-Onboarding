import React from 'react';
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

    div {
        color: red;
    }
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
    terms: false,
}



function UserForm(props){
    const {addUser, validationSchema} = props;
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
                        <ErrorMessage name='email' component='div' />
                    </label>                    
                    <label>
                        Password
                        <Field name='password' type='password' placeholder='Password'/>
                        <ErrorMessage name='password' component='div' />
                    </label>                   
                    <label>
                        I agree to terms and conditions
                        <Field name='terms' type='checkbox' checked={props.values.terms}/>
                        <ErrorMessage name='terms' component='div' />
                    </label>                   
                    <button type='submit'>Submit</button>
                    </StyledForm>
                </Form>
            )
        }}/>
    )
}

export default UserForm;