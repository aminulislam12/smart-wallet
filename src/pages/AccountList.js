import React from "react";
import AccountTable from "../Components/AccountTable";
import Container from "../Components/Container";
import ContentWrapper from "../Components/ContentWrapper";
import ExportButton from "../Components/ExportButton";
import Layout from "../Components/Layout";
import PageTitle from "../Components/PageTitle";
import SideBarMenu from "../Components/SideBarMenu";
import TopBar from "../Components/TopBar";

export default function IncomeList() {
  return (
    <Layout>
      <SideBarMenu />
      <Container>
        <TopBar />
        <ContentWrapper>
          <PageTitle text="Account List">
            <ExportButton />
          </PageTitle>
          <AccountTable />
        </ContentWrapper>
      </Container>
    </Layout>
  );
}
