import { PluginInitializerContext } from '../../../src/core/server';
import { AcsUserPlugin } from './plugin';

// This exports static code and TypeScript types,
// as well as, OpenSearch Dashboards Platform `plugin()` initializer.

export function plugin(initializerContext: PluginInitializerContext) {
  return new AcsUserPlugin(initializerContext);
}

export { AcsUserPluginSetup, AcsUserPluginStart } from './types';
