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

export function addACompany() {
  return (dispatch) => {
    dispatch({type:"ADD_A_COMPANY"});
    axios.post("/companies")
      .then((res) => {
        dispatch({type: "ADD_A_COMPANY_FULFILLED", payload: res.data})
      })
      .catch((err) => {
        dispatch({type: "ADD_A_COMPANY_REJECTED", payload: err})
      });
  }
}

  // store.dispatch((dispatch) => {
  //   dispatch({type: "FETCH_COMPANIES"});
  //   axios.get('/companies')
  //     .then((res) => {
  //       dispatch({type: "RECEIVE_COMPANIES", payload: res.data});
  //     })
  //     .catch((err) => {
  //       dispatch({type:"FETCH_COMPANIES_ERROR",  payload: err});
  //     });
  // });
