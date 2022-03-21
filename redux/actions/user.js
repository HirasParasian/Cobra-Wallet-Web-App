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
export const setRecepientDetail = (data) => {
    return {
        type: 'SET_RECEPIENT_DETAIL',
        payload: data
    }
}
export const getListUser = (token) => {
    return {
        type: 'GET_USER',
        payload: http(token).get('users')
    }
}