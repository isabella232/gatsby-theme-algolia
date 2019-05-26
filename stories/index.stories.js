import React from 'react';

import { storiesOf } from '@storybook/react';

import { SearchWrapper, SearchBox, SearchResult } from 'gatsby-theme-algolia';

storiesOf('default', module)
  .add('basic UI', () => (
    <SearchWrapper>
      <SearchBox />
      <SearchResult />
    </SearchWrapper>
  ))
  .add('without description', () => (
    <SearchWrapper>
      <SearchBox />
      <SearchResult attribute2={null} />
    </SearchWrapper>
  ))
  .add('with customized hit component', () => {
    const hit = ({ hit: { title, description, path } }) => (
      <article>
        <p>
          <a href={path}>{title}</a>
        </p>
        <p>{description}</p>
      </article>
    );
    return (
      <SearchWrapper>
        <SearchBox />
        <SearchResult hitComponent={hit} />
      </SearchWrapper>
    );
  });
