import React from 'react'
import "./LandingPage.css"
import "./LandingRowOne.css"
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import interview from "../../assets/interview.png"



function LandingRowTwo() {
    return (
        <div >
      
        <Jumbotron expand="" className="Jumbotron" style={{backgroundColor: "#f1f3f5"}}>
         
        <Container className="container">
        <h1 className="display-4">Why our Job Tracker?</h1>
           <Row  className="row">
           
                <Col sm="4" className="col">
               <h2 className="headertwo">
                   Build by students, For students.
               </h2>
               <p>
                   Having gone through our own steps of applying for positions, we found that many lack a clear and easy-to-use tracker to keep them "on track"
               </p>
                </Col>
              
            </Row> 
        </Container>
           
        <img className="LandingRowOne_Image d-none d-lg-block" src={interview} alt="trying to get it to load"/>
        
  



        </Jumbotron>


    </div>
    )
}

export default LandingRowTwo