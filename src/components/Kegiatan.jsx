import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Example = props => {
  return (
    <Container>
      <Row>
        <Col md="6" style={{ backgroundColor: '#0bc72a' }}>
          <div className="text-center text-white">
            <br />
            <h4>Kegiatan</h4>
            <br />
            <p>
              <i className="anticon anticon-login" /> Koding
            </p>
            <p>
              <i className="anticon anticon-login" /> Belajar Agama dan Al
              Qur'an
            </p>
            <p>
              <i className="anticon anticon-login" /> Pendidikan Karakter
            </p>
          </div>
        </Col>
        <Col md="6" className="border">
          <div className="text-center">
            <br />
            <img
              height="100px"
              src="http://i63.tinypic.com/oid9xu.png"
              alt=""
            />
            <h4>"Memberi Manfaat Untuk Ummat"</h4>
            <br />
            <p>-Santren Koding-</p>
            <br />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Example;
