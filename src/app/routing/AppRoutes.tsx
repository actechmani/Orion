import { FC } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';
import OktaAuth, { toRelativeUrl } from '@okta/okta-auth-js'
import { RequiredAuth } from './SecureRoute';
import config from '../config';

const oktaAuth = new OktaAuth(config.oidc);

const AppRoutes: FC = () => {
  const navigate = useNavigate();

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    navigate(toRelativeUrl(originalUri || '/', window.location.origin));
  
  };

  return (
    
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
    <Routes>
      
        <Route path='/login/callback' element={<LoginCallback />} />
        <Route path='/*' element={<RequiredAuth />} />
      
    </Routes>
    </Security>
  );
};

export default AppRoutes;
