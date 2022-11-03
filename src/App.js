import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "./Components/Container";
import Layout from "./Components/Layout";
import SideBarMenu from "./Components/SideBarMenu";
import "./Components/Styles/icons.css";
import TopBar from "./Components/TopBar";
import AccountList from "./pages/AccountList";
import AddAccount from "./pages/AddAccount";
import AddExpance from "./pages/AddExpence";
import AddIncome from "./pages/AddIncome";
import DeshBoard from "./pages/DeshBoard";
import ExpanceList from "./pages/ExpanceList";
import IncomeList from "./pages/IncomeList";

export default function App() {
  document.title = "Smart Wallet for Personal Use";
  return (
    <Router>
      <Layout>
        <SideBarMenu />
        <Container>
          <TopBar />
          <Route path="/" exact component={DeshBoard} />
          <Route path="/addIncome" exact component={AddIncome} />
          <Route path="/incomeList" exact component={IncomeList} />
          <Route path="/addExpance" exact component={AddExpance} />
          <Route path="/expanceList" exact component={ExpanceList} />
          <Route path="/addAccount" exact component={AddAccount} />
          <Route path="/accountList" exact component={AccountList} />
        </Container>
      </Layout>
    </Router>
  );
}
