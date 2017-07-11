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
      case "FETCH_COMPANY": {
        return {...state, fetching: true}
      }
      case "FETCH_COMPANY_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_COMPANY_FULFILLED": {
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
          user: {...state.company, name: action.payload},
        }
      }
    }

    return state;
}
