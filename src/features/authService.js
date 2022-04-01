

const API_URL = '/api/users/'

// Register user
const register = async (userData) => {
    let obj = {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            'Content-Type': "application/json",
        },
        body: JSON.stringify(userData)
    }
    const response = await fetch(API_URL, obj);
    console.log(response)
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

// Login user
// const login = async (userData) => {
//     const response = await axios.post(API_URL + 'login', userData)

//     if (response.data) {
//         localStorage.setItem('user', JSON.stringify(response.data))
//     }

//     return response.data
// }

// Logout user
const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    logout
    // login,
}

export default authService