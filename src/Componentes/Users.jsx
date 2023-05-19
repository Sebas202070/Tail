import React, { useEffect } from "react";
import User from "./User";
import { connect } from "react-redux";
import {  fetchUsers } from "../actions";
import styled from "styled-components";
import { Link } from "react-router-dom"


 function Users ({users, fetchUsers}) {
/* const Array = [{id: 1, Name: "hhh", username: "Fhh1"}, {id:2, Name: "Taaa", username: "aaa1"}]; */
useEffect(() => {
    fetchUsers();
   }, [fetchUsers])

 return (
        <>
         <Link to={"/About"}>
  <Estilo4>
 
        {
         users?.map((u, i) => <User key={i} {...u}/>)
         
        }
        </Estilo4>
        </Link>
        </>

    )
}


const mapStatetoProps = (state) => {

return {
    users: state.users
}
}

const Estilo4 = styled.div
`display: flex;
justify-content: space-between;
border-radius: inherit;
border-color: red;


`;








export default connect(mapStatetoProps, {fetchUsers})(Users)


