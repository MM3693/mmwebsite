import React from "react";
import "./footer.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    // style={{ marginTop: "10rem" }}
    <>
      <div className="fordesk mt-5 py-5 mx-5 d-flex">
        <div className="h2 flink">
          <a
            href="https://galaxy.metamonopoly.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flinka"
          >
            Games
          </a>
        </div>
        <div className="h2 flink">
          <a
            href="https://links.metamonopoly.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flinka"
          >
            Links
          </a>
        </div>
        <div className="h2 flink">
          <a
            href="https://whitepaper.metamonopoly.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flinka"
          >
            Whitepaper
          </a>
        </div>
        <div className="h2 flink">
          <Link
            to="/legal"
            target="_blank"
            rel="noopener noreferrer"
            className="flinka"
          >
            Legal
          </Link>
        </div>
        <div className="h2 flink">
          <Link
            to="/team"
            target="_blank"
            rel="noopener noreferrer"
            className="flinka"
          >
            Team
          </Link>
        </div>
        <div className="h2 flink">
          <Link
            to="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="flinka"
          >
            Contact
          </Link>
        </div>
      </div>

      <div className="formobile mt-5">
        <Container className="text-center" fluid>
          <Row>
            <Col
              className=" w-100"
              style={{ borderRight: "3px solid #737373" }}
            >
              <div className="mflink">
                <a
                  href="https://galaxy.metamonopoly.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flinka"
                >
                  Games
                </a>
              </div>
            </Col>
            <Col
              className=" w-100"
              style={{ borderRight: "3px solid #737373" }}
            >
              <div className="mflink">
                <a
                  href="https://links.metamonopoly.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flinka"
                >
                  Links
                </a>
              </div>
            </Col>
            <Col className=" w-100">
              <div className="mflink">
                <a
                  href="https://whitepaper.metamonopoly.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flinka"
                >
                  Whitepaper
                </a>
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="w-100" style={{ borderRight: "3px solid #737373" }}>
              <div className="mflink">
                <Link
                  to="/legal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flinka"
                >
                  Legal
                </Link>
              </div>
            </Col>
            <Col
              className=" w-100"
              style={{ borderRight: "3px solid #737373" }}
            >
              <div className="mflink">
                <Link
                  to="/team"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flinka"
                >
                  Team
                </Link>
              </div>
            </Col>
            <Col className=" w-100">
              <div className="mflink">
                <Link
                  to="/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flinka"
                >
                  Contact
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <footer className="fordesk footer text-center">
        <div className="">
          <Container className="">
            <div className="pt-4 text-center font-weight-bold ct">
              Follow meta monopoly
            </div>
            <div className="mt-3 d-flex justify-content-center">
              <div className="text-center">
                <div className="mx-3">
                  <a
                    href="https://opensea.io/collection/meta-monopoly"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="img-fluid fsm"
                      src={require("../../assets/img/os1.png").default}
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="text-center">
                <div className="mx-3">
                  <a
                    href="https://twitter.com/MetaMonopoly"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="img-fluid fsm"
                      src={require("../../assets/img/tw.png").default}
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="text-center">
                <div className="mx-3">
                  <a
                    href="https://www.instagram.com/meta.monopoly/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="img-fluid fsm"
                      src={require("../../assets/img/ins.png").default}
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="text-center">
                <div className="mx-3">
                  <a
                    href="https://t.me/metamonopolyofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="img-fluid fsm"
                      src={require("../../assets/img/tg.png").default}
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="text-center">
                <div className="mx-3">
                  <a
                    href="https://www.tiktok.com/@metamonopoly"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="img-fluid fsm"
                      src={require("../../assets/img/tik.png").default}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* <Row className="mt-5 d-flex justify-content-center">
          <Col lg="2">
            <div className="text-center">
              <div className="">
                <img
                  className="img-fluid"
                  src={require("../../assets/img/os1.png").default}
                  alt=""
                />
              </div>
            </div>
          </Col>
          <Col lg="2" className="rmt">
            <div className="text-center">
              <div className="">
                <img
                  className="img-fluid"
                  src={require("../../assets/img/tw.png").default}
                  alt=""
                />
              </div>
            </div>
          </Col>
          <Col lg="2" className="rmt">
            <div className="text-center">
              <div className="">
                <img
                  className="img-fluid"
                  src={require("../../assets/img/ins.png").default}
                  alt=""
                />
              </div>
            </div>
          </Col>
          <Col lg="2" className="rmt">
            <div className="text-center">
              <div className="">
                <img
                  className="img-fluid"
                  src={require("../../assets/img/tg.png").default}
                  alt=""
                />
              </div>
            </div>
          </Col>
          <Col lg="2" className="rmt">
            <div className="text-center">
              <div className="">
                <img
                  className="img-fluid"
                  src={require("../../assets/img/tik.png").default}
                  alt=""
                />
              </div>
            </div>
          </Col>
          
        </Row>
  */}
          </Container>
        </div>
      </footer>

      <footer className="formobile mt-4 footer text-center">
        <div className="">
          <Container className="">
            <div className="pt-2 text-center font-weight-bold ct">
              Follow meta monopoly
            </div>
            <div className="mt-3 d-flex justify-content-between pb-3">
              <div className="text-center">
                <div className="">
                  <a
                    href="https://opensea.io/collection/meta-monopoly"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="img-fluid fsm"
                      src={require("../../assets/img/os1.png").default}
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="text-center">
                <div className="">
                  <a
                    href="https://twitter.com/MetaMonopoly"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="img-fluid fsm"
                      src={require("../../assets/img/tw.png").default}
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="text-center">
                <div className="">
                  <a
                    href="https://www.instagram.com/meta.monopoly/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="img-fluid fsm"
                      src={require("../../assets/img/ins.png").default}
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="text-center">
                <div className="">
                  <a
                    href="https://t.me/metamonopolyofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="img-fluid fsm"
                      src={require("../../assets/img/tg.png").default}
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="text-center">
                <div className="">
                  <a
                    href="https://www.tiktok.com/@metamonopoly"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="img-fluid fsm"
                      src={require("../../assets/img/tik.png").default}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </footer>
    </>
  );
}

export default Footer;
