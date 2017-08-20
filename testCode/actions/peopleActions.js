export function addAnEmployee(employee) {
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
export function importEmployees(id) {
  return (dispatch) => {
    dispatch({type:"IMPORT_Employees"});
    axios.get("/importPeopleForCompany/"+id)
      .then((res) => {
        dispatch({type: "IMPORT_COMPANIES_FULFILLED", payload: res.data})
      })
      // call fetch_Companies
      .then(() => {
        dispatch({type:"FETCH_EMPLOYEES"});
        axios.get("/companies/"+id+"/people")
          .then((res) => {
            dispatch({type: "FETCH_EMPLOYEES_FULFILLED", payload: res.data})
          })
          .catch((err) => {
            dispatch({type: "FETCH_EMPLOYEES_REJECTED", payload: err})
          })
      })
      .catch((err) => {
        dispatch({type: "IMPORT_EMPLOYEES_REJECTED", payload: err})
      })
  }
}

export function fetchEmployees(id) {
  return (dispatch) => {
    dispatch({type:"FETCH_EMPLOYEES"});
    axios.get('/companies/'+id+'/people')
      .then((res) => {
        dispatch({type: "FETCH_EMPLOYEES_FULFILLED", payload: res.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_EMPLOYEES_REJECTED", payload: err})
      })
  }
}

export function fetchEmployeesLocChange(id) {
  return (dispatch) => {
    dispatch({type:"EMPLOYEES_LOCATION_CHANGE"});
    axios.get('/companies/'+id+'/people')
      .then((res) => {
        dispatch({type: "FETCH_EMPLOYEES_FULFILLED", payload: res.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_EMPLOYEES_REJECTED", payload: err})
      })
  }
}