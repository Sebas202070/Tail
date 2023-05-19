const initialState = {
    users: [],
}



export default function RootReducer(state = initialState, action) {
    if(action.type === "ADD_USERS") {
        return {
            users:[...state.users, action.payload]
        }
    }
    if(action.type === "ADD_USERSS") {
        return {
            users:action.payload
        }
      }
    return state;
}