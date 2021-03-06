import axios from "axios";

export function addAnEmployee(employee) {
  return (dispatch) => {
    dispatch({type:"ADD_AN_EMPLOYEE"});

     axios.post("/person", employee)
      .then((res) => {
        dispatch({type: "ADD_AN_EMPLOYEE_FULFILLED", payload: res.data})
      })
      .catch((err) => {
        dispatch({type: "ADD_AN_EMPLOYEE_REJECTED", payload: err})
      })
  }
}
export function importEmployees(id) {
  return (dispatch) => {
    dispatch({type:"IMPORT_EMPLOYEES"});
    axios.get("/importPeopleForCompany/"+id)
      .then((res) => {
        dispatch({type: "IMPORT_EMPLOYEES_FULFILLED", payload: res.data})
      })
      //call fetch_Employees
      .then(() => {
        dispatch({type:"FETCH_EMPLOYEES"});
        axios.get("/companies/"+id+"/people")
          .then((res) => {
            dispatch({type: "FETCH_EMPLOYEES_FULFILLED", payload: res.data, empCompanyId: id})
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
        dispatch({type: "FETCH_EMPLOYEES_FULFILLED", payload: res.data, empCompanyId: id})
      })
      .catch((err) => {
        dispatch({type: "FETCH_EMPLOYEES_REJECTED", payload: err})
      })
  }
}

export function fetchEmployeesLocChange(id) {
  return (dispatch) => {
    //here we pass the id argument as empCompanyID and map it to props later
    dispatch({type:"EMPLOYEES_LOCATION_CHANGE",
      empCompanyId: id
    });
  }
}