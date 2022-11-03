import React from "react";
import AccountTable from "../Components/AccountTable";
import ContentWrapper from "../Components/ContentWrapper";
import ExportButton from "../Components/ExportButton";
import PageTitle from "../Components/PageTitle";

export default function IncomeList() {
  return (
    <ContentWrapper>
      <PageTitle text="Account List">
        <ExportButton />
      </PageTitle>
      <AccountTable />
    </ContentWrapper>
  );
}
