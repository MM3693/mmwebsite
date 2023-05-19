import React, { useEffect, useState } from "react";
import "./home.scss";
import Web3 from "web3";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import Carousel1 from "../../components/Carousel/Carousel1";
import Carousel2 from "../../components/Carousel/Carousel2";
import io from "socket.io-client";
import useAppStore from "../../store";

const socket = io(process.env.REACT_APP_BACKEND_SOCKET_URL, {
  secure: true,
});

function Home() {
  const [web3, setWeb3] = useState("");
  const [add, setAdd] = useState("");

  const state = useAppStore();

  useEffect(() => {
    let web3 = new Web3(Web3.givenProvider);
    setWeb3(web3);
  }, []);

  useEffect(() => {
    socket.emit("getUsers", "getUsers");

    socket.on("users", (message) => {
      const { count: onlineUsers } = message;
      state.setUsersOnline(onlineUsers);
    });
  }, []);

  return (
    <>
      <div className="showcase">
        <div className="">
          <Sidebar />
        </div>

        <div className="showcase-content fordesk">
          <Container
            className="countd d-flex align-items-end justify-content-center h-100"
            fluid
          >
            <Row>
              <Col lg="12">
                <div className="text-white">
                  <Row className="">
                    <Col>
                      <div className="text-center">
                        <img
                          style={{ height: "150px" }}
                          className="img-fluid"
                          src={require("../../assets/img/txt-solo.png").default}
                          alt=""
                        />
                        {/* <div className="text-uppercase font-weight-bold showcase-title">
                          Monetize the galaxy with
                        </div>
                        <div className="text-uppercase font-weight-bold showcase-logo logo-text">
                          Metamonopoly
                        </div> */}
                        <div className="py-3 text-center hideinmob">
                          <img
                            className="img-fluid"
                            style={{ height: "60px" }}
                            src={
                              require("../../assets/img/Down-Arrow.png").default
                            }
                            alt=""
                          />
                          <div
                            style={{
                              fontSize: "1.3rem",
                              letterSpacing: "9px",
                            }}
                            className="py-1 text-uppercase font-weight-bold"
                          >
                            Get started
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="showcase-content formobile">
          <Container
            className="countd d-flex align-items-end justify-content-center h-100"
            fluid
          >
            <Row>
              <Col lg="12">
                <div className="text-white">
                  <Row className="">
                    <Col>
                      <div className="text-center">
                        <div className="text-center mb-1">
                          <img
                            className="img-fluid"
                            src={
                              require("../../assets/img/txt-solo.png").default
                            }
                            alt=""
                          />
                        </div>
                        <div className="text-center">
                          <div className="text-center">
                            <img
                              className="img-fluid"
                              style={{ height: "91px" }}
                              src={
                                require("../../assets/img/eth-trans.png")
                                  .default
                              }
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="p2esec fordesk bigcon">
        <Container className="d-flex justify-content-center">
          <Row>
            <Col lg="12">
              <div className="text-white">
                <Row className="">
                  <Col>
                    <div className="text-center">
                      <img
                        style={{ height: "150px" }}
                        className="img-fluid"
                        src={
                          require("../../assets/img/PLAY-TO-EARN--white.png")
                            .default
                        }
                        alt=""
                      />

                      <div className="text-center py-5">
                        <img
                          className="img-fluid"
                          style={{ height: "151px" }}
                          src={
                            require("../../assets/img/eth-trans.png").default
                          }
                          alt=""
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
        {/* 
        <Container className="" fluid>
          <Row>
            <Col lg="4">
              <div className="text-center">
                <div className="">
                  <img
                    className="img-fluid"
                    style={{ height: "80px" }}
                    src={require("../../assets/img/Multiplayer-.png").default}
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    className="img-fluid"
                    src={
                      require("../../assets/img/Multiplayer-Graph.png").default
                    }
                    alt=""
                  />
                </div>
                <div className="">
                  <div className="text-uppercase font-weight-bold text3">
                    Play online or
                  </div>
                  <div className="text-uppercase font-weight-bold text3">
                    with friends
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4" className="rmt">
              <div className="text-center">
                <div className="">
                  <img
                    className="img-fluid"
                    style={{ height: "80px" }}
                    src={require("../../assets/img/FastGames.png").default}
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    className="img-fluid"
                    src={
                      require("../../assets/img/FastGames-Graph.png").default
                    }
                    alt=""
                  />
                </div>
                <div className="">
                  <div className="text-uppercase font-weight-bold text3">
                    Fast-paced
                  </div>
                  <div className="text-uppercase font-weight-bold text3">
                    friendly games
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4" className="rmt">
              <div className="text-center">
                <div className="">
                  <img
                    className="img-fluid"
                    style={{ height: "80px" }}
                    src={require("../../assets/img/RealMoney-.png").default}
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    className="img-fluid"
                    src={
                      require("../../assets/img/RealMoney-Graph.png").default
                    }
                    alt=""
                  />
                </div>
                <div className="">
                  <div className="text-uppercase font-weight-bold text3">
                    Play with $MM
                  </div>
                  <div className="text-uppercase font-weight-bold text3">
                    win real crypto
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
       */}
        <div className="rmt">
          <img
            className="img-fluid"
            src={require("../../assets/img/images1.png").default}
            alt=""
          />
        </div>

        {/* <Container className="rmt" fluid>
          <Row>
            <Col>
              <div className="text-center">
                <div className="">
                  <img
                    className="img-fluid p2esec-img-text"
                    src={require("../../assets/img/Multiplayer-.png").default}
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    className="img-fluid"
                    src={
                      require("../../assets/img/Multiplayer-Graph.png").default
                    }
                    alt=""
                  />
                </div>
                <div className="">
                  <div className="text-uppercase font-weight-bold p2esec-text3 text3">
                    Play online or
                  </div>
                  <div className="text-uppercase font-weight-bold p2esec-text3 text3">
                    with friends
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="text-center">
                <div className="">
                  <img
                    className="img-fluid p2esec-img-text"
                    src={require("../../assets/img/FastGames.png").default}
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    className="img-fluid"
                    src={
                      require("../../assets/img/FastGames-Graph.png").default
                    }
                    alt=""
                  />
                </div>
                <div className="">
                  <div className="text-uppercase font-weight-bold p2esec-text3 text3">
                    Fast-paced
                  </div>
                  <div className="text-uppercase font-weight-bold p2esec-text3 text3">
                    friendly games
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="text-center">
                <div className="">
                  <img
                    className="img-fluid p2esec-img-text"
                    src={require("../../assets/img/RealMoney-.png").default}
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    className="img-fluid"
                    src={
                      require("../../assets/img/RealMoney-Graph.png").default
                    }
                    alt=""
                  />
                </div>
                <div className="">
                  <div className="text-uppercase font-weight-bold p2esec-text3 text3">
                    Play with $MM
                  </div>
                  <div className="text-uppercase font-weight-bold p2esec-text3 text3">
                    win real crypto
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
     */}
      </div>

      <div className="p2esec formobile bigcon mt-3">
        <Container className="d-flex justify-content-center px-4">
          <Row>
            <Col lg="12">
              <div className="text-white">
                <Row className="">
                  <Col>
                    <div className="text-center mt-4">
                      <div className="formobile text-center">
                        <img
                          className="img-fluid px-3"
                          src={
                            require("../../assets/img/PLAY-TO-EARN--white.png")
                              .default
                          }
                          alt=""
                        />
                      </div>
                      {/* <div className="text-uppercase font-weight-bold  p2esec-title title">
                        Play-to-earn
                      </div>
                      <div
                        style={{ color: "#000" }}
                        className="bg-white text-uppercase font-weight-bold p2esec-subtitle subtitle"
                      >
                        On ethereum
                      </div> */}
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="rmt">
          <img
            className="img-fluid"
            src={require("../../assets/img/images1.png").default}
            alt=""
          />
        </div>
      </div>

      <div className="useronline">
        <div className="useronlineimg w-100">
          <div className="mt-5 d-flex justify-content-center">
            <div className="userborder">
              <div className="usernumber">{state.usersOnline}</div>
            </div>
          </div>
        </div>

        <div className="d-flex fordesk justify-content-center ">
          <div className="text-uppercase d-flex align-items-center py-1">
            <img
              className="img-fluid"
              style={{ height: "40px" }}
              src={require("../../assets/img/Green-Light.png").default}
              alt=""
            />
            <span className="user-subtile">Users Online</span>
          </div>
        </div>

        <div className=" d-flex justify-content-center text-center">
          <div className="formobile text-uppercase d-flex align-items-center py-1">
            <div className="d-flex align-items-center">
              <div className="mx-1">
                <img
                  className="img-fluid"
                  style={{ height: "19px" }}
                  src={require("../../assets/img/green-spot.png").default}
                  alt=""
                />
              </div>
              <div className="mx-1">
                <span className="muser-subtile">Users Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="secsection border">
        <div className="d-flex justify-content-center sec">
          <img
            className="img-fluid rimg"
            style={{ height: "700px" }}
            src={require("../../assets/img/Start-Earning.png").default}
            alt=""
          />
        </div>

        <div className="gimg fordesk">
          <img
            className="img-fluid rimg w-100"
            style={{ height: "700px" }}
            src={require("../../assets/img/Desktop-final-copy.png").default}
            alt=""
          />
        </div>

        <div className="gimg formobile">
          <img
            className="img-fluid rimg w-100"
            style={{ height: "700px" }}
            src={require("../../assets/img/image-.png").default}
            alt=""
          />
        </div>
        <div className="text-center">
          <a href="https://galaxy.metamonopoly.org/" target="_blank">
            <img
              className="img-fluid playnowimg"
              src={require("../../assets/img/PLAYNOW-Normal.png").default}
              alt=""
            />
          </a>
        </div>
      </div> */}

      <div className="secsection formobile">
        {/* <div className="d-flex justify-content-center sec">
          <img
            className="img-fluid rimg"
            style={{ height: "700px" }}
            src={require("../../assets/img/image-notxt.png").default}
            alt=""
          />
        </div> */}

        <div className="d-flex justify-content-center mt-5">
          <img
            className="img-fluid rimg"
            style={{ height: "700px" }}
            src={require("../../assets/img/Graphic.png").default}
            alt=""
          />
        </div>

        <div className="gimg">
          <img
            className="img-fluid rimg w-100"
            style={{ height: "700px" }}
            src={require("../../assets/img/image-text.png").default}
            alt=""
          />
        </div>
        <div className="text-center">
          <a href="https://galaxy.metamonopoly.org/" target="_blank">
            <img
              className="img-fluid playnowimg"
              src={require("../../assets/img/PLAYNOW-Normal.png").default}
              alt=""
            />
          </a>
        </div>
      </div>

      <div className="secsection fordesk mt-5">
        <div className="text-center">&nbsp;</div>
        <div className="text-center">&nbsp;</div>
        <div className="text-center">&nbsp;</div>
        <div className="text-center">&nbsp;</div>
        <div className="text-center">&nbsp;</div>
        <div className="text-center">&nbsp;</div>
        <div className="text-center">&nbsp;</div>
        <div className="text-center">&nbsp;</div>
        <div className="text-center">&nbsp;</div>
        <div className="text-center">&nbsp;</div>
        <div className="text-center">&nbsp;</div>
        <div className="text-center">&nbsp;</div>
        <div className="text-center">&nbsp;</div>
        <div className="text-center">&nbsp;</div>
        <div className="text-center">&nbsp;</div>
        <div className="text-center">&nbsp;</div>
        <div className="text-center">&nbsp;</div>
        <div className="text-center">&nbsp;</div>
        <div className="text-center">&nbsp;</div>
        <div className="text-center">&nbsp;</div>
        <div className="text-center">&nbsp;</div>
        <div className="text-center">&nbsp;</div>
        <div className="text-center">&nbsp;</div>
        <div className="text-center">&nbsp;</div>
        <div className="text-center">&nbsp;</div>
        <div className="text-center">&nbsp;</div>
        <div className="text-center">&nbsp;</div>
        <div className="text-center">&nbsp;</div>
        <div className="text-center">&nbsp;</div>
        <div className="text-center">&nbsp;</div>

        <div className="gimg fordesk">
          <img
            className="img-fluid rimg w-100"
            style={{ height: "700px" }}
            src={require("../../assets/img/Desktop-final-copy.png").default}
            alt=""
          />
        </div>

        <div className="d-flex justify-content-center sec ">
          <img
            className="img-fluid rimg topsec"
            style={{ height: "800px" }}
            src={require("../../assets/img/Start-Earning.png").default}
            alt=""
          />
        </div>

        <div className="text-center">
          <a href="https://galaxy.metamonopoly.org/" target="_blank">
            <img
              className="img-fluid playnowimg"
              src={require("../../assets/img/PLAYNOW-Normal.png").default}
              alt=""
            />
          </a>
        </div>
      </div>

      {/* <div className="">
        <Container className="d-flex justify-content-center" fluid>
          <Row>
            <Col lg="12">
              <div className="bigcon text-white">
                <Row className="">
                  <Col>
                    <div className="text-center">
                      <div className="text-uppercase font-weight-bold title">
                        mmnft
                      </div>
                      <div className="font-weight-bold subtitle">
                        Meta Monopoly nft
                      </div>
                      <div className="text-center py-5">
                        <img
                          className="img-fluid"
                          style={{ height: "121px" }}
                          src={require("../../assets/img/ETH.png").default}
                          alt=""
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}
      <Container>
        <div className="text-center mt-5">
          <img
            className="img-fluid"
            src={require("../../assets/img/m1.png").default}
            alt=""
          />
        </div>
      </Container>
      {/* <div className="text-center mt-4">
        <img
          className="img-fluid"
          src={require("../../assets/img/m2.png").default}
          alt=""
        />
      </div> */}

      <div className="text-center mt-5">
        <Carousel2 />
      </div>

      <Container>
        <div className="text-center my-4">
          {/* // py-5 */}
          <img
            className="img-fluid"
            src={require("../../assets/img/m3.png").default}
            alt=""
          />
        </div>
      </Container>

      <div className="text-center">
        <Carousel1 />
      </div>

      {/* <div className="text-center">
        <img
          className="img-fluid"
          src={require("../../assets/img/m4.png").default}
          alt=""
        />
      </div> */}
      <div className="text-center fordesk py-2">
        <img
          className="img-fluid"
          src={require("../../assets/img/m5.png").default}
          alt=""
        />
      </div>
      <div className="text-center formobile">
        <img
          className="img-fluid"
          src={require("../../assets/img/WeBringMemesToLife.png").default}
          alt=""
        />
      </div>
      <Container className="fordesk">
        <Row>
          <Col>
            <div className="">
              <div className="text-center">
                <div className="font-weight-bold logo-text">
                  Browse our videos
                </div>
                <div className="mt-4 d-flex justify-content-center">
                  <div className="">
                    <a
                      href="https://www.instagram.com/meta.monopoly/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        style={{ height: "221px" }}
                        className="img-fluid bovsmimg"
                        src={require("../../assets/img/ig.png").default}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="">
                    <a
                      href="https://www.tiktok.com/@metamonopoly"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        style={{ height: "221px" }}
                        className="img-fluid bovsmimg"
                        src={require("../../assets/img/tt.png").default}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="formobile">
        <Row>
          <Col>
            <div className="">
              <div className="text-center">
                <div className="font-weight-bold fmlogo-text">
                  Browse our videos
                </div>
                <div className="mt-2 d-flex justify-content-center">
                  <div className="">
                    <a
                      href="https://www.instagram.com/meta.monopoly/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="img-fluid bovsmimg"
                        src={require("../../assets/img/ig.png").default}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="">
                    <a
                      href="https://www.tiktok.com/@metamonopoly"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="img-fluid bovsmimg"
                        src={require("../../assets/img/tt.png").default}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="fordesk mt-3" fluid>
        <div className="text-center">
          <div className="font-weight-bold ct">
            Check the popularity of every MMNFT by typing the code number:
          </div>

          <div className="mt-3 d-flex justify-content-center align-items-center">
            <img
              className="img-fluid hashimg"
              src={require("../../assets/img/hash.png").default}
              alt=""
            />
            <div className="">
              <div className=" font-weight-bold logo-text">
                #mmnft<span className="text-muted">172</span>
              </div>
              <div className=" font-weight-bold logo-text text-muted">
                3.7m views
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container className="formobile mt-3" fluid>
        <div className="text-center">
          <div className="mct">
            Check the popularity of <br /> every MMNFT by typing <br /> the code
            number:
          </div>
          <div className="mt-3 d-flex justify-content-center align-items-center">
            <div className="mx-2">
              <img
                className="img-fluid mhashimg"
                src={require("../../assets/img/hash.png").default}
                alt=""
              />
            </div>
            <div className="mx-3 text-left">
              <div className="fw-500 logo-text mmsearchtext">
                #mmnft<span className="text-muted">172</span>
              </div>
              <div className="fw-500 m-0 logo-text text-muted">3.7m views</div>
            </div>
          </div>
        </div>
      </Container>

      <div className="fordesk mt-3">
        <div className="">
          <img
            className="img-fluid"
            src={require("../../assets/img/m6.png").default}
            alt=""
          />
        </div>
        <div className=" text-center">
          <div className="ct">
            Zero royalties or fees collected <br />
            on any of the games or the NFTs
          </div>
          <div className="ct textblue">Giving more power to the community</div>
        </div>
      </div>

      <div className="formobile mt-3">
        <div className="">
          <img
            className="img-fluid"
            src={require("../../assets/img/RoyaltiesGraph.png").default}
            alt=""
          />
        </div>
        <div className=" text-center">
          <div className="mct">
            Zero royalties or fees collected <br />
            on any of the games or the NFTs
          </div>

          <div className="mct formobile textblue">
            Giving more power <br /> to the community
          </div>
        </div>
      </div>

      <Container style={{ marginTop: "2rem" }} className="fordesk">
        <div className="text-center text-uppercase font-weight-bold logo-text">
          JOIN our community
        </div>
        <Row className="mt-5">
          <Col lg="4">
            <div className="text-center">
              <div className="">
                <img
                  className="img-fluid smm"
                  src={require("../../assets/img/sm.png").default}
                  alt=""
                />
              </div>
              <div className="mt-4">
                <div className="text-uppercase font-weight-bold text3">
                  Shared memes
                </div>
              </div>
            </div>
          </Col>
          <Col lg="4" className="rmt">
            <div className="text-center">
              <a
                className="text-white"
                style={{ textDecoration: "none" }}
                href="https://galaxy.metamonopoly.org/"
                target="_blank"
              >
                <div className="">
                  <img
                    className="img-fluid smm"
                    src={require("../../assets/img/pn.png").default}
                    alt=""
                  />
                </div>
                <div className="mt-4">
                  <div className="text-uppercase font-weight-bold text3">
                    Play now
                  </div>
                </div>
              </a>
            </div>
          </Col>
          <Col lg="4" className="rmt">
            <div className="text-center">
              <a
                className="text-white"
                style={{ textDecoration: "none" }}
                href="https://opensea.io/collection/meta-monopoly"
                target="_blank"
              >
                <div className="">
                  <img
                    className="img-fluid smm"
                    src={require("../../assets/img/os.png").default}
                    alt=""
                  />
                </div>
                <div className="mt-4">
                  <div className="text-uppercase font-weight-bold text3">
                    Get MMnft
                  </div>
                </div>
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      <Container style={{ marginTop: "2rem" }} className="formobile">
        <div className="text-center text-uppercase font-weight-bold logo-text">
          JOIN our community
        </div>
        <Row className="mt-3">
          <Col lg="4">
            <div className="text-center">
              <div className="">
                <img
                  className="img-fluid smm"
                  src={require("../../assets/img/sm.png").default}
                  alt=""
                />
              </div>
              <div className="mt-2">
                <div className="text-uppercase font-weight-bold text3">
                  Shared memes
                </div>
              </div>
            </div>
          </Col>
          <Col lg="4" className="rmt-1">
            <div className="text-center">
              <a
                className="text-white"
                style={{ textDecoration: "none" }}
                href="https://galaxy.metamonopoly.org/"
                target="_blank"
              >
                <div className="">
                  <img
                    className="img-fluid smm"
                    src={require("../../assets/img/pn.png").default}
                    alt=""
                  />
                </div>
                <div className="mt-2">
                  <div className="text-uppercase font-weight-bold text3">
                    Play now
                  </div>
                </div>
              </a>
            </div>
          </Col>
          <Col lg="4" className="rmt-1">
            <div className="text-center">
              <a
                className="text-white"
                style={{ textDecoration: "none" }}
                href="https://opensea.io/collection/meta-monopoly"
                target="_blank"
              >
                <div className="">
                  <img
                    className="img-fluid smm"
                    src={require("../../assets/img/os.png").default}
                    alt=""
                  />
                </div>
                <div className="mt-2">
                  <div className="text-uppercase font-weight-bold text3">
                    Get MMnft
                  </div>
                </div>
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Home;
