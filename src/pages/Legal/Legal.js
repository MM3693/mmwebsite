import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./legal.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";

function Legal() {
  let history = useHistory();

  return (
    <div className="term">
      <div className="">
        <Sidebar />
      </div>

      <Container className="mt-5">
        <h1
          className="font-weight-bold text-center"
          data-aos="fade-in"
          data-aos-duration="2000"
        >
          IMPORTANT LEGAL INFORMATION
        </h1>
        <br />
        <p className="text3">
          The DAO has hired 3 separate law firms in the United States of America
          to confirm and validate the following information:
        </p>
        <h3
          className="font-weight-bold mt-4"
          data-aos="fade-in"
          data-aos-duration="2000"
        >
          -The Word Monopoly-
        </h3>
        <p className="text3">
          There is no copyright infringement for anyone to use the word (or even
          the name) Monopoly.
        </p>
        <p className="text3">
          Monopoly is a common word and cannot, by itself, be copyrighted.
        </p>
        <p className="text3">
          Hasbro, Inc. the owner of the game “Monopoly” has no copyright to
          Monopoly. They hold the copyright to the game that is incorporated
          with and identified by the world Monopoly.
        </p>
        <h3
          className="font-weight-bold mt-4"
          data-aos="fade-in"
          data-aos-duration="2000"
        >
          We are not affiliated with Hasbro, Inc.
        </h3>
        <p className="text3">
          In the year 1983, Monopoly lost the trademark battle in the courts.
          Here is the (originally published) New York Times article:
        </p>
        <div className="">
          <a
            href="https://www.nytimes.com/1983/02/23/business/monopoly-loses-its-trademark.html"
            className="text3"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.nytimes.com/1983/02/23/business/monopoly-loses-its-trademark.html
          </a>
        </div>
        <div className="mt-5 text-center">
          <img
            className="img-fluid"
            src={require("../../assets/img/l1.jpeg").default}
            alt=""
          />
        </div>
        <h3
          className="font-weight-bold mt-4"
          data-aos="fade-in"
          data-aos-duration="2000"
        >
          - The Monopoly Man -
        </h3>
        <p className="text3">
          The character and/or “mascot” for the original Monopoly, is not
          trademarked or owned by any individual or company.
        </p>
        <p className="text3">
          In 1935 SAIC alum and political cartoonist Frankling “F.O.” Alexander
          was asked to provide the illustrations and design for Parker Brothers’
          Monopoly board game.
        </p>
        <div className="mt-5 text-center">
          <img
            className="img-fluid"
            src={require("../../assets/img/l2.png").default}
            alt=""
          />
        </div>
        <p className="text3">
          He created characters such as Rich Uncle Pennybags, Jake the Jailbird,
          and the “Go to Jail” Officer Edgar Mallory. Unfortunately, Alexander
          did not collect $200 for his contributions; in fact, the artist never
          received a penny.
        </p>
        <p className="text3">
          Parker Brothers has never officially owned the rights to the original
          character design, nor does Hasbro, Inc. (who acquired Parker
          Brothers).
        </p>
        <p className="text3">
          No one-person or entity can copyright this character, and any
          alterations of him are fully free of any copyright or trademark laws.
        </p>
        <p className="text3">
          How else do you think the very talented street artist, Alec Monopoly,
          has been able to sell tens-of-millions of dollars worth of art since
          2008 without any legal troubles. (you the man Alec!)
        </p>
        <p className="text3">Not a Bro… Hasbro</p>
        <h3
          className="font-weight-bold mt-4"
          data-aos="fade-in"
          data-aos-duration="2000"
        >
          – Meta Monopoly is not associated with ‘Monopoly’ and/or Hasbro, Inc.
          –
        </h3>
        <p className="text3">
          Meta Monopoly is a blockchain based play-2-earn game hosted on
          Ethereum, that isn’t owned by any one person or single entity. Meta
          Monopoly is a DAO (decentralized autonomous organization) and is
          community owned with no one-person or singular entity.
        </p>

        <h3
          className="font-weight-bold mt-4"
          data-aos="fade-in"
          data-aos-duration="2000"
        >
          – Meta Monopoly is not the same as the original Monopoly owned by
          Hasbro, Inc. –
        </h3>
        <p className="text3">
          Meta Monopoly is a crypto-gamified concept that has its own unique set
          of rules and features of gameplay, that is in no way similar to any
          rules or gameplay of the original Monopoly game.
        </p>
      </Container>

      <Footer />
    </div>
  );
}

export default Legal;
