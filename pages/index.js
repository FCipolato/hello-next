import axios from 'axios';
import Layout from '../components/MyLayout';
import Link from 'next/link';

const Index = ({ shows }) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {shows.map(show => (
        <li key={show.id}>
          <Link href='/p/[id]' as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async () => {
  const res = await axios.get('https://api.tvmaze.com/search/shows?q=batman');
  const data = res.data;

  return {
    shows: data.map(el => el.show),
  }
}

export default Index;
