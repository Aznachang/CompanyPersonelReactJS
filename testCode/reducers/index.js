import { combineReducers } from "redux";
import { routerReducer} from 'react-router-redux';

/**** Modular Reducers ****/
import companyList from "./companyListReducer.js";
import importCompanyList from "./importCompaniesReducer.js";
import companyDetail from './companyReducer.js';
//import company from "./companyReducer.js";
//import companyPeopleList from "./companyPeopleListReducer.js";
//import person from "./personReducer.js";

export default combineReducers({
  companyList,
  importCompanyList,
  companyDetail,
  routing: routerReducer//,
 // company,
  //companyPeopleList,
  //person
});