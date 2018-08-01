import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'antd/dist/antd.css';

const Example = props => {
  return (
    <Container>
      <Row className="row justify-content-md-center">
        <Col md="4">
          <div className="text-center">
            <h3>Kontak</h3>
            <br />
            <i class="anticon anticon-phone" />082225111587
            <p>
              <i class="anticon anticon-mail" />santrenkoding@gmail.com
            </p>
            <i class="anticon anticon-environment" />Titik Ruang Space, Jl.
            Ngesrep Tim. III No.67, Sumurboto, Banyumanik, Kota Semarang, Jawa
            Tengah 50269
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Example;
