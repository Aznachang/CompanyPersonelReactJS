export default function reducer(state={
    company: {
      id: null,
      name: null,
      address: null,
      revenue: null,
      phone: null
    },
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "ADD_A_COMPANY": {
        return {...state, fetching: true}
      }
      case "ADD_A_COMPANY_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "ADD_A_COMPANY_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          company: action.payload,
        }
      }
      case "UPDATE_COMPANY": {
        return {
          ...state,
          company: {...state, company: action.payload},
        }
      }
    }

    return state;
}
