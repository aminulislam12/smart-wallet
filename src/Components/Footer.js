import React from "react";

export default function Footer() {
  const date = new Date();
  return (
    <>
      <footer className="footer">
        © {date.getFullYear()} Smart Wallet
        <span className="d-none d-md-inline-block">
          - Crafted with <i className="mdi mdi-heart text-danger"></i> by Aminul
          Islam.
        </span>
      </footer>
    </>
  );
}
