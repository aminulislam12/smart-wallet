import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/color-logo.png";
import AuthLogo from "../AuthLogo";
import Card from "../Card";
import CardBody from "../CardBody";
import Col from "../Col";
import CheckBox from "../Forms Elements/CheckBox";
import CustomSubmitBtn from "../Forms Elements/CustomSubmitBtn";
import Form from "../Forms Elements/Form";
import FormText from "../Forms Elements/FormText";
import Input from "./Input";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfrimPass] = useState("");
  const [agree, setAgree] = useState(false);

  const submitHandle = (e) => {
    e.preventDefault();
    console.log({ name, email, password, confrimPassword, agree });
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfrimPass("");
  };
  return (
    <Col className="col-lg-5 offset-lg-1">
      <Card className="mb-0">
        <CardBody>
          <div className="p-2">
            <h4 className="text-muted float-right font-18 mt-4">SignUp</h4>
            <AuthLogo image={Logo} alt="LoginLogos" size="40" />
          </div>
          <div className="p-2">
            <Form onSubmit={submitHandle}>
              <Input
                type="text"
                placeholder="Enter Your Name"
                col="12"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                type="email"
                placeholder="Enter Your Email..."
                col="12"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                type="password"
                placeholder="Enter Your Password"
                col="12"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Input
                type="password"
                placeholder="Confrim Password"
                col="12"
                value={confrimPassword}
                onChange={(e) => setConfrimPass(e.target.value)}
                required
              />
              <CheckBox
                col="12"
                text="I accept"
                value={agree}
                onChange={(e) => setAgree(e.target.value)}
              >
                <NavLink to="/terms" className="text-primary">
                  Terms and Conditions
                </NavLink>
              </CheckBox>

              <CustomSubmitBtn />
            </Form>
            <FormText />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}
