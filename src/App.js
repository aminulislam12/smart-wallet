import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./Components/Styles/icons.css";
import { AuthProvider } from "./Context/AuthContext";
import AccountList from "./pages/AccountList";
import AddAccount from "./pages/AddAccount";
import AddExpance from "./pages/AddExpence";
import AddIncome from "./pages/AddIncome";
import DeshBoard from "./pages/DeshBoard";
import ExpanceList from "./pages/ExpanceList";
import IncomeList from "./pages/IncomeList";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import PrivetRoute from "./Routes/PrivetRoute";
import PublicRoute from "./Routes/PublicRoute";

export default function App() {
  document.title = "Smart Wallet for Personal Use";

  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivetRoute path="/" exact component={DeshBoard} />
          <PrivetRoute path="/accountList" exact component={AccountList} />
          <PrivetRoute path="/addAccount" exact component={AddAccount} />
          <PrivetRoute path="/addExpance" exact component={AddExpance} />
          <PrivetRoute path="/expanceList" exact component={ExpanceList} />
          <PrivetRoute path="/addIncome" exact component={AddIncome} />
          <PrivetRoute path="/incomeList" exact component={IncomeList} />
          <PublicRoute path="/register" exact component={SignUpPage} />
          <PublicRoute path="/login" exact component={LoginPage} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}
