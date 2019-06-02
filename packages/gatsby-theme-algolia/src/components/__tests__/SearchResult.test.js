import React from 'react';
import SearchWrapper from '../SearchWrapper';
import SearchResult from '../SearchResult';
import {
  render as originalRender,
  fireEvent,
  cleanup,
  waitForElement,
} from '@testing-library/react';

const render = ({ children }) => {
  return originalRender(
    <SearchWrapper
      algoliaAppId="a"
      algoliaSearchApiKey="b"
      algoliaIndexName="c"
    >
      {children}
    </SearchWrapper>
  );
};

describe('SearchResult', () => {
  it('renders Hits with hitComponent', () => {
    const hitComponent = () => <p />;
    render(<SearchResult hitComponent={hitComponent} />);
  });
});
