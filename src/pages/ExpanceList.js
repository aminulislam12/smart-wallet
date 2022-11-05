import React from "react";
import Container from "../Components/Container";
import ContentWrapper from "../Components/ContentWrapper";
import ExpanceTnxTable from "../Components/ExpanceTnxTable";
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
          <PageTitle text="Expance Transction">
            <ExportButton />
          </PageTitle>
          <ExpanceTnxTable />
        </ContentWrapper>
      </Container>
    </Layout>
  );
}
