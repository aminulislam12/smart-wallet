import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import Alert from "../Alert";
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

  const [error, setError] = useState("");
  const [loadding, setLoadding] = useState();
  const [mailvalidator, setEmailValidator] = useState("");
  // const [passvalidator, setPassValidator] = useState("");
  const { login } = useAuth();
  const history = useHistory();

  async function submitHandle(e) {
    e.preventDefault();
    try {
      setError("");
      setLoadding(true);
      await login(email, password);
      history.push("/");
    } catch (err) {
      setLoadding(false);
      console.log(err);
      setError(err.message);
    }
    resetForm();
  }

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  //E-mail Validator
  function emailvalidators() {
    let pattren = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let error = document.getElementById("error");
    if (email.match(pattren)) {
      setEmailValidator("E-Mail Address is Valid");
      error.classList.add("text-success");
      error.classList.remove("text-danger");
    } else {
      setEmailValidator("InValid Email Address!");
      error.classList.add("text-danger");
      error.classList.remove("text-success");
    }
  }
  //Password Validator
  // function passwordValidators() {
  //   let regex = new RegExp("^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8,}$");
  //   let error = document.getElementById("error");
  //   if (regex.test(password)) {
  //     setPassValidator("Valid Password!");
  //     error.classList.add("text-success");
  //     error.classList.remove("text-danger");
  //   } else {
  //     setPassValidator("Invalid Password!");
  //     error.classList.add("text-danger");
  //     error.classList.remove("text-success");
  //   }
  // }
  return (
    <Col className="col-lg-5 offset-lg-1">
      <Card className="mb-0">
        <CardBody>
          <div className="p-2">
            <h4 className="text-muted float-right font-18 mt-4">LogIn</h4>
            <AuthLogo image={Logo} alt="LoginLogos" size="40" />
          </div>
          {error && <Alert text={error} />}
          <div className="p-2">
            <Form onSubmit={submitHandle}>
              <Input
                type="email"
                placeholder="Enter Your Email..."
                col="12"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                errorTxt={mailvalidator}
                onKeyUp={emailvalidators}
              />
              <Input
                type="password"
                placeholder="Enter Your Password"
                col="12"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <CheckBox col="12" text="Remember Me" />
              <CustomSubmitBtn disabled={loadding} />
            </Form>
            <FormText />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}
