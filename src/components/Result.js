import React from 'react';
import { Hits } from 'react-instantsearch-dom';

import 'instantsearch.css/themes/algolia.css';
import './Result.css';

const defaultHitComponent = ({ hit: { title, description, path } }) => (
  <article>
    <h2>
      <a href={path}>{title}</a>
    </h2>
    <p>{description}</p>
  </article>
);

export default ({ hitComponent = defaultHitComponent, ...args }) => (
  <Hits hitComponent={hitComponent} {...args} />
);
