import http from '../../helpers/http'

export const getUser = () => {
    return ({
        type: 'GET_USER',
        payload: http().get('users')
    })
}