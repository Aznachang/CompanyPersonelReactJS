export default function reducer(state={
    importedEmployees: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

  // All Action-Types for companyList!
  switch (action.type) {
    case "IMPORT_EMPLOYEES" : {
      return Object.assign({}, fetching: true});
    }
    case "IMPORT_EMPLOYEES_REJECTED" : {
      return Object.assign({}, fetching: false, error: action.payload});
    }
    case "IMPORT_EMPLOYEES_FULFILLED": {
      return Object.assign({},
        fetching: false,
        fetched: true,
        importedEmployees: action.payload
      });
    }
  } // end of switch

  return state;
}
