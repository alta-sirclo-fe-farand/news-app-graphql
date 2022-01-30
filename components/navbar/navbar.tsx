import React from "react";
import { Nav, Button } from "react-bootstrap";
import Link from "next/link";

export default function Navbar() {
  return (
    <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-xl">
        <Link href="/">
          <a className="navbar-brand">News App</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-expanded="false"
          aria-controls="navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/write">
                <a className="nav-link">Write</a>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              <Button className="nav-link">Signup</Button>
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  );
}
