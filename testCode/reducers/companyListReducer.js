export default function companyReducer(state={
    employees: [],
    companies: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

  // All Action-Types for companyList!
  switch (action.type) {
    case "FETCH_COMPANIES" : {
      return Object.assign({}, state, {fetching: true});
    }
    case "FETCH_COMPANIES_REJECTED" : {
      return Object.assign({}, state, {
        fetching: false,
        error: action.payload
      });
    }
    case "FETCH_COMPANIES_FULFILLED": {
      return Object.assign({}, state, {
        fetching: false,
        fetched: true,
        companies: action.payload
      });
    }
  } // end of switch cases

  return state;
}
