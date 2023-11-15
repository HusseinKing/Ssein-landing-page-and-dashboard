import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
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
    name: "Sandwitches and Burgers",
    price: 1500,
  },

  {
    id: "d2",
    src: dish2,
    name: "Soup and Salad",
    price: 3500,
  },

  {
    id: "d3",
    src: dish3,
    name: "Beef Meat and Chicken",
    price: 2000,
  },
];

const dummyListtwo = [
  {
    id: "d4",
    src: dish4,
    name: "Bowls and Plates",
    price: 5000,
  },

  {
    id: "d5",
    src: dish5,
    name: "Fish and Chips",
    price: 7000.0,
  },

  {
    id: "d6",
    src: dish6,
    name: "chicken and rice",
    price: 3000.0,
  },
];
//END

const HeroThreeSection = () => {
  //Mapping the data from the object above and storing them in a variable
  const dishList1 = dummyListone.map((dish) => (
    <Col lg={4} className={classes.dish_col}>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out"
        data-aos-duration="700"
      >
        <HeroThreeContent
          key={dish.id}
          id={dish.id}
          name={dish.name}
          src={dish.src}
          price={dish.price}
        />
      </div>
    </Col>
  ));

  const dishList2 = dummyListtwo.map((dish) => (
    <Col lg={4} className={classes.dish_col}>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out"
        data-aos-duration="700"
      >
        <HeroThreeContent
          key={dish.id}
          id={dish.id}
          name={dish.name}
          src={dish.src}
          price={dish.price}
        />
      </div>
    </Col>
  ));
  //END

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
              <h2>Our daily dishes</h2>
              <p>Check out recommended dishes of your choice</p>
            </div>
          </Col>
        </Row>

        <Row className={classes.row_dish}>{dishList1}</Row>

        <Row>{dishList2}</Row>
      </Container>
    </section>
  );
  //END
};

export default HeroThreeSection;
