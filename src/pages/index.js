import React from 'react';
import Link from 'gatsby-link';
import PostListing from '../components/Posts/PostListing';


const IndexPage = ({data}) => (
  <div>
    <h2>Here Are My Thoughts Bruh</h2>
    {data.allContentfulBlogPost.edges.map(({node}) => (
      <PostListing key={node.id} post={node} />
    ))}
  </div>
);

export default IndexPage

export const query = graphql`
query SiteMeta {
  site {
    siteMetadata {
      title
      desc
      funnelName
    }
  }
  allContentfulBlogPost {
    edges {
      node {
        title
        createdAt(formatString: "MMMM DD, YYYY")
        body {
          childMarkdownRemark {
              excerpt
          }
        }
        slug
        id
      }
    }
  }
}
`