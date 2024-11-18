import React, { useState } from "react";
import { Row, Container, Col } from "react-bootstrap";
import TheButton from "../Ui/TheButton";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./HeroFourSection.module.css";
import aboutImage from "../../assets/image/about-image.webp";
import Modal from "../Ui/Modal";

const HeroFourSection = () => {
  const [showModal, setShowModal] = useState(false);

  const aboutModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal && (
        <Modal>
          <div className={classes.about_modal}>
            <div className={classes.about_header}>
              <h2 className={classes.text_modal_header}>About us</h2>
            </div>
            <div className={classes.about_body}>
              <p className={classes.text_content}>
                ssein delivery app! We're here to make your life easier by
                bringing everything you need right to your doorstep. With our
                user-friendly platform, you can easily order from a variety of
                local businesses and track your delivery in real-time.
                Experience convenience and reliability with us today!
              </p>
            </div>
            <div className={classes.about_footer}>
              <div className={classes.button_modal_div}>
                <TheButton onClick={closeModal}>Cancel</TheButton>
              </div>
            </div>
          </div>
        </Modal>
      )}
      <section id="about">
        <Container>
          <Row className={`${classes.row} mx-auto`}>
            <Col
              lg={6}
              data-aos="fade-right"
              data-aos-easing="ease-out"
              data-aos-duration="700"
            >
              <div className={classes.text_div}>
                <h2 className={classes.text_header}>About us</h2>
                <p className={classes.text_content}>
                  ssein delivery app! We're here to make your life easier by
                  bringing everything you need right to your doorstep. With our
                  user-friendly platform, you can easily order from a variety of
                  local businesses and track your delivery in real-time.
                  Experience convenience and reliability with us today!
                </p>
                <div className={classes.button_div}>
                  <TheButton onClick={aboutModal}>See more</TheButton>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div
                className={classes.image_div}
                data-aos="fade-left"
                data-aos-easing="ease-out"
                data-aos-duration="700"
              >
                <img
                  className={classes.image}
                  src={aboutImage}
                  alt="about"
                ></img>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HeroFourSection;
