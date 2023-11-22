import React, { useState, useEffect } from "react";
import NavCartButton from "./NavCartButton";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-scroll";
import classes from "./TheNavbar.module.css";
import Logo from "../../assets/Logo/logo-full.svg";

const TheNavbar = (props) => {
  const [linksVisible, setLinksVisibility] = useState(true);

  useEffect(() => {
    const isMobileDevice = () => {
      return window.innerWidth <= 800;
    };
    if (isMobileDevice()) {
      setLinksVisibility(false);
    }
    const handleResize = () => {
      if (isMobileDevice()) {
        setLinksVisibility(false);
      } else {
        setLinksVisibility(true);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLinkClick = () => {
    if (window.innerWidth <= 800) {
      setLinksVisibility(false);
    }
  };

  const handleToggleClick = () => {
    if (window.innerWidth <= 800) {
      setLinksVisibility(true);
    }
  };

  return (
    <>
      <Navbar
        expand="xl"
        className={`${classes.navbar} fixed-top`}
        data-aos="fade-down"
        data-aos-easing="ease-out"
        data-aos-duration="2000"
      >
        <Navbar.Brand className={classes.navbar_brand}>
          <Link to="hero" spy={true} smooth={true} offset={-50} duration={500}>
            <img src={Logo} alt="My logo"></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={classes.toggle}
          onClick={handleToggleClick}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          {linksVisible && (
            <Nav className={`${classes.nav__linkgroup} ms-auto`}>
              <Nav.Link
                className={`${classes.nav__link} ${classes.firstnav__link} me-4`}
              >
                <Link
                  activeClass={classes.active}
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={handleLinkClick}
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link className={`${classes.nav__link} me-4`}>
                <Link
                  activeClass={classes.active}
                  to="why"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={handleLinkClick}
                >
                  Why choose us
                </Link>
              </Nav.Link>
              <Nav.Link className={`${classes.nav__link} me-4`}>
                <Link
                  activeClass={classes.active}
                  to="dishes"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={handleLinkClick}
                >
                  Our partners
                </Link>
              </Nav.Link>
              <Nav.Link className={`${classes.nav__link} me-4`}>
                <Link
                  activeClass={classes.active}
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={handleLinkClick}
                >
                  About us
                </Link>
              </Nav.Link>
              <Nav.Link className={`${classes.nav__link} me-4`}>
                <Link
                  activeClass={classes.active}
                  to="#"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={handleLinkClick}
                >
                  Download
                </Link>
              </Nav.Link>
              <Nav.Link href="/login" className={`${classes.nav__link}`}>
                <NavCartButton onClick={props.onShowCart} />
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default TheNavbar;
