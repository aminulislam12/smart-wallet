import React from "react";
import { useHistory } from "react-router-dom";
import AddAccountForm from "../Components/AddAccountForm";
import Button from "../Components/Button";
import Col from "../Components/Col";
import ContentWrapper from "../Components/ContentWrapper";
import PageTitle from "../Components/PageTitle";

export default function AddAccount() {
  const history = useHistory();

  const handlePush = () => {
    history.push("/accountList");
  };
  return (
    <>
      <ContentWrapper>
        <PageTitle text="ADD Account">
          <Col className="col-md-4">
            <div className="float-right d-none d-md-block">
              <Button
                className="btn btn-primary text-white"
                type="button"
                onClick={handlePush}
              >
                <i className="far fa-list-alt mr-1"></i> Account List
              </Button>
            </div>
          </Col>
        </PageTitle>
        <AddAccountForm />
      </ContentWrapper>
    </>
  );
}
