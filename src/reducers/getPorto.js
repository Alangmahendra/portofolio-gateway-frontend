const initialState = {
  isLoading: false,
  isError: false,
  getPortoSuccess: {}
}

export default function allPortos(state = { ...initialState }, action) {
  switch (action.type) {
    case 'LOAD':
      return {
        ...state,
        isLoading: true
      }
    case 'ERROR':
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    case 'SUCCESS':
      return {
        ...state,
        getPortoSuccess: action.payload,
        isLoading: false,
        isError: false
      }
    default:
      return state
  }
}