const siteMetadata = require("./config/metadata");

module.exports = {
  siteMetadata,
  plugins: [
    // add
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        // selector: '[data-sal]', // Selector of the elements to be animated
        // animateClassName: 'sal-animate', // Class name which triggers animation
        // disabledClassName: 'sal-disabled', // Class name which defines the disabled state
        // rootMargin: '0% 50%', // Corresponds to root's bounding box margin
        // enterEventName: 'sal:in', // Enter event name
        // exitEventName: 'sal:out', // Exit event name
      },
    },
    // {
    //   resolve: "gatsby-plugin-robots-txt",
    //   options: {
    //     host: "https://fal-design.netlify.app/",
    //     sitemap: "https://fal-design.netlify.app/sitemap.xml",
    //     policy: [{ userAgent: "*", allow: "/" }],
    //   },
    // },

    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "UA-149337755-1",
    //     // this option places the tracking script into the head of the DOM
    //     head: true,
    //     // other options
    //     exclude: ["/404/"],
    //   },
    // },

    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://helenacampiglia.us7.list-manage.com/subscribe/post?u=10fd2435fa6284515cc15c90e&amp;id=9a1c3ba6b0", // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== "production",
      },
    },

    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.js`],
      },
    },

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:300,400,500,600,700`,
          `Josefin Sans\:300,300i,400,400i,500,500i,600,700`,
          `Lora\:300,300i,400,400i,500,500i,600,700`,
          `Poppins\:300,300i,400,400i,500,500i,600,700`,
        ],
        display: "swap",
      },
    },

    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#AC4646`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/assets/images`,
        name: "imgs",
      },
    },

    // end add
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ["/all.scss"], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `FAL Design - Design estratégico | Projetos para varejo`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#f1f1f1`,
        theme_color: `#AC4646`,
        display: `minimal-ui`,
        icon: `src/assets/images/common/favicon.png`,
        // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
};
