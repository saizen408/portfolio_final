/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = `${__dirname}/src/`;
const imagesPath = `${__dirname}/src/images/`;
const typographyPath = `${__dirname}/src/utils/typography`;
const siteName = `Eric Owusu`;
const siteShortName = `EO`;
const siteDescription = `This cool App contains information about my work experience as a software developer.`;

module.exports = {
  siteMetadata: {
    basePath: ``,
    path: path,
    imagesPath: imagesPath,
    typographyPath: typographyPath,
    title: `Portfolio`,
    siteUrl: `https://www.owusu.io`,
    siteName: `Eric Owusu`,
    siteShortName: `EKO`,
    siteDescription: `This cool App contains information about my work experience and projects as a software developer.`,
    siteKeywords: `Full Stack Developer, Software developer`,
    useMozJpeg: true,
    menuLinks: [
      // title = Link text
      // color = Animation background color on click
      { name: `home`, title: `Home`, color: `#000`, link: `` },
      {
        name: `experience`,
        title: `Projects`,
        color: `#3a3d98`,
        link: ``
      },
      { name: `skills`, title: `Skills`, color: `#03a2ec`, link: `` },
      { name: `aboutMe`, title: `About Me`, color: `#fff`, link: `` }
    ],
    email: `owusu.eric@protonmail.com`,
    social: {
      // Usernames
      twitter: `anon_Goku`,
      gitHub: `saizen408`,
      stackOverflow: `16146213/eric`,
      linkedIn: `in/ericowusu/`,
      resumeInPdf: `https://drive.google.com/open?id=1n-4x_HMA4UDroRk6Kkh2rCDcz4MFXnxl` // url or local link
    },
    homePage: {
      availableToHire: false,
      dotColors: ["#0e3e1e", "#6CC551"],
      h1Text: `Hi! I'm Eric Owusu`,
      h2Text: `I'm a Full Stack Developer who loves working with UI. I have a background in Electrical Engineering and Sales bringing a unique perspective to web and software development! `,
      typewriter: [
        `Coding is my passion 🤩`,
        `I'm a 🍣 and 🥩 lover`,
        `I'm a pretty fast learner and am always interested in learning new technologies 🤓`,
        `I don't just solve problems. I find new ones and solve those too! 🔎`,
        `I like to share what I know 👨🏾‍🏫`,
        `In my non-coding hours, I'm at the 🏋🏾‍♂️`,
        `I also do design and UX work <span style='background: linear-gradient(to right, #7f00ff, #e100ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;'>occasionally</span>`
      ]
    },
    // Color for menu background
    shapeColor: {
      link: { color: "#171616", hover: "#fff" },
      shape1: {
        // color: `#413f46`,
        color: `#394bad`,
        opacity: `0.8`
      },
      shape2: {
        // color: `#e6e5ea`,
        color: `#5f34af`,
        opacity: `0.8`
      },
      shape3: {
        // color: `#fff`,
        color: `#e01b5c`,
        opacity: `0.8`
      }
    },
    footer: `heart`
  },

  plugins: [
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: path
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: imagesPath
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: typographyPath
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteName,
        short_name: siteShortName,
        description: siteDescription,
        lang: `en`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `${imagesPath}icon.png`
      }
    },
    {
      resolve: `gatsby-plugin-transition-link`,
      options: {
        layout: require.resolve(`./src/layout`)
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        // color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/experience/_additionalSkills`]
      }
    }
  ]
};
