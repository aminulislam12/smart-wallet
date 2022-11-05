import React, { useState } from "react";
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

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
    console.log({ email, password });
    resetForm();
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };
  return (
    <Col className="col-lg-5 offset-lg-1">
      <Card className="mb-0">
        <CardBody>
          <div className="p-2">
            <h4 className="text-muted float-right font-18 mt-4">LogIn</h4>
            <AuthLogo image={Logo} alt="LoginLogos" size="40" />
          </div>
          <div className="p-2">
            <Form onSubmit={submitHandle}>
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
              <CheckBox col="12" text="Remember me" />
              <CustomSubmitBtn />
            </Form>
            <FormText />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}
