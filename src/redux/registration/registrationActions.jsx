
export const registrationUser = function (userName,userLogin, pass) {
    return {
        type: "ADD_USER",
        payload: {
            userName,
            userLogin,
            pass
        }
    }
};

export const login = function (userLogin, pass) {
    return {
        type: "LOGIN",
        payload: {
            userLogin,
            pass
        }
    }
}
export const logout = function () {
    return {
        type: "LOGOUT"
        
    }
}
