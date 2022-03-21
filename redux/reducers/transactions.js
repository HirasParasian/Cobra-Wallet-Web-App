const initialState = {
    transferAmount: 0,
    balanceLeft: 0,
    dateTime: '',
    notes: '',
  
    loading: false,
    error: '',
    success: '',
  
    showModal: false,
  }
  
  const transaction = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_TRANSFER_AMOUNT':
        return {
          ...state,
          transferAmount: action.payload,
        }
      case 'SET_BALANCE_LEFT':
        return {
          ...state,
          balanceLeft: action.payload,
        }
      case 'SET_DATE_TIME':
        return {
          ...state,
          dateTime: action.payload,
        }
      case 'SET_NOTES':
        return {
          ...state,
          notes: action.payload,
        }
  
      case 'SEND_MONEY_PENDING': {
        state.loading = true
        state.error = ''
        state.success = ''
        return {...state}
      }
  
      case 'SEND_MONEY_FULFILLED': {
        const {success, message} = action.payload.data
        if (!success) {
          state.error = action.payload.message
          state.loading = false
          return {...state}
        }
        state.success = message
        state.loading = false
        return {...state}
      }
  
      case 'SEND_MONEY_REJECTED': {
        state.loading = false
        if (!action.payload.response) {
          state.error = action.payload.message
        } else {
          state.error = action.payload.response.data.message
        }
        return {...state}
      }
  
      case 'CLEAR_TRANSACTION': {
        return state
      }
  
      case 'SHOW_MODAL': {
        state.showModal = action.payload
        return { ...state }
      }
  
      default:
        return state
    }
  }
  
  export default transaction;