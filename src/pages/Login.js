import React, { useState } from "react";
import logo from "../assets/Logo/logo-full.svg";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Image,
} from "react-bootstrap";
import bgimage from "../assets/image/pic-5.jpg";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("demo@example.com");
  let errorsObj = { email: "", password: "" };
  const [errors, setErrors] = useState(errorsObj);
  const [password, setPassword] = useState("123456");
  const [errorMessage, setErrorMessage] = useState(""); // Add this line
  const [successMessage, setSuccessMessage] = useState(""); // Add this line

  function onLogin(e) {
    e.preventDefault();
    let error = false;
    const errorObj = { ...errorsObj };
    if (email === "") {
      errorObj.email = "Email is Required";
      error = true;
    }
    if (password === "") {
      errorObj.password = "Password is Required";
      error = true;
    }
    setErrors(errorObj);
    if (error) {
      return;
    }

    // Your login logic here

    // Example: Simulate a login error
    setErrorMessage("Invalid email or password");
  }
  return (
    <Container className="mt-0">
      <Row className="align-items-center justify-content-center bg-login">
        <Col xl={12} className="mt-5">
          <Card border="0">
            <Card.Body className="login-bx">
              <Row className="mt-5">
                <Col xl={8} md={6} className="text-center">
                  <Image
                    src={bgimage}
                    className="mx-auto d-block"
                    alt=""
                    style={{
                      width: "100%",
                      height: "70%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </Col>
                <Col xl={4} md={6} className="pe-0">
                  <div className="sign-in-your">
                    <div className="text-center mb-3">
                      <Image src={logo} className="mb-3" alt="" />
                      <h4 className="fs-20 font-w800 text-black">
                        Ssein admin
                      </h4>
                      <span className="dlab-sign-up">Login</span>
                    </div>
                    {errorMessage && (
                      <div className="bg-red-300 text-red-900 border border-red-900 p-1 my-2">
                        {errorMessage}
                      </div>
                    )}
                    {successMessage && (
                      <div className="bg-green-300 text-green-900 border border-green-900 p-1 my-2">
                        {successMessage}
                      </div>
                    )}
                    <Form onSubmit={onLogin}>
                      <Form.Group className="mb-3">
                        <Form.Label className="mb-1">
                          <strong>Email Address</strong>
                        </Form.Label>
                        <Form.Control
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && (
                          <Form.Text className="text-danger fs-12">
                            {errors.email}
                          </Form.Text>
                        )}
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label className="mb-1">
                          <strong>Password</strong>
                        </Form.Label>
                        <Form.Control
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && (
                          <Form.Text className="text-danger fs-12">
                            {errors.password}
                          </Form.Text>
                        )}
                      </Form.Group>
                      <Row className="d-flex justify-content-between mt-4 mb-2">
                        <Col className="mb-3">
                          <Form.Check custom className="ms-1">
                            <Form.Check.Input
                              type="checkbox"
                              id="basic_checkbox_1"
                            />
                            <Form.Check.Label htmlFor="basic_checkbox_1">
                              Remember my preference
                            </Form.Check.Label>
                          </Form.Check>
                        </Col>
                      </Row>
                      <div className="text-center">
                        <Button
                          type="submit"
                          className="btn btn-primary btn-block w-100 "
                          style={{
                            backgroundColor: "#ff4d00",
                            border: "none",
                          }}
                        >
                          Sign Me In
                        </Button>
                      </div>
                    </Form>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
