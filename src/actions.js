

export  function AddUsers (user) {
return {
    type:  "ADD_USERS",
    payload: user
}
}

export  function AddUserss (users) {
    return {
        type: "ADD_USERSS",
        payload: users
    }
}



export function fetchUsers() {
    return function(dispatch) {
        fetch(`https://dragon-ball-super-api.herokuapp.com/api/characters/`)
        .then((response) => response.json())
        .then((data) => {
     
            let userFormatted = data.map(u => {
                 return {
                    id: u.id,
                    name: u.name,
                    imageUrl: u.imageUrl
                   /*  username: u.username,
                    email:u.email */
                }
                
            })
          
            dispatch(AddUserss(userFormatted))
        } )
        .catch((e) => console.error(e))
    }
}
