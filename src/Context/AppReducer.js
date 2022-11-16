import {
  ADD_ACCOUNT,
  ADD_EXPANCE,
  ADD_INCOME,
  DELETE_ACCOUNT,
  DELETE_EXPENCE,
  DELETE_INCOME,
} from "./ActionType";

/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
  switch (action.type) {
    case ADD_INCOME:
      return {
        ...state,
        incomeTransction: [action.payload, ...state.incomeTransction],
      };
    case ADD_EXPANCE:
      return {
        ...state,
        expenceTransction: [action.payload, ...state.expenceTransction],
      };
    case ADD_ACCOUNT:
      return {
        ...state,
        accountList: [action.payload, ...state.accountList],
      };
    case DELETE_INCOME:
      return {
        ...state,
        incomeTransction: state.incomeTransction.filter(
          (incomTnx) => incomTnx.id !== action.payload
        ),
      };
    case DELETE_EXPENCE:
      return {
        ...state,
        expenceTransction: state.expenceTransction.filter(
          (expenceTnx) => expenceTnx.id !== action.payload
        ),
      };
    case DELETE_ACCOUNT:
      return {
        ...state,
        accountList: state.accountList.filter(
          (account) => account.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
