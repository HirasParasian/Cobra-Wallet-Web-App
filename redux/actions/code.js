const initialState = {
    code: '',
    newCode: '',
}

const code = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_CODE': {
            state.code = action.payload.code
            return { ...state }
        }
        case 'NEW_CODE': {
            state.newCode = action.payload.newCode
            return { ...state }
        }
        case 'RESET_CODE': {
            state = initialState
            return { ...state }
        }
        default: {
            return { ...state }
        }
    }
}

export default code