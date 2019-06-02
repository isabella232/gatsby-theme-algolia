import React from 'react';
import { Link } from 'gatsby';
import { Hits, Highlight } from 'react-instantsearch-dom';

import './SearchResult.css';

const defaultHitComponent = ({ hit }) => {
  const { path, date } = hit;
  return (
    <div key={path}>
      <h3>
        <Link to={path}>
          <Highlight hit={hit} attribute="title" />
        </Link>
      </h3>
      <small>{new Date(date).toDateString()}</small>
      <p>
        <Highlight hit={hit} attribute="description" />
      </p>
    </div>
  );
};

export default ({ hitComponent = defaultHitComponent, ...otherProps }) => (
  <Hits hitComponent={hitComponent} {...otherProps} />
);
