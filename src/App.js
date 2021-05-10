import React,{useState} from 'react'
import UserTable from './components/UserTable'
import AddUserForm from './components/forms/AddUserForm';
import EditUserForm from './components/forms/EditUserForm'
const App = () => {
    const usersData=[
        {id:1, name:"James", username:"james the bold"},
        {id:2, name:"John", username:"Hualngo"},
        {id:3, name:"Puya", username:"The mizo"},
    ]
    const [users, setUsers]=useState(usersData);
    const addUser=(user)=>{
        user.id=users.length + 1
        setUsers([...users, user])
    }
    const deleteUser=(id)=>{
        setUsers(users.filter((user)=> user.id !==id))
    }
    //UPDATE
    const [editing,setEditing]=useState(false)
    const initialFormState={id:null, name:'', username:''}
    const [currentUser, setCurrentUser]=useState(initialFormState)

    const editRow=(user)=>{
        setEditing(true)

        setCurrentUser({id: user.id, name: user.name, username:user.username})
    }
    const updateUser=(id, updatedUser)=>{
        setEditing(false)

        setUsers(users.map((user)=>(user.id===id ? updatedUser:user)))
    }
    return (
        <>
        <div className="container">
            
            <h2>CRUD App</h2>
            <div className="row">

            <div className="col-sm-8">
                {
                    editing ? (
                        <div>
                        <h3>Edit user</h3>
                        <EditUserForm
                        setEditing={setEditing}
                        currentUser={currentUser}
                        updateUser={updateUser}
                        />
                        </div>
                    ):(
                        <div>
                            <h3>Add user</h3>
                            <AddUserForm addUser={addUser}/>
                        </div>
                    )
                }
                
            </div>

            <div className="col-sm-4">
                <h3>View User</h3>
                <UserTable users={users}
                editRow={editRow}
                 deleteUser={deleteUser}/>
            </div>
            </div>
        </div>

        </>
    )
}

export default App
