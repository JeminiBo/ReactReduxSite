
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
        default: return state;
    }
    
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
   
    
    for(let i = 0; i < state.users.length; i++)
    {
        if (state.users[i].userLogin === userLogin.userLogin && state.users[i].pass === userLogin.pass)
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
   if(state.currentUser) 
    {
        return {
            ...state,
            currentUser: null
        }
    }
    else
        return state;
    
}

export default registrationReducer;
