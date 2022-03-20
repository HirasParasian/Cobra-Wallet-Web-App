import http from '../../helpers/http'

export const login = (email, password) => {
    const param = new URLSearchParams()
    param.append('email', email)
    param.append('password', password)
    return ({
        type: 'AUTH_LOGIN',
        payload: http().post('/auth/login', param)
    })
}
export const getProfile = (token) => {
    return ({
        type: 'GET_PROFILE',
        payload: http(token).get('profile')
    })
}
export const editProfile = (token, picture) => {
    const params = new FormData()
    params.append('picture', picture)
    return ({
        type: 'EDIT_PROFILE',
        payload: http(token, true).patch('profile', params)
    })
}
export const addPhone = (token, phone) => {
    const params = new URLSearchParams()
    params.append('number', phone)
    return ({
        type: 'ADD_PHONE',
        payload: http(token).post('profile/phones', params)
    })
}
export const editProfiles = (token, fullName) => {
    const params = new FormData()
    params.append('fullName', fullName)
    return ({
        type: 'EDIT_PROFILE',
        payload: http(token, true).patch('profile', params)
    })
}