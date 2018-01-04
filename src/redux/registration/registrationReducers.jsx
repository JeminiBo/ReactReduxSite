
const defaultState = {
    users: [],
    currentUser: null,
}

const registrationReducer = function (state=defaultState, action) {
    switch (action.type) {
        case "ADD_USER":
            return registrationUserHandler(state, action.payload);
        case "LOGIN":
            return loginUserHandler(state,action.payload);
        case "LOGOUT":
            return logoutUserHandler(state)
    }
    return state;
};

function registrationUserHandler(state, userLogin){
    let updatedUsers = state.users.slice(0);
    updatedUsers.push(userLogin);
    return {
        ...state,
        users: updatedUsers
    }
}


function loginUserHandler(state, userLogin){
    let allUsers = state.users.slice(0);
    
    for(let i = 0; i < state.users.length; i++)
    {
        if (state.users[i].userLogin == userLogin.userLogin && state.users[i].pass == userLogin.pass)
            {
                
                return {
                ...state,
                currentUser: userLogin
            }
        }
       
    }
    return state;
        
}

function logoutUserHandler(state)
{
    
    return {
            ...state,
            currentUser: null
        }
    
    return state;
}

export default registrationReducer;
