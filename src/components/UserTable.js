import React from 'react'

const UserTable = (props) => {
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                props.users.length>0?(
                    props.users.map((user)=>(
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td className="btn btn-light" onClick={()=>{props.editRow(user)}}>Edit</td>
                            <td className="btn btn-light" 
                            onClick={()=>props.deleteUser(user.id)}
                            >Delete</td>
                        </tr>
                    ))
                ):(
                    <tr>
                        <td colSpan={3}>No users</td>
                    </tr>
                )
                }
                
            </tbody>
        </table>
            
        </>
    )
}

export default UserTable
