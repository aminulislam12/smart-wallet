/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Analytics from "../Components/Analytics";
import ContentWrapper from "../Components/ContentWrapper";
import DataCard from "../Components/DataCard";
import PageTitle from "../Components/PageTitle";
import TableResponsive from "../Components/TableResponsive";

export default function DeshBoard() {
  return (
    <>
      <ContentWrapper>
        <PageTitle text="DASHBOARD" />
        <DataCard />
        <Analytics />
        <TableResponsive />
      </ContentWrapper>
    </>
  );
}
