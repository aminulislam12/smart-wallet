/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Analytics from "../Components/Analytics";
import Container from "../Components/Container";
import ContentWrapper from "../Components/ContentWrapper";
import DataCard from "../Components/DataCard";
import LatestTrasaction from "../Components/LatestTrasaction";
import Layout from "../Components/Layout";
import PageTitle from "../Components/PageTitle";
import SideBarMenu from "../Components/SideBarMenu";
import TopBar from "../Components/TopBar";

export default function DeshBoard() {
  return (
    <Layout>
      <SideBarMenu />
      <Container>
        <TopBar />
        <ContentWrapper>
          <PageTitle text="DASHBOARD" />
          <DataCard />
          <Analytics />
          <LatestTrasaction />
        </ContentWrapper>
      </Container>
    </Layout>
  );
}
