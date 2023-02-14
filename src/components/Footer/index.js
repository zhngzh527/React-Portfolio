import React from "react";
import { IconContext } from "react-icons/lib";
import { FaGithub } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container >
    <IconContext.Provider value={{ size:"3em"}}>
    <footer>
      <Row>
      <Col md={{ span: 4, offset: 10 }} style={{
        width: "20rem", marginBottom: "5rem"
      }}>

        <a href="https://github.com/zhngzh527" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        
        </Col>
      </Row>
    </footer>
    </IconContext.Provider>
    </Container>
    
  );

}

export default Footer;