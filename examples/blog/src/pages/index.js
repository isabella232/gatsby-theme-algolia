import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import { SearchWrapper, SearchResult, SearchBox } from "gatsby-theme-algolia"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />
        <SearchWrapper>
          <SearchBox />
          <SearchResult
            hitComponent={({ hit: { title, description, date, path } }) => (
              <div key={path}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={path}>
                    {title}
                  </Link>
                </h3>
                <small>{new Date(date).toDateString()}</small>
                <p>{description}</p>
              </div>
            )}
          />
        </SearchWrapper>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
