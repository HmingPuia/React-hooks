import React,{useState,useEffect} from 'react'

const EditUserForm = (props) => {
    
    const[user, setUser]=useState(props.currentUser)

    const handleInputChange=(e)=>{
        const{name, value}=e.target
        setUser({...user,[name]:value})
    }
    useEffect(()=>{
        setUser(props.currentUser)
    },[props])
    return (
        <form onSubmit={(e)=>{
            e.preventDefault()
            props.updateUser(user.id, user)
        }}>
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange}/>

            <label htmlFor="">Username</label>
            <input type="text" name="username" value={user.username} onChange={handleInputChange}/>

            <button>Update user</button>
            <button onClick={()=>props.setEditing(false)}>
                Cancel
            </button>
        </form>

    )
}

export default EditUserForm
