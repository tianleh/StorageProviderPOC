import { ConfigurationClient } from 'src/plugins/application_config/server/types';
import { IRouter } from '../../../../src/core/server';

export function defineRoutes(router: IRouter, applicationConfigPluginSetup) {
  router.get(
    {
      path: '/api/acs_user/example',
      validate: false,
    },
    async (context, request, response) => {
      const client: ConfigurationClient = applicationConfigPluginSetup.getConfigurationClient(context.core.opensearch.client);

      const result = await client.getConfig();

      return response.ok({
        body: {
          time: result,
        },
      });
    }
  );
}
