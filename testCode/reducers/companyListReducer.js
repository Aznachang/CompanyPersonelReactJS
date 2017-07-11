// const initialState = {
//   fetching: false,
//   fetched: false,
//   companies: [],
//   error: null,
// }

export default function reducer(state={
    companies: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

  // All Action-Types for companyList!
  switch (action.type) {
    case "FETCH_COMPANIES" : {
      return {...state, fetching: true}
    }
    case "FETCH_COMPANIES_REJECTED" : {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_COMPANIES_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        companies: action.payload
      }
    }
  } // end of switch

  return state;
}
