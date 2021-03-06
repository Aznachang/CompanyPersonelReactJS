export default function employeeListReducer(state={
    employees: [],
    empCompanyId: null,
    fetching: false,
    fetched: false,
    adding: false,
    added: false,
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

    /**** ADD AN EMPLOYEE ****/
    case "ADD_AN_EMPLOYEE": {
      return Object.assign({},state, {adding: true});
    }
    case "ADD_AN_EMPLOYEE_REJECTED": {
      return Object.assign({},state, {
        adding: false,
        error: action.payload
      });
    }
    case "ADD_AN_EMPLOYEE_FULFILLED": {
      return Object.assign({}, state, {
        adding: false,
        added: true,
        company: action.payload,
      });
    }

  } // end of switch cases
  return state;
}
