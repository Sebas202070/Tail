import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { AddUsers } from "../actions";


 function Add ({AddUsers}) {
 const [input, setInput] = useState({
    name: "",
    username:""})
 
    function HandleSubmit (e) {
        e.preventDefault();
        AddUsers(input)
    }

        function HandleChange (e) {
            setInput( {
                ...input,
               [e.target.name] : e.target.value
            }

            )
        }
    
    return (
        <>
        <form onSubmit={HandleSubmit}>
        <input name="name" type="text" placeholder="Nombre.." value={input.name} onChange={HandleChange}/>
        <input name="username" type="text" placeholder="User.." value={input.username} onChange={HandleChange}/>
        <input type="submit" value="Add"  />
        </form>
        </>
    )
}



export default connect(null, {AddUsers})(Add)