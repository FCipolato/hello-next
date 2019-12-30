const axios = require ('axios');

module.exports = {
  exportTrailingSlash: true,
  exportPathMap: async () => {
    const paths = {
      '/': { page: '/' },
      '/about': { page: '/about' }
    };

    const res = await axios.get('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.data;
    const shows = data.map(el => el.show);

    shows.map(show => {
      paths[`/show/${show.id}`] = { page: '/show/[id]', query: { id: show.id } };
    });

    return paths;
  }
};
