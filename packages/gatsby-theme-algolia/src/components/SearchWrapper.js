import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';

import 'instantsearch.css/themes/reset.css';

const checkRequiredValues = (
  algoliaAppId,
  algoliaSearchApiKey,
  algoliaIndexName
) => {
  [
    { value: algoliaAppId, name: 'algoliaAppId' },
    { value: algoliaSearchApiKey, name: 'algoliaSearchApiKey' },
    { value: algoliaIndexName, name: 'algoliaIndexName' },
  ].forEach(({ value, name }) => {
    if (!value) {
      throw new Error(`${name} is missing!`);
    }
  });
};

export default ({
  algoliaAppId = process.env.GATSBY_ALGOLIA_APP_ID,
  algoliaSearchApiKey = process.env.GATSBY_ALGOLIA_SEARCH_API_KEY,
  algoliaIndexName = process.env.GATSBY_ALGOLIA_INDEX_NAME,
  children,
}) => {
  checkRequiredValues(algoliaAppId, algoliaSearchApiKey, algoliaIndexName);

  const searchClient = algoliasearch(algoliaAppId, algoliaSearchApiKey);
  return (
    <InstantSearch indexName={algoliaIndexName} searchClient={searchClient}>
      {children}
    </InstantSearch>
  );
};
