import React, { Component } from 'react';
import { Container } from 'reactstrap';

export default class Footer extends Component {
  render() {
    return (
      <Container>
        <div className="text-muted">
          Copyright © Santren Koding 2018. All rights reserved.
        </div>
      </Container>
    );
  }
}
