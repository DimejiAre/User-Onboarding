import React, {useState} from 'react';
import Form from './components/Form';
import Users from './components/Users';
import axios from 'axios';
import './App.css';

function App() {

  const url = 'https://reqres.in/api/users';

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
      addUser={addUser}/>
      <Users 
      users={users}/>
    </div>
  );
}

export default App;
