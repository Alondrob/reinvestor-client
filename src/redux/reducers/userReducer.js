

const userReducer = (state = {user: undefined, token: "", loggedIn: false}, action) => {
        switch(action.type) {
            case "CREATE_USER":
                return {
                    user: action.user,
                    token: action.token,
                    loggedIn: true
                }
            case "LOGGED_OUT_USER":
                    localStorage.removeItem("token")
                return {
                    user: undefined,
                    token: "",
                    loggedIn: false
                    }
                default: 
                return state;
            
        }
}

export default userReducer;