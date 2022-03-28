import React from 'react'
import Header from '../../../ProductHeader/Header';
import UserTable from '../Users/UserTable'

function User() {
    return (
        <>
         <Header compo={"Users"}/>
         <UserTable/>
        </>
    )
}

export default User
