import React from 'react';
import { Hits, Highlight } from 'react-instantsearch-dom';

import './SearchResult.css';

const defaultHitComponent = ({ hit }) => {
  const { description, path } = hit;
  return (
    <article>
      <h2>
        <a href={path}>
          <Highlight hit={hit} attribute="title" />
        </a>
      </h2>
      <p>{description}</p>
    </article>
  );
};

export default ({ hitComponent = defaultHitComponent, ...args }) => (
  <Hits hitComponent={hitComponent} {...args} />
);
