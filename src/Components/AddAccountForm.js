import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { useGlobalState } from "../Context/GlobalState";
import Button from "./Button";
import Card from "./Card";
import CardBody from "./CardBody";
import Col from "./Col";
import ContentWrapper from "./ContentWrapper";
import Form from "./Forms Elements/Form";
import Input from "./Forms Elements/Input";
import Option from "./Forms Elements/Option";
import Select from "./Forms Elements/Select";
import Row from "./Row";

export default function AddAccountForm() {
  const { accountList, addAccount } = useGlobalState();
  const uuid = accountList.length + 1;

  const accountType = ["Select", "Bank", "MFS"];
  const MFSType = ["Select", "bKash", "Rocket", "Nagad"];

  //Form State
  const [accType, setAccType] = useState("Select");
  const [mfsType, setMfsType] = useState("Select");
  const [bankname, setBankName] = useState("");
  const [accName, setAccName] = useState("");
  const [accNum, setAccNumber] = useState("");
  const [errors, setErrors] = useState();

  const submitHandle = (e) => {
    e.preventDefault();
    try {
      if (accType === "Bank") {
        const newbankAccount = {
          id: uuid,
          acc_type: accType.toLowerCase(),
          bank_name: bankname,
          account_name: accName.toUpperCase(),
          acc_number: accNum,
          balance: (0).toFixed(2),
        };
        addAccount(newbankAccount);
      } else if (accType === "MFS") {
        const newMfsAccount = {
          id: uuid,
          acc_type: accType.toLowerCase(),
          bank_name: mfsType,
          account_name: accName.toUpperCase(),
          acc_number: accNum,
          balance: (0).toFixed(2),
        };
        addAccount(newMfsAccount);
      }
      console.log(errors);
    } catch (error) {
      console.log(error);
      setErrors("Faild to Add Account");
    }
    console.log({ accType, mfsType, bankname, accName, accNum });
    resetForm();
  };
  //Tostify

  const resetForm = () => {
    setAccType("Select");
    setAccName("");
    setAccNumber("");
    setBankName("");
    setAccType("");
    setErrors("");
  };
  return (
    <>
      <ContentWrapper>
        <Row>
          <Col className="col-xl-12">
            <Card className="m-b-30">
              <CardBody>
                <Form onSubmit={submitHandle}>
                  <Select
                    lable="Account Type"
                    value={accType}
                    onChange={(e) => setAccType(e.target.value)}
                    required
                  >
                    {accountType.map((opt) => (
                      <Option options={opt} key={Math.random()} value={opt} />
                    ))}
                  </Select>
                  {accType === "MFS" ? (
                    <Select
                      lable="MFS Name"
                      value={mfsType}
                      onChange={(e) => setMfsType(e.target.value)}
                    >
                      {MFSType.map((opt) => (
                        <Option options={opt} key={Math.random()} value={opt} />
                      ))}
                    </Select>
                  ) : null}
                  {accType === "Bank" ? (
                    <Input
                      lable="Bank Name"
                      placeholder="Enter Bank Name"
                      type="text"
                      value={bankname}
                      onChange={(e) => setBankName(e.target.value)}
                      col="10"
                    />
                  ) : null}
                  {accType === "Select" ? null : (
                    <>
                      <Input
                        lable="Account Name"
                        placeholder="Enter Account Name"
                        type="text"
                        value={accName}
                        onChange={(e) => setAccName(e.target.value)}
                        col="10"
                      />
                      <Input
                        lable="Account Number"
                        placeholder="Enter Account Number"
                        type="number"
                        value={accNum}
                        onChange={(e) => setAccNumber(e.target.value)}
                        col="10"
                        required
                      />
                    </>
                  )}
                  <div className="float-left mt-3">
                    <Button
                      disabled={accType === "Select" ? true : false}
                      className="btn btn-success"
                      type="submit"
                      // onClick={notify}
                    >
                      <i className="fas fa-plus-circle"></i> Add Account
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </ContentWrapper>
      <ToastContainer />
    </>
  );
}
