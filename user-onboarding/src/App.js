import React, {useState, useEffect} from 'react';
import Form from './components/Form';
import Users from './components/Users';
import axios from 'axios';
import './App.css';

function App() {

  const url = 'https://reqres.in/api/users';

  const addUser = (formValue) => {
    console.log(formValue)
    const newUser = {
      name: formValue.name,
      email: formValue.email,
      password: formValue.password,
    }

    axios.post(url, newUser)
    .then(res => {
      console.log("res", res)
      setUsers(users.concat(res.data))
    })
    .catch(err => {
      setServerError(err.message)
    })
  }

  const [users, setUsers] = useState([]);
  const [serverError, setServerError] = useState('');


  return (
    <div>
      {serverError}
      <Form 
      addUser={addUser}/>
      {/* <Users /> */}
    </div>
  );
}

export default App;
