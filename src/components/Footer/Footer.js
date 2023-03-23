import React from "react";
import "./footer.scss";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    // style={{ marginTop: "10rem" }}
    <footer className="mt-5 footer text-center">
      <div className="">
        <Container className="">
          <div className="pt-4 text-center text-uppercase font-weight-bold ct">
            Follow meta monopoly
          </div>
          <div className="mt-3 d-flex justify-content-center">
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
  );
}

export default Footer;
