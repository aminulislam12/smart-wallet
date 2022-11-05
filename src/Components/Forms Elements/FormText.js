import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function FormText() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      {path === "/login" ? (
        <div className="form-group m-t-10 mb-0 row">
          <div className="col-sm-7 m-t-20">
            <NavLink to="/recoverpw" className="text-muted">
              <i className="mdi mdi-lock"></i> Forgot your password?
            </NavLink>
          </div>

          <div className="col-sm-5 m-t-20">
            <NavLink to="/register" className="text-muted">
              <i className="mdi mdi-account-circle"></i> Create an account
            </NavLink>
          </div>
        </div>
      ) : (
        <div className="form-group m-t-10 mb-0 row">
          <div className="col-12 m-t-20 text-center">
            <NavLink to="/login" className="text-muted">
              Already have account?
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
}
