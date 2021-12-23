import { initPlasmicLoader } from "@plasmicapp/loader-react";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "verTqurZzkaRSaGwvFXmnc",  // ID of a project you are using
      token: "lji16eo8nlBukH2stIOHCxhUkuM3tmwe3a1cLfnBV8KY61QoEZO8hlA16yczpp5pbOPQRdtTrQGWEIaJD48xQ"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})