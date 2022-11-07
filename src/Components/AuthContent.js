import React from "react";
import Logo from "./assets/images/color-logo.png";
import AuthLogo from "./AuthLogo";
import Col from "./Col";

export default function AuthContent({ children }) {
  return (
    <Col className="col-lg-6 d-none d-sm-block">
      <div>
        <AuthLogo image={Logo} alt="LoginPage" size="50" />
        <h5 className="font-14 text-muted mb-4">
          Smart Wallet For Personal Income Expance Tracker
        </h5>
        {children}
      </div>
    </Col>
  );
}
