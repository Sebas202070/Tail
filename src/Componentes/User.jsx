import React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom"



export default function User({id, name, imageUrl, username, email}) {
    return (
        
       
            <>
                <Estilo1>
            <Estilo2>{name}</Estilo2>
         
            <img src={imageUrl} alt="No se encontro" />
         
           {/*  <h1>{username}</h1> */}
            <h1>{id}</h1>
            {/* <h1>{email}</h1> */}
            </Estilo1>
            </>
        
        


    )
}

const Estilo1 = styled.div
`background-color: black;
width: 70%;


`;


const Estilo2 = styled.h1
`background-color:turquoise;`


