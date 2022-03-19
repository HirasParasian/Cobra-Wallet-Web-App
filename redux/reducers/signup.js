const initialState = {
    token: null,
    userData: {},
    email: "",
    fullname: "",
    password: "",
    isLoading: false,
    isError: false,
    errorMsg: '',
    errMsg: '',
    successMsg: ''
}

const signup = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_SIGNUP_PENDING': {
            state.error = []
            state.isLoading = true
            return { ...state }
        }
        case 'USER_SIGNUP_FULFILLED': {
            const { data } = action.payload
            state.isLoading = false
            state.message = data.message
            return { ...state }
        }
        case 'USER_SIGNUP_REJECTED': {
            const { data } = action.payload
            state.isLoading = false
            state.message = data.message
            return { ...state }
        }
        case 'DATA_REGISTER': {
            state.error = action.payload.error
            state.userData = action.payload.userData
            return { ...state }
        }
        case 'CLEAR_MESSAGE': {
            state.errorMsg = ""
            state.errMsg = ""
            state.message = ""
            return { ...state }
        }
        case 'ADD_CODE': {
            state.userData.code = action.payload.code
            return { ...state }
        }
        default: {
            return { ...state }
        }
    }
}

export default signup