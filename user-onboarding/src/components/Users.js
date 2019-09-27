import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: cornflowerblue;
    color: black;
    align-items: center;

    div {
        padding: 20px;
        width: 95%;
        text-align: left;
        border-bottom: 1px solid black;
    }
`;

function Users (props) {
    const {users} = props;
    return (
        <StyledDiv>
            <h2>User List</h2>
            {users? users.map(user => (
                <div key={user.id}><p>Name: {user.name}</p> <p>Email:{user.email}</p></div>
            )): null }
        </StyledDiv>
    )
}

export default Users;