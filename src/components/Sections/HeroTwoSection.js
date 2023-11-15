import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./HeroTwoSection.module.css";
import hamimg from "../../assets/image/Order food-pana 1.svg";
import deliveryimg from "../../assets/image/Take Away-rafiki 1.svg";
import topimg from "../../assets/image/Waiters-rafiki 1.svg";

const HeroTwoSection = () => {
  //Rendering the HeroTwo section
  return (
    <section id="why">
      <Container>
        <Row
          className={`${classes.row} mx-auto`}
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="700"
        >
          <Col xs={12}>
            <div className={classes.header_div}>
              <h2>Why choose us</h2>
              <p>This is what makes our product different</p>
            </div>
          </Col>
        </Row>

        <Row className={classes.row_cards}>
          <Col
            lg={4}
            className={classes.first_col}
            data-aos="zoom-in"
            data-aos-easing="ease-out"
            data-aos-duration="700"
            data-aos-delay="100"
          >
            <div className={`${classes.card_one} ${classes.card}`}>
              <div className={classes.card_content}>
                <div className={classes.card_image_div}>
                  <img src={hamimg} alt="Hanmburger"></img>
                </div>
                <div className={classes.card_text_div}>
                  <h5>Transparent and Secure</h5>
                  <p>
                    Our app provides clear and transparent communication,
                    keeping customers informed about the status of their orders
                    and any potential delays. Our app prioritizes the security
                    of customer information and transactions, using advanced
                    encryption and secure payment gateways.
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <Col
            lg={4}
            data-aos="zoom-in"
            data-aos-easing="ease-out"
            data-aos-duration="700"
            data-aos-delay="200"
          >
            <div className={`${classes.card_two} ${classes.card}`}>
              <div className={classes.card_content}>
                <div className={classes.card_image_div}>
                  <img src={deliveryimg} alt="Delivery man"></img>
                </div>
                <div className={classes.card_text_div}>
                  <h5>Cost-effective</h5>
                  <p>
                    Our app offers competitive pricing and delivery options,
                    providing value for money to customers.
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <Col
            lg={4}
            className={classes.last_col}
            data-aos="zoom-in"
            data-aos-easing="ease-out"
            data-aos-duration="700"
            data-aos-delay="300"
          >
            <div className={`${classes.card_three} ${classes.card}`}>
              <div className={classes.card_content}>
                <div className={classes.card_image_div}>
                  <img src={topimg} alt="Thumbs up"></img>
                </div>
                <div className={classes.card_text_div}>
                  <h5>Efficient and convinient</h5>
                  <p>
                    Our app ensures quick and timely deliveries, optimizing
                    routes and minimizing waiting times and provides a seamless
                    and user-friendly experience, allowing customers to easily
                    place orders and track their deliveries.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
  //END
};

export default HeroTwoSection;
