

export const signupUser = (userData) => {
    
    return (dispatch) => {
        let url = 'http://localhost:3000/users';
        let apiObject = {
            method: 'POST',
            headers: {
                accept: "application/json",
                "content-type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    user_name: userData.name,
                    email: userData.email,
                    password: userData.password
                }


            })
        }

        return fetch(url, apiObject)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('token', data.token)
                dispatch({
                    type: 'CREATE_USER', 
                    user: data.user,
                    token: data.token
                })
            }
            )
    
    }
}

export const userAuth = () => {
    return (dispatch) => {
        let url = 'http://localhost:3000/current_user';
        let apiObject = {
            headers: {
                accept: "application/json",
                "content-type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }   
        }

        return fetch(url, apiObject)
            .then(res => {
                if (res.ok) {
                    return res.json()
                        .then(user => {
                            dispatch({
                                type: 'CREATE_USER',
                                user: user
                        })
                    })
                }
                else {
                    dispatch({
                        type: 'LOGGED_OUT_USER',
                    })
                }
           })
          
    
    }
}

export const userLoggout = () => {
    return (dispatch) => {
        dispatch({
        type: 'LOGGED_OUT_USER'
    })
    }
   
       
}
    