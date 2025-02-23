import { initAuth0 } from "@auth0/nextjs-auth0";

const auth0 = initAuth0({
  domain: process.env.AUTH0_ISSUER_BASE_URL,
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: "openid profile",
  redirectUri: process.env.AUTH0_BASE_URL + "/api/callback",
  postLogoutRedirectUri: process.env.AUTH0_BASE_URL,
  session: {
    cookieSecret: process.env.AUTH0_SECRET,
    cookieLifetime: 7200,
    storeIdToken: false,
    storeAccessToken: false,
    storeRefreshToken: false,
  },
});

export default auth0;
