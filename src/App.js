import React from "react";
import Container from "./Components/Container";
import DeshBoard from "./Components/DeshBoard";
import Layout from "./Components/Layout";
import SideBarMenu from "./Components/SideBarMenu";
import "./Components/Styles/icons.css";
import TopBar from "./Components/TopBar";

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
