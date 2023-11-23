import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import classes from "./HeroThreeSection.module.css";
import dish1 from "../../assets/image/unsplash_sA3wymYqyaI.png";
import dish2 from "../../assets/image/unsplash_BXNctQYqPOc.png";
import dish3 from "../../assets/image/unsplash_YlAmh_X_SsE.png";
import dish4 from "../../assets/image/unsplash_d2PocYmscRg.png";
import dish5 from "../../assets/image/unsplash_gwBcamFtPr4.png";
import dish6 from "../../assets/image/unsplash_ysmeQt1dzcw.png";
import HeroThreeContent from "../SectionComponents/HeroThreeContent";

//Data objects to be used in the HeroThree section for rendering dishes information
const dummyListone = [
  {
    id: "d1",
    src: dish1,
  },

  {
    id: "d2",
    src: dish2,
  },

  {
    id: "d3",
    src: dish3,
  },
];
  const dummyListtwo = [
    {
      id: "d4",
      src: dish4,
    },

    {
      id: "d5",
      src: dish5,
    },

    {
      id: "d6",
      src: dish6,
    },
  ];

const HeroThreeSection = () => {
const dishList1 = dummyListone.map((dish) => (
  <Col key={dish.id} lg={4} className={classes.dish_col}>
    <div data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="700">
      <HeroThreeContent id={dish.id} src={dish.src} />
    </div>
  </Col>
));

const dishList2 = dummyListtwo.map((dish) => (
  <Col key={dish.id} lg={4} className={classes.dish_col}>
    <div data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="700">
      <HeroThreeContent id={dish.id} src={dish.src} />
    </div>
  </Col>
));

  //Rendering the Hero Three section
  return (
    <section id="dishes">
      <Container>
        <Row
          className={`${classes.row} mx-auto`}
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="700"
        >
          <Col xs={12}>
            <div className={classes.header_div}>
              <h2>Our partners</h2>
              <p>
                {/* description of our partners */}
                We work with the best restaurants in city to ensure you get
                the best food delivered to your door.
              </p>
            </div>
          </Col>
        </Row>
        <Carousel>
          <Carousel.Item interval={1000}>
            <Row>{dishList1}</Row>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <Row>{dishList2}</Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>{dishList1}</Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
  //END
};

export default HeroThreeSection;
