import { ApplicationConfigPluginSetup } from "../../../src/plugins/application_config/server";

import { ConsoleSetup } from '../../../src/plugins/console/server';

import { DataExplorerPluginSetup } from '../../../src/plugins/data_explorer/server/types';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AcsUserPluginSetup { }
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AcsUserPluginStart { }

export interface AppPluginSetupDependencies {
  applicationConfig: ApplicationConfigPluginSetup;

  // dataExplorerPluginSetup: DataExplorerPluginSetup;
}