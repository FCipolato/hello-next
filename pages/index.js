import React from 'react';

import axios from 'axios';
import Link from 'next/link';
import styled from 'styled-components';

import Layout from '../components/MyLayout';

const A = styled.a``;

const Index = ({ shows }) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {shows.map(show => (
        <li key={show.id}>
          <Link href="/show/[id]" as={`/show/${show.id}`}>
            <A>{show.name}</A>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async () => {
  const res = await axios.get('https://api.tvmaze.com/search/shows?q=batman');
  const { data } = res;

  return {
    shows: data.map(el => el.show),
  };
};

export default Index;
