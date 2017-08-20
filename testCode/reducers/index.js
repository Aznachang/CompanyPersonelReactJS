import { combineReducers } from "redux";
import { routerReducer} from 'react-router-redux';

/**** Modular Reducers ****/
import companyList from "./companyListReducer.js";
import importCompanyList from "./importCompaniesReducer.js";
import companyDetail from './companyReducer.js';
import companyEmployeeList from "./companyPeopleListReducer.js";
import employee from "./personReducer.js";

export default combineReducers({
  companyList,
  importCompanyList,
  companyDetail,
  companyEmployeeList,
  employee,
  routing: routerReducer
});