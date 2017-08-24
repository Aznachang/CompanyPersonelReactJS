export default function employeeListReducer(state={
    employees: [],
    empCompanyId: null,
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
      console.log('### fetch_employees_fulfilled- empCompanyId: ' +action.empCompanyId);
      return Object.assign({}, state, {
        fetching: false,
        fetched: true,
        employees: action.payload,
        empCompanyId: action.empCompanyId
      });
    }
    //@@router/
    case "EMPLOYEES_LOCATION_CHANGE": {
      console.log('@@@@ empCompanyId: ' +action.empCompanyId);
      return Object.assign({},state,
        //{fetching: true,
        {empCompanyId: action.empCompanyId,

      });
    }

  } // end of switch cases
  return state;
}
