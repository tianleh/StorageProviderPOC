import {
  PluginInitializerContext,
  CoreSetup,
  CoreStart,
  Plugin,
  Logger,
} from '../../../src/core/server';

import { AcsUserPluginSetup, AcsUserPluginStart, AppPluginSetupDependencies } from './types';
import { defineRoutes } from './routes';
import { ConfigurationClient } from 'src/plugins/application_config/server/types';

export class MyClient implements ConfigurationClient {
  getConfig(): Promise<string> {
    throw new Error('Method not implemented.');
  }
  createConfig(): void {
    throw new Error('Method not implemented.');
  }

}

export class AcsUserPlugin implements Plugin<AcsUserPluginSetup, AcsUserPluginStart> {
  private readonly logger: Logger;

  constructor(initializerContext: PluginInitializerContext) {
    this.logger = initializerContext.logger.get();
  }

  public setup(core: CoreSetup, { applicationConfig }: AppPluginSetupDependencies) {
    this.logger.info('*******acsUser: Setup');
    const router = core.http.createRouter();

    const getFunc = applicationConfig.getConfigurationClient;

    console.log(`*** getFunc is ${getFunc}`);

    // const client = new MyClient();

    // applicationConfig.registerConfigurationClient(client);

    // Register server side APIs
    defineRoutes(router, applicationConfig);

    return {};
  }

  public start(core: CoreStart) {
    this.logger.debug('acsUser: Started');

    return {};
  }

  public stop() { }
}
