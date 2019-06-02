import React from 'react';
import { InstantSearch } from 'react-instantsearch-dom';
import SearchWrapper from '../SearchWrapper';
import { render } from '@testing-library/react';
jest.mock('react-instantsearch-dom');

describe('SearchWrapper', () => {
  afterEach(() => {
    InstantSearch.mockClear();
  });

  it('throws without required values', () => {
    const consoleErrorBackup = console.error;
    console.error = () => {};
    expect(() => {
      // `algoliaAppId` missing
      render(<SearchWrapper algoliaSearchApiKey="b" algoliaIndexName="c" />);
    }).toThrow();

    expect(() => {
      // `algoliaSearchApiKey` missing
      render(<SearchWrapper algoliaAppId="a" algoliaIndexName="c" />);
    }).toThrow();

    expect(() => {
      // `algoliaIndexName` missing
      render(<SearchWrapper algoliaAppId="a" algoliaSearchApiKey="b" />);
    }).toThrow();

    console.error = consoleErrorBackup;
  });

  it('renders InstantSearch with given values', () => {
    const { container } = render(
      <SearchWrapper
        algoliaAppId="a"
        algoliaSearchApiKey="b"
        algoliaIndexName="c"
      />
    );
    expect(InstantSearch).toHaveBeenCalledTimes(1);
    expect(InstantSearch).toHaveBeenCalledWith(
      expect.objectContaining({
        indexName: 'c',
        searchClient: expect.objectContaining({
          applicationID: 'a',
          apiKey: 'b',
        }),
      }),
      {}
    );
  });
});
