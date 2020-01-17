const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-job-js": hot(preferDefault(require("/Users/ericowusu/Documents/Software_Projects/React/Portfolio/portfolio_5/src/templates/job.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/ericowusu/Documents/Software_Projects/React/Portfolio/portfolio_5/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/ericowusu/Documents/Software_Projects/React/Portfolio/portfolio_5/src/pages/404.js"))),
  "component---src-pages-about-me-js": hot(preferDefault(require("/Users/ericowusu/Documents/Software_Projects/React/Portfolio/portfolio_5/src/pages/about-me.js"))),
  "component---src-pages-experience-js": hot(preferDefault(require("/Users/ericowusu/Documents/Software_Projects/React/Portfolio/portfolio_5/src/pages/experience.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/ericowusu/Documents/Software_Projects/React/Portfolio/portfolio_5/src/pages/index.js"))),
  "component---src-pages-skills-js": hot(preferDefault(require("/Users/ericowusu/Documents/Software_Projects/React/Portfolio/portfolio_5/src/pages/skills.js")))
}

