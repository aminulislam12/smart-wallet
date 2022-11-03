import React from "react";
import ContentWrapper from "../Components/ContentWrapper";
import ExpanceTnxTable from "../Components/ExpanceTnxTable";
import ExportButton from "../Components/ExportButton";
import PageTitle from "../Components/PageTitle";

export default function IncomeList() {
  return (
    <ContentWrapper>
      <PageTitle text="Expance Transction">
        <ExportButton />
      </PageTitle>
      <ExpanceTnxTable />
    </ContentWrapper>
  );
}
