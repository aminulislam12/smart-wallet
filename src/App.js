import React from "react";
import Container from "./Components/Container";
import Layout from "./Components/Layout";
import SideBarMenu from "./Components/SideBarMenu";
import "./Components/Styles/icons.css";
import TopBar from "./Components/TopBar";
import DeshBoard from "./pages/DeshBoard";

export default function App() {
  return (
    <>
      <Layout>
        <SideBarMenu />
        <Container>
          <TopBar />
          <DeshBoard />
        </Container>
      </Layout>
    </>
  );
}
