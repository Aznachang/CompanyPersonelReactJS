export default function companyReducer(state={
    company: {
      _id: null,
      name: null,
      address: null,
      revenue: null,
      phone: null
    },
    // get
    fetching: false,
    fetched: false,
    // post
    adding: false,
    added: false,
    error: null,
  }, action) {

  switch (action.type) {
    // /**** ADD A COMPANY ****/
    // case "ADD_A_COMPANY": {
    //   return Object.assign({},state, {fetching: true, adding: true});
    // }
    // case "ADD_A_COMPANY_REJECTED": {
    //   return Object.assign({},state, {fetching: false, adding: false, error: action.payload});
    // }
    // case "ADD_A_COMPANY_FULFILLED": {
    //   return Object.assign({}, state, {
    //     fetching: false,
    //     fetched: true,
    //     adding: false,
    //     added: true
    //     company: action.payload,
    //   });
    // }

    /**** UPDATE A COMPANY'S DETAILS ****/
    case "UPDATE_COMPANY": {
      return Object.assign({}, state, {company: action.payload});
      // return {
      //   ...state,
      //   company: {...state, company: action.payload},
      // }
    }

    /**** GET A COMPANY'S DETAILS ****/
    case "FETCH_COMPANY" : {
      return Object.assign({}, state, {fetching: true});
    }
    case "FETCH_COMPANY_REJECTED" : {
      return Object.assign({}, state, {
        fetching: false,
        error: action.payload
      });
    }
    case "FETCH_COMPANY_FULFILLED": {
      return Object.assign({}, state, {
        fetching: false,
        fetched: true,
        company: action.payload
      });
    }

    //@@router/
    case "COMPANY_LOCATION_CHANGE": {
      return Object.assign({},state, {});//{fetching: true});
    }
  } // end of switch cases
  return state;
}
