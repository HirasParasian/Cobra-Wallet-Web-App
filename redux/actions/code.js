const initialState = {
    code: ''
}

const code = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_CODE': {
            state.code = action.payload.code
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