import React, { useRef, useState } from "react";
import { Container, Card, Button, Form, Alert, Jumbotron, Row, Col } from "react-bootstrap";
import { useAuth } from "../../Context/AuthContext";
import { Link, useHistory } from "react-router-dom"
import check from "../../assets/check.png"
import "./Signin.css"



function SignInComponent() {



    const emailRef = useRef();
    const passwordRef = useRef();
    const { signin } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("")
            setLoading(true)
            await signin(emailRef.current.value, passwordRef.current.value);
            console.log("checking push")
            history.push('/home')
            console.log("Checking push afterwards")

        } catch (error) {
            setError("Problems with signin!")
        }
        setLoading(false)
    }

    return (
        <div className="signin-page">






            <div className="signinBackground" />








            {/* <Col sm="4" style={{backgroundColor: "blue"}}>
                        <Card className="cardClass mt-5">

                            <Card.Body className="formControl">
                                <h3 className="text-center mb-4"> Sign In </h3>
                                {error && <Alert varient="danger">{error}</Alert>}
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group id="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" ref={emailRef} required />
                                    </Form.Group>
                                    <Form.Group id="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" ref={passwordRef} required />
                                    </Form.Group>
                                    <Button disabled={loading} className="w-50 justify" type="submit">
                                        Sign In
                                    </Button>
                                </Form>
                            </Card.Body>
                            <div className="w-110 text-center mt3">
                                <Link to="/signup">Register Today!</Link>
                            </div>
                        </Card>
                        </Col> */}


            <Container fluid>
                <Row className="signinRow">
                    {/* <Col className="signinCol d-none d-lg-block">
                     <img className="signinImage" src={check} alt="trying to get it to load"/>
                     </Col>
                      */}

                    <Col className="signinCol">
                    <Card className="cardClass">
                    <h3 className="Display-4 text-center mt-5 mb-4"> Sign In </h3>
                        <Card.Body className="formControl">
                            
                            {error && <Alert varient="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required />
                                </Form.Group>
                                <Button disabled={loading} className="w-50 justify" type="submit">
                                    Sign In
                                </Button>
                            </Form>
                        </Card.Body>
                        <div className="w-110 text-center mt3">
                            <Link to="/signup">Register Today!</Link>
                        </div>
                    </Card>
                    </Col>
                </Row>

            </Container>




        </div>
    )
}

export default SignInComponent
