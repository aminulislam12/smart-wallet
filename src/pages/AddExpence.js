import React from "react";
import { useHistory } from "react-router-dom";
import AddExpanceForm from "../Components/AddExpanceForm";
import Button from "../Components/Button";
import Col from "../Components/Col";
import ContentWrapper from "../Components/ContentWrapper";
import PageTitle from "../Components/PageTitle";

export default function AddExpance() {
  const history = useHistory();

  const handlePush = () => {
    history.push("/expanceList");
  };
  return (
    <>
      <ContentWrapper>
        <PageTitle text="ADD Expance">
          <Col className="col-md-4">
            <div className="float-right d-none d-md-block">
              <Button
                className="btn btn-primary text-white"
                type="button"
                onClick={handlePush}
              >
                <i className="far fa-list-alt mr-1"></i> Expance List
              </Button>
            </div>
          </Col>
        </PageTitle>
        <AddExpanceForm />
      </ContentWrapper>
    </>
  );
}
