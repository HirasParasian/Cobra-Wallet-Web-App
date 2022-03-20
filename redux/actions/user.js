import http from '../../helpers/http'

export const getUser = () => {
    return ({
        type: 'GET_USER',
        payload: http().get('users')
    })
}

export const getTransaction = (token) => {
    return ({
        type: 'GET_TRANSACTION',
        payload: http(token).get('transactions/history')
    })
}