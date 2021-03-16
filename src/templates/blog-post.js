import React from "react";

import { graphql } from "gatsby";
import PropTypes from "prop-types";

import BlogPostTemplate from "../components/BlogPostTemplate";
import { HTMLContent } from "../components/Content";

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      image={post.frontmatter.image}
      featuredimage={post.frontmatter.featuredimage}
    />
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featuredpost
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 350, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 800, quality: 60) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            title
            description
            imgname
          }
        }
      }
    }
  }
`;
