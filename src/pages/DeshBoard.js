/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Analytics from "../Components/Analytics";
import ContentWrapper from "../Components/ContentWrapper";
import DataCard from "../Components/DataCard";
import LatestTrasaction from "../Components/LatestTrasaction";
import PageTitle from "../Components/PageTitle";

export default function DeshBoard() {
  return (
    <>
      <ContentWrapper>
        <PageTitle text="DASHBOARD" />
        <DataCard />
        <Analytics />
        <LatestTrasaction />
      </ContentWrapper>
    </>
  );
}
