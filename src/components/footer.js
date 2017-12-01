import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Footer = () => (
  <div className="footer">
    <Breadcrumb>
      <LinkContainer to="/">
        <BreadcrumbItem>Home</BreadcrumbItem>
      </LinkContainer>
      <LinkContainer to="/about">
        <BreadcrumbItem> About</BreadcrumbItem>
      </LinkContainer>
    </Breadcrumb>
  </div>
);

export default Footer;
