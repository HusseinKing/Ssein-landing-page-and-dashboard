import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./HeroFiveSection.module.css";
import mobileImage from "../../assets/image/mobile.webp";
import playStore from "../../assets/image/playstore.png";
import appStore from "../../assets/image/appstore.png";

const HeroFiveSection = () => {
  //Structure % layout of the get our mobile app
  return (
    <section id="mobile-app">
      <Container>
        <Row
          className={`${classes.row} mx-auto`}
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="700"
        >
          <Col xs={12}>
            <div className={classes.header_div}>
              <h2>Get our mobile app</h2>
              <p>Enjoy better experience</p>
            </div>
          </Col>
        </Row>

        <Row className={`${classes.row_content} mx-auto`}>
          <Col
            lg={6}
            data-aos="fade-right"
            data-aos-easing="ease-out"
            data-aos-duration="700"
          >
            <div className={classes.text_div}>
              <p className={classes.text_content}>
                Looking for a seamless and convenient shopping experience? Look
                no further! Our delivery app is a must-have for anyone who
                values their time and wants to avoid the hassle of crowded
                stores. With just a few taps, you can browse through a wide
                range of products, place orders, and have them delivered
                straight to your doorstep. Whether you need groceries, household
                items, or even a special treat, our app offers a wide selection
                to cater to your needs. Say goodbye to long queues and hello to
                effortless shopping. Download our delivery app now and enjoy the
                convenience of shopping from the comfort of your own home.
              </p>
              <div className={classes.action_div}>
                <img
                  className={classes.download_badge}
                  src={appStore}
                  alt="ipone app badge"
                ></img>
                <img
                  className={`${classes.download_badge2} ms-3`}
                  src={playStore}
                  alt="google app badge"
                ></img>
              </div>
            </div>
          </Col>
          <Col
            lg={6}
            data-aos="fade-left"
            data-aos-easing="ease-out"
            data-aos-duration="700"
          >
            <div className={classes.image_div}>
              <img
                className={classes.image}
                src={mobileImage}
                alt="about"
              ></img>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
  //END
};

export default HeroFiveSection;
