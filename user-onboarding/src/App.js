import React, {useState} from 'react';
import Form from './components/Form';
import Users from './components/Users';
import axios from 'axios';
import * as yup from 'yup';

function App() {

  const url = 'https://reqres.in/api/users';

  const validationSchema = yup.object().shape({
    name: yup.string()
    .required('You must enter a Name')
    .min(2).max(50),
    email: yup.string()
    .email('You must enter a valid email address')
    .required('You must enter a valid email address'),
    password: yup.string()
    .required('You must enter a password')
    .min(7),
    terms: yup.mixed().oneOf([true],'You must accept terms and conditions to continue')
    .required('You must accept terms and conditions to continue')
  });

  const addUser = (formValue, actions) => {
    console.log(formValue)
    const newUser = {
      name: formValue.name,
      email: formValue.email,
      password: formValue.password,
    }

    axios.post(url, newUser)
    .then(res => {
      setUsers(users.concat(res.data));
      actions.resetForm();
    })
    .catch(err => {
      setServerError(err.message);
    })
  }

  const [users, setUsers] = useState([]);
  const [serverError, setServerError] = useState('');


  return (
    <div>
      {serverError}
      <Form 
      addUser={addUser}
      validationSchema={validationSchema}/>
      <Users 
      users={users}/>
    </div>
  );
}

export default App;
