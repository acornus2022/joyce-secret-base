const CLIENT_ID = process.env.CLIENT_ID || "{clientId}";
const ISSUER =
  process.env.ISSUER || "https://{yourOktaDomain}.com/oauth2/default";
const IMPLICIT_REDIRECT =
  process.env.IMPLICIT_REDIRECT || "http://localhost:8080/implicit/callback";
const OKTA_TESTING_DISABLEHTTPSCHECK =
  process.env.OKTA_TESTING_DISABLEHTTPSCHECK || false;
console.log(process.env.IMPLICIT_REDIRECT);
export default {
  oidc: {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: IMPLICIT_REDIRECT,
    scopes: ["openid", "profile", "email"],
    pkce: true,
    disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
  },
};
