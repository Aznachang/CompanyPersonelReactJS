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
      // call fetch_Companies
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
export function fetchACompany() {
  return (dispatch) => {
    dispatch({type:"FETCH_COMPANY"});
    // axios.get("/companies/:id")
    axios.get("/companies/59712e89ba0e26041b6a36db")
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
