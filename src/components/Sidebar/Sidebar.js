import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Row, Col, Offcanvas } from "react-bootstrap";

function Sidebar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand={false} className="mb-3 cus-nav">
        <Container fluid>
          <Navbar.Brand className="" href="/">
            <div className="">
              <img
                className="img-fluid logo"
                src={require("../../assets/img/logo.png").default}
                alt=""
              />
            </div>
          </Navbar.Brand>
          <div className="sidiv text-right">
            <a
              href="https://opensea.io/collection/meta-monopoly"
              target="_blank"
              className="mx-2"
            >
              <img
                className="img-fluid si"
                src={require("../../assets/img/si/opensea.png").default}
                alt=""
              />
            </a>
            <a
              href="https://www.instagram.com/meta.monopoly/"
              target="_blank"
              className="mx-2"
            >
              <img
                className="img-fluid si"
                src={require("../../assets/img/si/ig.png").default}
                alt=""
              />
            </a>
            <a
              href="https://twitter.com/MetaMonopoly"
              target="_blank"
              className="mx-2"
            >
              <img
                className="img-fluid si"
                src={require("../../assets/img/si/twitter.png").default}
                alt=""
              />
            </a>
            <a
              href="https://www.tiktok.com/@metamonopoly"
              target="_blank"
              className="mx-2"
            >
              <img
                className="img-fluid si"
                src={require("../../assets/img/si/tiktok.png").default}
                alt=""
              />
            </a>
            <a
              href="https://t.me/metamonopolyofficial"
              target="_blank"
              className="mx-2"
            >
              <img
                className="img-fluid si"
                src={require("../../assets/img/si/telegram.png").default}
                alt=""
              />
            </a>
          </div>

          <Navbar.Toggle />
          <Navbar.Offcanvas className="bg-light" placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="text-dark">
                MetaMonopoly
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link className="nav-link text3 text-dark" to="/">
                  Home
                </Link>
                <a
                  className="nav-link text3 text-dark"
                  target="_blank"
                  href="https://links.metamonopoly.org/"
                >
                  Links
                </a>
                <a
                  className="nav-link text3 text-dark"
                  target="_blank"
                  href="https://whitepaper.metamonopoly.org/"
                >
                  Whitepaper
                </a>
                <Link className="nav-link text3 text-dark" to="/legal">
                  Legal
                </Link>
                <a
                  className="nav-link text3 text-dark"
                  target="_blank"
                  href="https://dao.metamonopoly.org/"
                >
                  Dao Paper
                </a>
                <Link className="nav-link text3 text-dark" to="/team">
                  The Team
                </Link>
                <Link className="nav-link text3 text-dark" to="/contact">
                  Contact Us
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Sidebar;
