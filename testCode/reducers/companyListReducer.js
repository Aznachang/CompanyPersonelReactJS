export default function companyListReducer(state={
    /**** GET ****/
    companies: [],
    fetching: false,
    fetched: false,
    /**** POST ****/
    adding: false,
    added: false,
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

    /**** ADD A COMPANY ****/
    case "ADD_A_COMPANY": {
      return Object.assign({},state, {fetching: true, adding: true});
    }
    case "ADD_A_COMPANY_REJECTED": {
      return Object.assign({},state, {fetching: false, adding: false, error: action.payload});
    }
    case "ADD_A_COMPANY_FULFILLED": {
      return Object.assign({}, state, {
        //fetching: false,
        //fetched: true,
        adding: false,
        added: true,
        company: action.payload,
      });
    }
  } // end of switch cases

  return state;
}
