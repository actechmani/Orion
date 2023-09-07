const CLIENT_ID = process.env.CLIENT_ID || '0oaazgcf83Fvf47ZP4x7';
const ISSUER = process.env.ISSUER || 'https://dev-594742.okta.com/oauth2/default';
const REDIRECT_URI = `${window.location.origin}/login/callback`;

// eslint-disable-next-line
export default {
  oidc: {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: REDIRECT_URI,
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
  },
 
};
