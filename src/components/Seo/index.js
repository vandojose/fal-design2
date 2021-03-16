import React from "react";
import { Helmet } from "react-helmet";

import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";

function SEO({
  description,
  lang,
  meta,
  title,
  keywords,
  type,
  socialImage,
  publishedTime,
  modifiedTime,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            locale
            twitter
            twitterAuthor
            twitterUrl
            facebookUrl
            facebookUrl
          }
        }
      }
    `
  );

  const metaDescription =
    description.replace("<p>", "").replace("</p>", "") ||
    site.siteMetadata.description;
  const typePage = type || "website";
  const socialMediaImg = socialImage;

  const articleDate = () =>
    publishedTime
      ? {
          name: `article:published_time`,
          content: publishedTime,
        }
      : "";

  const articleModified = () =>
    modifiedTime
      ? {
          name: `article:modified_time`,
          content: modifiedTime,
        }
      : "";

  const articleUpdate = () =>
    modifiedTime
      ? {
          name: `og:updated_time`,
          content: modifiedTime,
        }
      : "";

  return (
    <Helmet
      //     <script type="application/ld+json">{`
      //     {
      //         "@context": "http://schema.org"
      //     }
      // `}</script>

      // <script async src="https://platform.twitter.com/widgets.js" charset="utf-8" />
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          property: `keywords`,
          content: keywords,
        },

        {
          name: `description`,
          content: metaDescription,
        },

        {
          name: `image`,
          content: `${site.siteMetadata.siteUrl}${socialMediaImg}`,
        },
        publishedTime
          ? {
              name: `article:published_time`,
              content: publishedTime,
            }
          : "",
        modifiedTime
          ? {
              name: `article:modified_time`,
              content: modifiedTime,
            }
          : "",
        {
          name: `og:title`,
          property: title,
        },

        {
          name: `og:description`,
          property: metaDescription,
        },

        {
          name: `og:site_name`,
          property: title,
        },
        {
          name: `og:type`,
          property: typePage,
        },
        modifiedTime
          ? {
              name: `og:updated_time`,
              property: modifiedTime,
            }
          : "",
        {
          name: `og:locale`,
          property: site.siteMetadata.locale,
        },
        {
          name: `og:url`,
          property: site.siteMetadata.siteUrl,
        },

        {
          name: `og:image`,
          property: `${site.siteMetadata.siteUrl}${socialMediaImg}`,
        },

        {
          name: `og:image:secure_url`,
          property: `${site.siteMetadata.siteUrl}${socialMediaImg}`,
        },

        {
          name: `og:image:alt`,
          property: `${site.siteMetadata.title}`,
        },

        {
          name: `og:image:type`,
          property: `image/png`,
        },

        {
          name: `og:image:width`,
          property: "1200",
        },

        {
          name: `og:image:height`,
          property: "630",
        },

        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },

        {
          name: `twitter:title`,
          content: title,
        },

        {
          name: `twitter:site`,
          content: site.siteMetadata.twitter,
        },

        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },

        {
          name: `twitter:image`,
          content: `${site.siteMetadata.siteUrl}${socialMediaImg}`,
        },

        {
          name: `twitter:image:src`,
          content: `${site.siteMetadata.siteUrl}${socialMediaImg}`,
        },

        {
          name: `twitter:image:width`,
          content: "1200",
        },

        {
          name: `twitter:image:height`,
          content: "630",
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `pt-br`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
