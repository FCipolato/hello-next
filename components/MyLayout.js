import React from 'react';

import styled from 'styled-components';

import Header from './Header';

const Div = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
`;

const Layout = ({ children }) => (
  <Div>
    <Header />
    {children}
  </Div>
);

export default Layout;
