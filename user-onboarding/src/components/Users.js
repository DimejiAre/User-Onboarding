import React from 'react';

function Users (props) {
    const {users} = props;
    return (
        <div>
            {users? users.map(user => (
                <div key={user.id}>{user.name}, {user.email}</div>
            )): null }
        </div>
    )
}

export default Users;