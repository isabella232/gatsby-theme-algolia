# gatsby-theme-algolia

`gatsby-theme-algolia` helps you add Algolia search into your Gatsby project.

It consists of two parts:

- 🚀  Pushing your data to Algolia server
- 🌷  UI components to list your data with a search box

## Installation

```bash
# with npm
npm install gatsby-theme-algolia --save-dev

# with yarn
yarn add gatsby-theme-algolia -D
```

## Guide

This guide assumes you already have an account at [algolia.com](https://www.algolia.com) and have created an index.

### 🚀  Push your data to Algolia server

#### gatsby-config.js

```js
module.exports = {
  // ...
  __experimentalThemes: ['gatsby-theme-algolia'],
};
```

#### Environment variables

You need these environment variables:

```
GATSBY_ALGOLIA_APP_ID
GATSBY_ALGOLIA_ADMIN_API_KEY
GATSBY_ALGOLIA_SEARCH_API_KEY
GATSBY_ALGOLIA_INDEX_NAME
```

You can grab that information from `API Keys` menu at [algolia.com](https://www.algolia.com).

In case of Netlify, you can specify them at `Settings > Build & deploy > Build environment variables`.

If you want to test on your local machine, create a file named `.env` on your project root and put like this:

```
GATSBY_ALGOLIA_APP_ID=xxx
GATSBY_ALGOLIA_ADMIN_API_KEY=xxx
GATSBY_ALGOLIA_SEARCH_API_KEY=xxx
GATSBY_ALGOLIA_INDEX_NAME=xxx
```

Since `GATSBY_ALGOLIA_ADMIN_API_KEY` is a secret information, you don't want to expose it to public. Add a line `.env` to your `.gitingore` to avoid commiting it.

#### Push it

Run the following command to push data to Algolia server.

```
# with npm
npm run build

# with yarn
yarn build
```

Check the dashboard if the data is well stored. At the dashboard, you need to go to `Configuration` and configure `Searchable attributes` properly.

### 🌷 List your data with a search box

Open your index page file(maybe `src/pages/index.js` or `src/components/index.js`).

Import the components:

```js
import { SearchWrapper, SearchResult, SearchBox } from 'gatsby-theme-algolia';
```

Add the components:

```jsx
<Wrapper>
  <SearchBox />
  <List />
</Wrapper>
```

Now it's done!
