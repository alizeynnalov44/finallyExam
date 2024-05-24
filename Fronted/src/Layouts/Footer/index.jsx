import React from 'react'
import { Col, Row } from 'antd';
import'./index.scss'
const Footer = () => {
  return (
  <footer>
     <div className="container">
     <Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
    >
      <Col className="gutter-row" span={6}>
        <div>
            <h2>Top Products</h2>
            <h4>Managed Website</h4>
            <h4>Managed Website</h4>
            <h4>Managed Website</h4>
            <h4>Managed Website</h4>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div >
        <h2>Quick Links</h2>
        <h4>Managed Website</h4>
            <h4>Managed Website</h4>
            <h4>Managed Website</h4>
            <h4>Managed Website</h4>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div >  <h2>Features</h2>
        <h4>Managed Website</h4>
            <h4>Managed Website</h4>
            <h4>Managed Website</h4>
            <h4>Managed Website</h4></div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div>  <h2>Resources</h2>
        <h4>Managed Website</h4>
            <h4>Managed Website</h4>
            <h4>Managed Website</h4>
            <h4>Managed Website</h4></div>
      </Col>
    </Row>
     </div>
  </footer>
  )
}

export default Footer