import {DashboardApi, dashboardApiRef, DashboardRestApi} from "../../api/api";
import {ApiProvider, ApiRegistry, ConfigReader} from "@backstage/core-app-api";
import {renderInTestApp} from "@backstage/test-utils";
import {ImportantLinkComponent} from "./ImportantLinkComponent";
import React from "react";
import {lightTheme} from "@backstage/theme";
import { ThemeProvider } from "@material-ui/core";

describe('ImportantLinkComponent', () => {
  it('should render', async () => {
    const dashboardApi: jest.Mocked<DashboardApi> = {
      getImportantLinks: () => Promise.resolve({
        data: []
      }),
    } as any;
    const apis = ApiRegistry.with(
      dashboardApiRef,
      DashboardRestApi.fromConfig(
        new ConfigReader({
          backend: {
            baseUrl: 'testUrl'
          },
          integrations: {}
        }),
      ),
    ).with(dashboardApiRef, dashboardApi);
    const rendered = await renderInTestApp(
      <ApiProvider apis={apis}>
        <ThemeProvider theme={lightTheme}>
          <ImportantLinkComponent />
        </ThemeProvider>
      </ApiProvider>
    );
    expect(rendered.getByText('Important Links')).toBeInTheDocument();
  });
});
