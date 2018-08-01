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
        <Col>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://lh3.googleusercontent.com/XLlyoc7OLR2dgFdnhKk-83-6_kxoTXu-6RyPcUiFc_UiSwZmuIvibNfS307Crb3IcFSbPjq1EdHNIknl-_4N5QAVpBFAZmGeC3d6ZMLwng5eAhnKBnoD1V-pcItiFukHZIq0UgA62NvO_Yg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Kajian Koding #3</CardTitle>
              <CardText>ReactJS dan Firebase Auth/Hosting</CardText>
              <CardText>
                <small className="text-muted kiri kiri">
                  by Santren Koding
                </small>
              </CardText>
              <CardText>
                <small className="kanan">Kuota Terbatas</small>
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://lh5.googleusercontent.com/-JajpG87BjXAxqMCAu7bs_Bb-c84GUdFtG9w0mNB_dQ1oaOnT3aRYYllYr9tHnB-rLJ8ZxpOHA=w2381"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Kajian Koding #2</CardTitle>
              <CardText>html, css, bootstrap dasar</CardText>
              <CardText>
                <small className="text-muted kiri">by Santren Koding</small>
              </CardText>
              <CardText>
                <small className="kanan">Kuota Terbatas</small>
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://lh5.googleusercontent.com/Nw8x_CE9s4N8WGggkhxit5nHdo8j03kr0daRbRTRhduOtJzwmaw3h-iR0T4iBiXrEyQqN-q_VA=w3572"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Kajian Koding #1</CardTitle>
              <CardText>Belajar Laravel Dasar</CardText>
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
          Mulai Belajar
        </a>
      </div>
    </Container>
  );
};

export default Example;
