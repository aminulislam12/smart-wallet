import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Components/Styles/icons.css";
import AccountList from "./pages/AccountList";
import AddAccount from "./pages/AddAccount";
import AddExpance from "./pages/AddExpence";
import AddIncome from "./pages/AddIncome";
import DeshBoard from "./pages/DeshBoard";
import ExpanceList from "./pages/ExpanceList";
import IncomeList from "./pages/IncomeList";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

export default function App() {
  document.title = "Smart Wallet for Personal Use";
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={DeshBoard} />
        <Route path="/accountList" exact component={AccountList} />
        <Route path="/addAccount" exact component={AddAccount} />
        <Route path="/addExpance" exact component={AddExpance} />
        <Route path="/expanceList" exact component={ExpanceList} />
        <Route path="/addIncome" exact component={AddIncome} />
        <Route path="/incomeList" exact component={IncomeList} />
        <Route path="/register" exact component={SignUpPage} />
        <Route path="/login" exact component={LoginPage} />
      </Switch>
    </Router>
  );
}
