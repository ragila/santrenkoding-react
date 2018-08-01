import React from 'react';
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  Container,
  CardBody,
  Row,
  Col
} from 'reactstrap';

const Example = props => {
  return (
    <Container>
      <div className="text-center">
        <h2>Daftar Kajian Koding Rutin</h2>
      </div>
      <br />
      <Row>
        <Col md="4">
          <Card>
            <CardImg
              top
              width="100%"
              src="https://lh5.googleusercontent.com/e6ixy5iFrGuPwlZFn0oU0vPgqMT9zPKdmswiBbZJEVpSbH6L2gVlcKAKFAoz7n31T45ZsSx8tQ=w1191"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Santren Kilat #1 (Coming Soon)</CardTitle>
              <CardText>4 Hari Intensif Laravel</CardText>
              <CardText>
                <small className="text-muted kiri">by Santren Koding</small>
              </CardText>
              <CardText>
                <small className="kanan">Kuota Terbatas</small>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <br />
      <div className="text-center">
        <a href="#a" class="btn btn-outline-success btn-md">
          Lihat Seluruh Santren Kilat
        </a>
      </div>
    </Container>
  );
};

export default Example;
