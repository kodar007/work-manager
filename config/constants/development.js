const DOMAIN = 'topcoder-dev.com'
const DEV_API_HOSTNAME = `https://api.${DOMAIN}`

module.exports = {
  ACCOUNTS_APP_CONNECTOR_URL: `https://accounts.${DOMAIN}/connector.html`,
  ACCOUNTS_APP_LOGIN_URL: `https://accounts.${DOMAIN}/member`,
  COMMUNITY_APP_URL: `https://www.${DOMAIN}`,
  MEMBER_API_URL: `${DEV_API_HOSTNAME}/v4/members`,
  MEMBER_API_V3_URL: `${DEV_API_HOSTNAME}/v3/members`,
  DEV_APP_URL: `http://local.${DOMAIN}`,
  CHALLENGE_API_URL: `${DEV_API_HOSTNAME}/v5/challenges`,
  CHALLENGE_TIMELINE_TEMPLATES_URL: `${DEV_API_HOSTNAME}/v5/timeline-templates`,
  CHALLENGE_TYPES_URL: `${DEV_API_HOSTNAME}/v5/challenge-types`,
  CHALLENGE_TRACKS_URL: `${DEV_API_HOSTNAME}/v5/challenge-tracks`,
  CHALLENGE_PHASES_URL: `${DEV_API_HOSTNAME}/v5/challenge-phases`,
  CHALLENGE_TIMELINES_URL: `${DEV_API_HOSTNAME}/v5/challenge-timelines`,
  PROJECT_API_URL: `${DEV_API_HOSTNAME}/v5/projects`,
  GROUPS_API_URL: `${DEV_API_HOSTNAME}/v5/groups`,
  TERMS_API_URL: `${DEV_API_HOSTNAME}/v5/terms`,
  RESOURCES_API_URL: `${DEV_API_HOSTNAME}/v5/resources`,
  RESOURCE_ROLES_API_URL: `${DEV_API_HOSTNAME}/v5/resource-roles`,
  PLATFORMS_V4_API_URL: `${DEV_API_HOSTNAME}/v4/platforms`,
  TECHNOLOGIES_V4_API_URL: `${DEV_API_HOSTNAME}/v4/technologies`,
  CONNECT_APP_URL: `https://connect.${DOMAIN}`,
  DIRECT_PROJECT_URL: `https://www.${DOMAIN}/direct`,
  ONLINE_REVIEW_URL: `https://software.${DOMAIN}`,
  DEFAULT_TERM_UUID: 'ae6fc4ff-3bd1-4e3f-a987-cc60ab94b422', // Terms & Conditions of Use at TopCoder
  DEFAULT_NDA_UUID: '7245bb7d-d7c9-45a0-9603-d5ff05af0977', // Appirio NDA v2.0
  SUBMITTER_ROLE_UUID: '732339e7-8e30-49d7-9198-cccf9451e221',
  DEV_TRACK_ID: '9b6fc876-f4d9-4ccb-9dfd-419247628825',
  DES_TRACK_ID: '5fa04185-041f-49a6-bfd1-fe82533cd6c8',
  DS_TRACK_ID: 'c0f5d461-8219-4c14-878a-c3a3f356466d',
  QA_TRACK_ID: '36e6a8d0-7e1e-4608-a673-64279d99c115',
  SEGMENT_API_KEY: 'QBtLgV8vCiuRX1lDikbMjcoe9aCHkF6n'
}
