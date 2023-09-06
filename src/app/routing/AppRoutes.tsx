import { FC } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Security, LoginCallback } from '@okta/okta-react';
import OktaAuth, { toRelativeUrl } from '@okta/okta-auth-js'
import { PrivateRoutes } from './PrivateRoutes';


const oktaAuth = new OktaAuth({
  issuer: 'https://dev-594742.okta.com/oauth2/default',
  clientId: '0oaazgcf83Fvf47ZP4x7',
  redirectUri: 'http://localhost:3000/login/callback',
  pkce: true,
  scopes: ['openid', 'profile', 'email'],
});

const AppRoutes: FC = () => {
  const navigate = useNavigate();

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    navigate(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  return (
    <Routes>
      <Route path="/login/callback" element={<LoginCallback />} />
      <Route
        path="*"
        element={
          <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
            <PrivateRoutes />
          </Security>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
