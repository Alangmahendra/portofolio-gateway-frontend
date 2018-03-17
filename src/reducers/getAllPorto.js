const initialState = {
  isLoading: false,
  isError: false,
  getPortosDone: []
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
        isError: true,
        isLoading: false
      }
    case 'SUCCESS':
      return {
        ...state,
        getPortosDone: action.payload,
        isLoading: false,
        isError: false
      }
    default:
      return state
  }
}