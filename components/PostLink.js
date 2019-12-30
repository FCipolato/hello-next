import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const A = styled.a``;

const PostLink = ({ id }) => (
  <li>
    <Link href="/p/[id]" as={`/p/${id}`}>
      <A>{id}</A>
    </Link>
  </li>
);

export default PostLink;
