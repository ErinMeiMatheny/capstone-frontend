import React, { useRef, useState } from "react"
import { Container, Form, Button, Card, Alert, Row, Col } from "react-bootstrap"
import { useAuth } from "../../Context/AuthContext"
import { Link, useHistory } from "react-router-dom"


function SignupComponent() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        try {
            setError("")
            setLoading(true)
            signup(emailRef.current.value, passwordRef.current.value)
            history.push("/home")
        } catch {
            setError("Failed to create an account")
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
                        <Card className="mt-5 w-100 innerCard">
                        <h2 className="text-center mb-4">Sign Up</h2>
                            <Card.Body>
                               
                                {error && <Alert variant="danger">{error}</Alert>}
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group id="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" ref={emailRef} required />
                                    </Form.Group>
                                    <Form.Group id="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" ref={passwordRef} required />
                                    </Form.Group>
                                    <Form.Group id="password-confirm">
                                        <Form.Label>Password Confirmation</Form.Label>
                                        <Form.Control type="password" ref={passwordConfirmRef} required />
                                    </Form.Group>
                                    <Button disabled={loading} className="w-100" type="submit">
                                        Sign Up
                                    </Button>
                                </Form>
                            </Card.Body>
                            <div className="w-100 text-center mt-2">
                            Already have an account? <Link to="/signin">Log In</Link>
                        </div>
                        </Card>
                        
                    </Col>
                </Row>

            </Container>




        </div>
    )
}

export default SignupComponent
