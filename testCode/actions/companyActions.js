import axios from "axios";

export function fetchCompanyList() {
  return (dispatch) => {
    dispatch({type:"FETCH_COMPANIES"});
    axios.get("/companies")
      .then((res) => {
        dispatch({type: "FETCH_COMPANIES_FULFILLED", payload: res.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_COMPANIES_REJECTED", payload: err})
      })
  }
}

export function importCompanies() {
  return (dispatch) => {
    dispatch({type:"IMPORT_COMPANIES"});
    axios.get("/importCompanies")
      .then((res) => {
        dispatch({type: "IMPORT_COMPANIES_FULFILLED", payload: res.data})
      })
      // call fetch_Companies again
      .then(() => {
        dispatch({type:"FETCH_COMPANIES"});
        axios.get("/companies")
          .then((res) => {
            dispatch({type: "FETCH_COMPANIES_FULFILLED", payload: res.data})
          })
          .catch((err) => {
            dispatch({type: "FETCH_COMPANIES_REJECTED", payload: err})
          })
      })
      .catch((err) => {
        dispatch({type: "IMPORT_COMPANIES_REJECTED", payload: err})
      })
  }
}

/** FETCH ONE COMPANY'S DETAILS **/
export function fetchACompany(id) {

  return (dispatch) => {
    console.log('**** action-fetchACompany-id: '+id);
    dispatch({type:"FETCH_COMPANY"});
    axios.get('/companies/'+id)
      .then((res) => {
        dispatch({type: "FETCH_COMPANY_FULFILLED", payload: res.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_COMPANY_REJECTED", payload: err})
      })
  }
}

export function fetchACompanyLocChange(id) {
  return (dispatch) => {
    console.log('%%%% action-fetchACompany-id: '+id);
    dispatch({type:"COMPANY_LOCATION_CHANGE"});
    axios.get('/companies/'+id)
      .then((res) => {
        dispatch({type: "FETCH_COMPANY_FULFILLED", payload: res.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_COMPANY_REJECTED", payload: err})
      })
  }
}

export function addACompany(company) {
  return (dispatch) => {
    dispatch({
      type:"ADD_A_COMPANY",
      payload: axios.post("/companies", company)
      .then((res) => {
        fetchCompanyList();
      })
      .catch((err) => {
        dispatch({type: "ADD_A_COMPANY_REJECTED", payload: err})
      }),
    });
  }
}
