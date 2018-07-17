import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import NestedList from './NavMenu';

export class Layout extends Component {
  displayName = Layout.name

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col sm={3}>
                    <NestedList />
          </Col>
          <Col sm={9}>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    );
  }
}
