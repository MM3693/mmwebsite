import React, { useEffect, useState } from "react";
import "./team.scss";
import Web3 from "web3";
import { Container, Nav, Navbar, Row, Col, Offcanvas } from "react-bootstrap";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";

function Team() {
  const [web3, setWeb3] = useState("");
  const [add, setAdd] = useState("");

  useEffect(() => {
    let web3 = new Web3(Web3.givenProvider);
    setWeb3(web3);
  }, []);

  return (
    <>
      <div className="team-showcase">
        <div className="">
          <Sidebar />
        </div>

        <Container className="mt-5 text-center">
          <div className="">
            <h1 className="text-uppercase font-weight-bold">
              <span className="borderbottom">Our Team</span>
            </h1>
          </div>
          <Row style={{ marginTop: "8rem" }}>
            <Col lg="4">
              <div className="text-center">
                <div className="p-5">
                  <img
                    className="img-fluid"
                    src={require("../../assets/img/t1.png").default}
                    alt=""
                  />
                </div>
                <div className="">
                  <div className="text-uppercase font-weight-bold text3">
                    Mr. Meta Monopoly
                  </div>
                  <div className="text-uppercase font-weight-bold text3 text-primary">
                    -Creator-
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4" className="rmt">
              <div className="text-center">
                <div className="p-5">
                  <img
                    className="img-fluid"
                    src={require("../../assets/img/t2.png").default}
                    alt=""
                  />
                </div>
                <div className="">
                  <div className="text-uppercase font-weight-bold text3">
                    Cameron
                  </div>
                  <div className="text-uppercase font-weight-bold text3 text-primary">
                    -Animator-
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4" className="rmt">
              <div className="text-center">
                <div className="p-5">
                  <img
                    className="img-fluid"
                    src={require("../../assets/img/t3.png").default}
                    alt=""
                  />
                </div>
                <div className="">
                  <div className="text-uppercase font-weight-bold text3">
                    Jay
                  </div>
                  <div className="text-uppercase font-weight-bold text3 text-primary">
                    -Designer-
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: "4rem" }}>
            <Col lg="4">
              <div className="text-center">
                <div className="p-5">
                  <img
                    className="img-fluid"
                    src={require("../../assets/img/t4.png").default}
                    alt=""
                  />
                </div>
                <div className="">
                  <div className="text-uppercase font-weight-bold text3">
                    Neo
                  </div>
                  <div className="text-uppercase font-weight-bold text3 text-primary">
                    -Blockchain Dev-
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4" className="rmt">
              <div className="text-center">
                <div className="p-5">
                  <img
                    className="img-fluid"
                    src={require("../../assets/img/t5.png").default}
                    alt=""
                  />
                </div>
                <div className="">
                  <div className="text-uppercase font-weight-bold text3">
                    Matt
                  </div>
                  <div className="text-uppercase font-weight-bold text3 text-primary">
                    -Blockchain Dev-
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4" className="rmt">
              <div className="text-center">
                <div className="p-5">
                  <img
                    className="img-fluid"
                    src={require("../../assets/img/t6.png").default}
                    alt=""
                  />
                </div>
                <div className="">
                  <div className="text-uppercase font-weight-bold text3">
                    Jonah
                  </div>
                  <div className="text-uppercase font-weight-bold text3 text-primary">
                    -Social Plug-
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
}

export default Team;
