import React from 'react';
import SearchWrapper from '../SearchWrapper';
import SearchResult from '../SearchResult';
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
} from '@testing-library/react';

describe('Rendering', () => {
  it('renders without arguments', () => {
    const { container } = render(
      <SearchWrapper
        algoliaAppId="a"
        algoliaSearchApiKey="b"
        algoliaIndexName="c"
      >
        <SearchResult />
      </SearchWrapper>
    );
    expect(container).toMatchSnapshot();
  });
});
