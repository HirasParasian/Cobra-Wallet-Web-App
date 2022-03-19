const initialState = {
    token: [],
    userData: {},
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
            state.message = data.message
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
        case 'CLEAR_MESSAGE': {
            state.errorMsg = ""
            state.errMsg = ""
            state.message = ""
            return { ...state }
        }
        default: {
            return { ...state }
        }
    }
}

export default auth