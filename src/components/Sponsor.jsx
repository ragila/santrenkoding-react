import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Example = props => {
  return (
    <Container>
      <Row className="row justify-content-md-center">
        <Col md="4">
          <div className="text-center">
            <br />
            <h3>Sponsor & Partner</h3>
            <br />
          </div>
          <img src="http://i67.tinypic.com/2hcn70k.jpg" alt="" width="100%" />
        </Col>
      </Row>
      <br />
      <Row>
        <Col md="2">
          <img
            src="https://1.bp.blogspot.com/-GZjl-D1QU6k/WgpvD8krquI/AAAAAAAAE0Y/tkrHzHHdt-4BdvmofUT7vuNtjG4ANIRPQCLcBGAs/s400/Undip.png"
            alt=""
            height="100px"
          />
        </Col>
        <Col md="2">
          <img
            src="http://adiwibowo.files.wordpress.com/2012/10/logo-udinus.png?resize=370%2C358"
            alt=""
            height="100px"
          />
        </Col>
        <Col md="2">
          <img
            src="https://upload.wikimedia.org/wikipedia/id/archive/6/6a/20150926142003%21Logo_unisbank.jpg"
            alt=""
            height="100px"
          />
        </Col>
        <Col md="2">
          <img
            src="http://id.indonesiayp.com/img/id/c/1445918663-86-pt-java-valley-technology.png"
            alt=""
            height="100px"
          />
        </Col>
        <Col md="2">
          <img
            src="https://dynamiclearningid.files.wordpress.com/2017/01/orderdilla.png?w=500"
            alt=""
            height="100px"
          />
        </Col>
        <Col md="2">
          <img
            src="https://www.go-mekanik.com/assets/public/src/imgs/gomekanik/logo.png"
            alt=""
            height="100px"
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col md="2">
          <img
            src="http://sdk.semarangkota.go.id/web/pemkot.png"
            alt=""
            height="100px"
          />
        </Col>
        <Col md="4 text-center">
          <img
            src="http://www.sandec.org/images/sandec-logo.png"
            alt=""
            height="80px"
          />
        </Col>
        <Col md="2">
          <img src="http://i64.tinypic.com/28v94w6.png" alt="" height="120px" />
        </Col>
        <Col md="4">
          <img
            src="http://sdk.semarangkota.go.id/komunitas/logokomunitas/20161215114909logo-p.png"
            alt=""
            height="50px"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Example;
