const initialState = {
  fetching: false,
  fetched: false,
  companies: [],
  error: null,
}

export default function reducer(state = initialState, action) => {
  // All Action-Types for companyList!
  switch (action.type) {
    case "FETCH_COMPANIES" : {
      return {...state, fetching: true}
      break;
    }
    case "FETCH_COMPANIES_REJECTED" : {
      return {...state, fetching: false, error: action.payload}
      break;
    }
    case "FETCH_COMPANIES_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        companies: action.payload
      }
    }
  }

  return state;
}
