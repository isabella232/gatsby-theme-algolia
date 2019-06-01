# gatsby-theme-algolia

`gatsby-theme-algolia` helps you add Algolia search into your Gatsby project.

It helps you in two ways:

1. Push your data to Algolia server
2. List your data with a search box

`gatsby-theme-algolia` is a wrapper of [`gatsby-plugin-algolia`](https://github.com/algolia/gatsby-plugin-algolia) and [`react-instantsearch`](https://github.com/algolia/react-instantsearch). If you are already familiar with them, it is recommended that you use them directly.

## Table of Contents

- [Getting Started](#getting-started)
  - [1. Push your data to Algolia server](#push-your-data-to-algolia-server)
  - [2. List your data with a search box](#list-your-data-with-a-search-box)
- [Customization](#customization)
  - [1. Specify what to index](#specify-what-to-index)
  - [2. Alter the UI](#alter-the-ui)
- [Contribution](#contribution)

## Installation

```bash
# with npm
npm install gatsby-theme-algolia --save-dev

# with yarn
yarn add gatsby-theme-algolia -D
```

## Getting Started

> This guide assumes you already have an account at [algolia](https://www.algolia.com) and have created an index.

### Push your data to Algolia server

#### gatsby-config.js

```js
module.exports = {
  // ...
  __experimentalThemes: [{ resolve: 'gatsby-theme-algolia' }],
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

You can grab that information from `API Keys` menu at [algolia](https://www.algolia.com).

In case of Netlify, you can specify them at `Settings > Build & deploy > Build environment variables`.

If you want to test on your local machine, create a file named `.env` on your project root and put like this:

```
GATSBY_ALGOLIA_APP_ID=xxx
GATSBY_ALGOLIA_ADMIN_API_KEY=xxx
GATSBY_ALGOLIA_SEARCH_API_KEY=xxx
GATSBY_ALGOLIA_INDEX_NAME=xxx
```

Since `GATSBY_ALGOLIA_ADMIN_API_KEY` is a secret information, you don't want to expose it to public. Run the following to avoid commiting the credentials.

```bash
echo '.env' >> .gitignore
```

#### Push it

Run the following command to push data to Algolia server.

```
# with npm
npm run build

# with yarn
yarn build
```

Check the dashboard if the data is well stored. At the dashboard, you need to go to `Configuration` and configure `Searchable attributes` properly.

### List your data with a search box

Open your index page file(maybe `src/pages/index.js` or `src/components/index.js`).

Import the components:

```js
import { SearchWrapper, SearchResult, SearchBox } from 'gatsby-theme-algolia';
```

Add the components:

```jsx
<SearchWrapper>
  <SearchBox />
  <SearchResult />
</SearchWrapper>
```

That's it. Now you will see the list of your data and the list will be filtered as you type a query on the search box.

## Customization

### Specify what to index

You can specify what kind of data to push to Algolia server.

You can add things to the `query` or change how `transformer` behaves.

```js
{
  resolve: 'gatsby-theme-algolia',
  options: {
    queries: [
      {
        query: `
          {
            allMarkdownRemark {
              edges {
                node {
                  excerpt
                  timeToRead
                  frontmatter {
                    title
                    date
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
      `,
        transformer: ({ data }) =>
          data.allMarkdownRemark.edges.map(
            ({
              node: {
                excerpt,
                timeToRead,
                frontmatter: { title, date },
                fields: { slug },
              },
            }) => ({
              title,
              timeToRead,
              date,
              description: excerpt,
              path: slug,
            })
          ),
      },
    ],
  },
}
```

### Alter the UI

Of course, you want to alter the default UI.

You can simply put a css file to override the default style.

Or you can pass a custom component to replace the default list item with.

```jsx
const hitComponent = ({
  hit: { title, timeToRead, date, description, path },
}) => (
  <article>
    <h2>
      <a href={path}>{title}</a>
    </h2>
    <p>{description}</p>
    <p>
      {date} ∙ {timeToRead}min(s)
    </p>
  </article>
);

...

<SearchWrapper>
  <div className="header">
    <h1>Test Website</h1>
    <SearchBox />
  </div>
  <div className="body">
    <SearchResult hitComponent={hitComponent} />
  </div>
</SearchWrapper>
```

## Contribution

Any contribution is welcomed. You can file an issue for suggestion or even create a pull request for whatever you want.
