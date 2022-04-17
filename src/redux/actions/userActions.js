

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
    