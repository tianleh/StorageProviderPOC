import { NavigationPublicPluginStart } from '../../../src/plugins/navigation/public';

export interface AcsUserPluginSetup {
  getGreeting: () => string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AcsUserPluginStart {}

export interface AppPluginStartDependencies {
  navigation: NavigationPublicPluginStart;
}
