import React from "react";
import { useHistory } from "react-router-dom";
import AddIncomeForm from "../Components/AddIncomeForm";
import Button from "../Components/Button";
import Col from "../Components/Col";
import ContentWrapper from "../Components/ContentWrapper";
import PageTitle from "../Components/PageTitle";

export default function AddIncome() {
  const history = useHistory();

  const handlePush = () => {
    history.push("/incomeList");
  };
  return (
    <>
      <ContentWrapper>
        <PageTitle text="ADD INCOME">
          <Col className="col-md-4">
            <div className="float-right d-none d-md-block">
              <Button
                className="btn btn-primary text-white"
                type="button"
                onClick={handlePush}
              >
                <i className="far fa-list-alt mr-1"></i> Income List
              </Button>
            </div>
          </Col>
        </PageTitle>
        <AddIncomeForm />
      </ContentWrapper>
    </>
  );
}
