import React from 'react';
import axios from 'axios';
import Layout from '../../components/MyLayout';

const Post = ({ show }) => (
  <Layout>
    <h1>{show.name}</h1>
    <p>{show.summary.replace(/<[/]?[pb]>/g, '')}</p>
    <img alt={show.name} src={show.image.medium} />
  </Layout>
);

Post.getInitialProps = async ctx => {
  const { id } = ctx.query;
  const res = await axios.get(`https://api.tvmaze.com/shows/${id}`);
  const show = res.data;

  return {
    show,
  };
};

export default Post;
