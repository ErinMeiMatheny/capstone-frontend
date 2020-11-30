import React, { useState } from 'react'
import { Container, Card, Col, Row, Button, Alert } from "react-bootstrap"
import { useAuth } from "../../Context/AuthContext"
import { useHistory } from "react-router-dom"
import JobForm from './JobForm';
import "./Home.css"




export default function Home() {

    const [error, setError] = useState("")
    const { currentUser, signOut } = useAuth()
    const { history } = useHistory()

    async function handleLogout() {

        setError("")

        try {
            await signOut()
            history.push("/signin")
        } catch (error) {
            setError("Failed signout")
        }
    }



    return (
    <div className="home-page">
            
            <div className="background1" />
            <div className="background2" />
        
     <Container className="homeContainer">
        <Row>
            <Card>
                <Card.Body>
                    <h3 className="text-center"> Welcome Back {currentUser.email}! </h3>
                    {error && <Alert varient="danger">{error}</Alert>}
                    <div className="text-center">
                        <Button varient="link" onClick={handleLogout}>Log out</Button>
                    </div>
                </Card.Body>
            </Card>
        </Row>

            <br></br>


            <JobForm></JobForm>
            
            <Row className="homeRow">
            
                
            </Row>

        </Container>

        

    </div>


    )
}


