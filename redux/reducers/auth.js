const initialState = {
    token: [],
    userData: {},
    balance: [],
    phone: [],
    isLoading: false,
    isError: false,
    errorMsg: '',
    errMsg: '',
    successMsg: ''
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH_LOGIN_PENDING': {
            state.isLoading = true
            state.isError = false
            state.errorMsg = ''
            return { ...state }
        }
        case 'AUTH_LOGIN_FULFILLED': {
            const { data } = action.payload
            if (data.results?.token) {
                state.token = data.results.token
                if (!window.localStorage.getItem('token')) {
                    window.localStorage.setItem('token', state.token)
                }
            }
            state.successMsg = data.message
            return { ...state }
        }
        case 'AUTH_LOGIN_REJECTED': {
            const { data } = action.payload.response
            state.isLoading = false
            state.isError = true
            state.errorMsg = data.error
            state.errMsg = data.message
            return { ...state }
        }
        case 'AUTH_LOGOUT': {
            state.token = null
            state.userData = {}
            window.localStorage.removeItem('token')
            return { ...state }
        }
        case 'SET_EMAIL': {
            state.email = action.payload.email
            return { ...state }
        }
        case 'GET_PROFILE_PENDING': {
            state.error = false
            state.isLoading = true
            return { ...state }
        }
        case 'GET_PROFILE_FULFILLED': {
            const { data } = action.payload
            state.isLoading = false
            state.userData = data.results
            return { ...state }

        }
        case 'GET_PROFILE_REJECTED': {
            const { data } = action.payload.response
            state.isLoading = false
            state.error = true
            state.errorMsg = data.message
            return { ...state }
        }
        case 'GET_BALANCE_PENDING': {
            state.error = false
            state.isLoading = true
            return { ...state }
        }
        case 'GET_BALANCE_FULFILLED': {
            const { data } = action.payload
            state.isLoading = false
            state.balance = data.results
            return { ...state }

        }
        case 'GET_BALANCE_REJECTED': {
            const { data } = action.payload.response
            state.isLoading = false
            state.error = true
            state.errorMsg = data.message
            return { ...state }
        }
        case 'GET_PHONE_PENDING': {
            state.error = false
            state.isLoading = true
            return { ...state }
        }
        case 'GET_PHONE_FULFILLED': {
            const { data } = action.payload
            state.isLoading = false
            state.phone = data.results
            return { ...state }

        }
        case 'GET_PHONE_REJECTED': {
            const { data } = action.payload.response
            state.isLoading = false
            state.error = true
            state.errorMsg = data.message
            return { ...state }
        }
        case 'CLEAR_MESSAGE': {
            state.errorMsg = ""
            state.errMsg = ""
            state.message = ""
            return { ...state }
        }
        case 'CHANGE_PASSWORD_PENDING': {
            state.error = false
            state.isLoading = true
            state.message = ''
            return { ...state }
        }
        case 'CHANGE_PASSWORD_FULFILLED': {
            const { data } = action.payload
            state.isLoading = false
            state.message = data.message
            // state.successMsg = data.message
            // state.errorMsg = ""
            // state.errMsg = ""
            return { ...state }

        }
        case 'CHANGE_PASSWORD_REJECTED': {
            const { data } = action.payload.response
            state.isLoading = false
            state.error = true
            // state.errorMsg = data.error
            // state.errMsg = data.messag
        }
        case 'CHANGE_PIN_PENDING': {
            state.error = false
            state.isLoading = true
            state.message = ''
            return { ...state }
        }
        case 'CHANGE_PIN_FULFILLED': {
            const { data } = action.payload
            state.isLoading = false
            state.message = data.message
            // state.successMsg = data.message
            // state.errorMsg = ""
            // state.errMsg = ""
            return { ...state }

        }
        case 'CHANGE_PIN_REJECTED': {
            const { data } = action.payload.response
            state.isLoading = false
            state.error = true
            // state.errorMsg = data.error
            // state.errMsg = data.messag
        }
        case 'ADD_PHONE_PENDING': {
            state.error = []
            state.isLoading = true
            return { ...state }
        }
        case 'ADD_PHONE_FULFILLED': {
            const { data } = action.payload
            state.isLoading = false
            state.message = data.message
            return { ...state }
        }
        case 'ADD_PHONE_REJECTED': {
            const { data } = action.payload.response
            state.isLoading = false
            state.message = data.message
            return { ...state }
        }
        case 'ADD_AMOUNT_PENDING': {
            state.error = []
            state.isLoading = true
            return { ...state }
        }
        case 'ADD_AMOUNT_FULFILLED': {
            const { data } = action.payload
            state.isLoading = false
            state.successMsg = data.message
            return { ...state }
        }
        case 'ADD_AMOUNT_REJECTED': {
            const { data } = action.payload.response
            state.isLoading = false
            state.successMsg = data.message
            return { ...state }
        }
        case 'EDIT_PROFILE_PENDING': {
            state.error = false
            state.isLoading = true
            state.message = ''
            return { ...state }
        }
        case 'EDIT_PROFILE_FULFILLED': {
            const { data } = action.payload
            state.isLoading = false
            state.message = data.message
            state.successMsg = data.message
            // state.errorMsg = ""
            // state.errMsg = ""
            return { ...state }

        }
        case 'EDIT_PROFILE_REJECTED': {
            const { data } = action.payload.response
            state.isLoading = false
            state.error = true
            state.successMsg = data.error
            // state.errMsg = data.messag
        }
        default: {
            return { ...state }
        }
    }
}

export default auth