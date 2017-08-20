export default function employeeListReducer(state={
    employees: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

  // All Action-Types for companyList!
  switch (action.type) {
    case "FETCH_EMPLOYEES" : {
      return Object.assign({}, state, {fetching: true});
    }
    case "FETCH_EMPLOYEES_REJECTED" : {
      return Object.assign({}, state, {
        fetching: false,
        error: action.payload
      });
    }
    case "FETCH_EMPLOYEES_FULFILLED": {
      return Object.assign({}, state, {
        fetching: false,
        fetched: true,
        companies: action.payload
      });
    }
    //@@router/
    case "EMPLOYEES_LOCATION_CHANGE": {
      return Object.assign({},state, {fetching: true});
    }

  } // end of switch cases

  return state;
}
