import React, { useEffect, useState } from "react";
// import "./home.scss";
import Web3 from "web3";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";

function Contact() {
  const [web3, setWeb3] = useState("");
  const [add, setAdd] = useState("");

  useEffect(() => {
    let web3 = new Web3(Web3.givenProvider);
    setWeb3(web3);
  }, []);

  return (
    <>
      <div className="contact-showcase">
        <div className="">
          <Sidebar />
        </div>

        <Container className="mt-5 text-center">
          <div className="">
            <h1 className="text-uppercase font-weight-bold">
              <span className="borderbottom">Conact Us</span>
            </h1>
          </div>
          <Row className="mt-5 d-flex justify-content-center">
            <Col lg="6">
              <div className="">
                {/* onSubmit={(e) => handleSubmit(e)} */}
                <form className="mt-5 text-left">
                  <div className="form-group">
                    <div className="font-weight-bold text3">Your Name</div>
                    <div className="py-2">
                      <input
                        type="text"
                        // onChange={(e) => setPrompt(e.target.value)}
                        className="form-control"
                        id="userName"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="font-weight-bold text3">Your Email</div>
                    <div className="py-2">
                      <input
                        type="email"
                        // onChange={(e) => setLanguage(e.target.value)}
                        className="form-control"
                        id="email"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="font-weight-bold text3">Subject</div>
                    <div className="py-2">
                      <input
                        type="text"
                        // onChange={(e) => setLanguage(e.target.value)}
                        className="form-control"
                        id="subject"
                        placeholder="Enter subject"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="font-weight-bold text3">Your Message</div>
                    <div className="py-2">
                      <textarea
                        type="text"
                        // onChange={(e) => setLanguage(e.target.value)}
                        className="form-control"
                        id="subject"
                        placeholder="Type here..."
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary w-100">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
