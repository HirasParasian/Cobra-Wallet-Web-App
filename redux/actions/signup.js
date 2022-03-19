import http from '../../helpers/http'

export const DataRegister = (data) => {
    const userData = {}
    let error = []
    userData.fullName = data.firstName + " " + data.lastName
    userData.email = data.email
    userData.password = data.password
    return {
        type: 'DATA_REGISTER',
        payload: {
            userData,
            error,
        }
    }
}

export const registerUser = (data) => {
    const userData = new URLSearchParams()
    for (const key in data) {
        userData.append(key, data[key]);
    }
    return {
        type: 'USER_SIGNUP',
        payload: http().post('/auth/register', userData)
    }
}