import React, { useContext, useEffect, useReducer } from "react";
import {
  ADD_ACCOUNT,
  ADD_EXPANCE,
  ADD_INCOME,
  DELETE_ACCOUNT,
  DELETE_EXPENCE,
  DELETE_INCOME,
} from "./ActionType";
import AppReducer from "./AppReducer";

//Initial State for Application
const initialState = {
  incomeTransction: JSON.parse(localStorage.getItem("incomeTransction")) || [],
  expenceTransction:
    JSON.parse(localStorage.getItem("expenceTransction")) || [],
  accountList: JSON.parse(localStorage.getItem("accountList")) || [],
  acc_balance: [
    { balance_id: 1, id: 1, acc_number: 230269, acc_name: "Aminul Islam" },
  ],
};

export const GlobalContext = React.createContext();

export function useGlobalState() {
  return useContext(GlobalContext);
}

export function GlobaContextProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem(
      "incomeTransction",
      JSON.stringify(state.incomeTransction)
    );
    localStorage.setItem(
      "expenceTransction",
      JSON.stringify(state.expenceTransction)
    );
    localStorage.setItem("accountList", JSON.stringify(state.accountList));
  });
  //Add Income Function
  const addIncome = (incomeTransction) => {
    dispatch({
      type: ADD_INCOME,
      payload: incomeTransction,
    });
  };

  //Add Expance Transction Function
  const addExpence = (expenceTransction) => {
    dispatch({
      type: ADD_EXPANCE,
      payload: expenceTransction,
    });
  };
  //Add Account Function
  const addAccount = (account) => {
    dispatch({
      type: ADD_ACCOUNT,
      payload: account,
    });
  };

  //Delete Income  function
  const deleteIncome = (id) => {
    dispatch({
      type: DELETE_INCOME,
      payload: id,
    });
  };
  //Delete Expence  function
  const deleteExpence = (id) => {
    dispatch({
      type: DELETE_EXPENCE,
      payload: id,
    });
  };
  //Delete Account  function
  const deleteAccount = (id) => {
    dispatch({
      type: DELETE_ACCOUNT,
      payload: id,
    });
  };
  const value = {
    incomeTransction: state.incomeTransction,
    expenceTransction: state.expenceTransction,
    accountList: state.accountList,
    addIncome,
    addExpence,
    addAccount,
    deleteIncome,
    deleteExpence,
    deleteAccount,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
