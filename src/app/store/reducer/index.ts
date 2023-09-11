import tenantReducer from './tenentReducer';
import clusterReducer from './clusterReducer';

const rootReducer = {
  tenant: tenantReducer,
  cluster: clusterReducer
}

export { rootReducer }
