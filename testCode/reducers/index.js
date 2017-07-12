import { combineReducers } from "redux";
import companyList from "./companyListReducer.js";
import importCompanyList from "./importCompaniesReducer.js";
import { routerReducer} from 'react-router-redux';
//import company from "./companyReducer.js";
//import companyPeopleList from "./companyPeopleListReducer.js";
//import person from "./personReducer.js";

export default combineReducers({
  companyList,
  importCompanyList,
  routing: routerReducer//,
 // company,
  //companyPeopleList,
  //person
});