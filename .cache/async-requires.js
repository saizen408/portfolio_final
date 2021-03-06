// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-job-js": () => import("./../src/templates/job.js" /* webpackChunkName: "component---src-templates-job-js" */),
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-me-js": () => import("./../src/pages/about-me.js" /* webpackChunkName: "component---src-pages-about-me-js" */),
  "component---src-pages-experience-js": () => import("./../src/pages/experience.js" /* webpackChunkName: "component---src-pages-experience-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-skills-js": () => import("./../src/pages/skills.js" /* webpackChunkName: "component---src-pages-skills-js" */)
}

