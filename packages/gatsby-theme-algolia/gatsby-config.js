const defaultQueries = [
  {
    query: `
    {
      allMarkdownRemark {
        edges {
          node {
            excerpt
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `,
    transformer: ({ data }) =>
      data.allMarkdownRemark.edges.map(
        ({
          node: {
            excerpt,
            frontmatter: { title, date },
            fields: { slug },
          },
        }) => ({
          title,
          description: excerpt,
          date,
          path: slug,
        })
      ),
  },
];

const getQueries = queries => {
  if (!queries) {
    return defaultQueries;
  }
  return Array.isArray(queries) ? queries : [queries];
};

module.exports = ({ dotEnv = '.env', queries }) => {
  require('dotenv').config({ path: dotEnv });

  return {
    plugins: [
      {
        resolve: `gatsby-plugin-algolia`,
        options: {
          queries: getQueries(queries),
          apiKey: process.env.GATSBY_ALGOLIA_ADMIN_API_KEY,
          appId: process.env.GATSBY_ALGOLIA_APP_ID,
          indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        },
      },
    ],
  };
};
