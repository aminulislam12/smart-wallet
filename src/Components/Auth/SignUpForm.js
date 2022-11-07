import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import Alert from "../Alert";
import Logo from "../assets/images/color-logo.png";
import AuthLogo from "../AuthLogo";
import Card from "../Card";
import CardBody from "../CardBody";
import Col from "../Col";
import CustomSubmitBtn from "../Forms Elements/CustomSubmitBtn";
import Form from "../Forms Elements/Form";
import FormText from "../Forms Elements/FormText";
import Input from "./Input";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfrimPass] = useState("");

  const [error, setError] = useState();
  const [loadding, setLoadding] = useState();

  const { signUp } = useAuth();
  const history = useHistory();

  async function submitHandle(e) {
    e.preventDefault();
    //Validation
    if (password !== confrimPassword) {
      return setError("Password don't Match!");
    }
    try {
      setError("");
      setLoadding(true);
      await signUp(email, password, name);
      history.push("/");
    } catch (err) {
      setError(err.message);
      console.log(err);
      setLoadding(false);
    }
    resetForm();
  }

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
          {error && <Alert text={error} />}
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
              <CustomSubmitBtn disabled={loadding} />
            </Form>
            <FormText />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}
