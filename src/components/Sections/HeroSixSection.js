import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import classes from "./HeroSixSection.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import icon1 from "../../assets/Icon/person-up.svg";
import icon2 from "../../assets/Icon/crosshair.svg";
const HeroSixSection = () => {
  //Rendering the Testimonial Section
  return (
    <section id="">
      <Container>
        <Row
          className={`${classes.row} mx-auto`}
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="700"
        >
          <Col xs={12}>
            <div className={classes.header_div}>
              <h2>Did somebody say ssein delivery ?</h2>
            </div>
          </Col>
        </Row>
        <div
          className={`${classes.form_div} shadow p-4 w-75 mx-auto rounded-4`}
        >
          {/* Your form content */}
          <Row className="mb-3">
            <Col xs={1}>
              <span className="icon">
                <img
                  src={icon1}
                  alt="icon1"
                  style={{ width: "40px", height: "40px" }}
                ></img>
              </span>
            </Col>
            <Col xs={10}>
              <Form.Control type="text" placeholder="Enter Your Adress" />
            </Col>
            <Col xs={1}>
              <span className="icon">
                <img
                  src={icon2}
                  alt="icon1"
                  style={{ width: "40px", height: "40px" }}
                ></img>
              </span>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col xs={6}>
              <Form.Control
                type="text"
                placeholder="Apt / Unit Number (optional)"
              />
            </Col>
            <Col xs={6}>
              <Form.Control
                type="text"
                placeholder="Delivery Instruction (optional)"
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Button
                variant="primary w-100"
                block
                style={{ backgroundColor: "#ff4d00", border: "none" }}
              >
                Find Restaurants In Your Area
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
  //ENd
};

export default HeroSixSection;
