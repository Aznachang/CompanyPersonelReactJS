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
