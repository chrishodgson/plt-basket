import { combineReducers } from 'redux';
import productsReducer from "./productsReducer";
import { reducer as reduxForm } from "redux-form";

export default combineReducers({
  products: productsReducer,
  form: reduxForm
});
