import './index.scss';

import { AcsUserPlugin } from './plugin';

// This exports static code and TypeScript types,
// as well as, OpenSearch Dashboards Platform `plugin()` initializer.
export function plugin() {
  return new AcsUserPlugin();
}
export { AcsUserPluginSetup, AcsUserPluginStart } from './types';
