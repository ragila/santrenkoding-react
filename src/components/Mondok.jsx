import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Example = props => {
  return (
    <Container>
      <div className="text-center">
        <h3>Mondok by Santren Koding</h3>
        <p>
          Sebuah Kegiatan Belajar Intensif Programming &amp; Al Qur'an Selama 3
          Tahun hingga jaminan kerja{' '}
        </p>
      </div>
      <br />
      <Row className="row justify-content-md-center">
        <Col md="4">
          <img src="http://i67.tinypic.com/2m2gkyp.png" alt="" width="100%" />
        </Col>
      </Row>
      <br />
      <Col md="4" />
      <br />
      <div className="text-center">
        <a href="#a" class="btn btn-outline-success btn-md">
          Lihat Selengkapnya
        </a>
      </div>
    </Container>
  );
};

export default Example;
