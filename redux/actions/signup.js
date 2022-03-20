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

export const registerUser = (data, code) => {
    const userData = new URLSearchParams()
    userData.append('pin', code)
    userData.append('fullName', data.fullName)
    userData.append('email', data.email)
    userData.append('password', data.password)

    return {
        type: 'USER_SIGNUP',
        payload: http().post('/auth/register', userData)
    }
}