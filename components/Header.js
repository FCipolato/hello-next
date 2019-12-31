import React from 'react';

import Link from 'next/link';
import styled from 'styled-components';

const A = styled.a`
  margin-right: 15px;
`;

const Header = () => (
  <div>
    <Link href="/">
      <A>Home</A>
    </Link>
    <Link href="/about">
      <A>About</A>
    </Link>
  </div>
);

export default Header;
