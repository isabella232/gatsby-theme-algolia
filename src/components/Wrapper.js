import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_API_KEY
);

export default ({ children }) => (
  <InstantSearch
    indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
    searchClient={searchClient}
  >
    {children}
  </InstantSearch>
);
