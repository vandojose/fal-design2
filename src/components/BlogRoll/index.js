/* eslint-disable react/prefer-stateless-function */
/* eslint-disable max-len */
import React from "react";

import { Link, graphql, StaticQuery } from "gatsby";
import PropTypes from "prop-types";

import PreviewCompatibleImage from "../PreviewCompatibleImage";
import { CardList, Card, BgImage, CategoryFilter } from "./styles";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const truncateExverpt = (str, num) => {
      if (str.length <= num) {
        return str;
      }
      return `${str.slice(0, num)}...`;
    };

    return (
      <div className="container" style={{ padding: "10rem 0" }}>
        <CardList>
          {posts &&
            posts.map(({ node: post }) => (
              <Card key={post.id}>
                <h3>{post.frontmatter.title}</h3>
                <Link to={post.fields.slug}>
                  <div className="cardContent">
                    {post.frontmatter.featuredimage ? (
                      <div className="featured-thumbnail">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                          }}
                        />
                      </div>
                    ) : null}
                    {post.excerpt && (
                      <div
                        className="cardExverpt"
                        dangerouslySetInnerHTML={{
                          __html: truncateExverpt(post.excerpt, 200),
                        }}
                      />
                    )}
                  </div>
                </Link>
              </Card>
            ))}
        </CardList>
      </div>
    );
  }
}

BlogRoll.propTypes = {
  // eslint-disable-next-line react/require-default-props
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      // eslint-disable-next-line react/forbid-prop-types
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
