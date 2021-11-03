import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { Header, Page, Content } from '@backstage/core-components';
import { makeStyles } from '@material-ui/core/styles';
import { LeftNavComponent } from '../LeftNavComponent';
import {DashboardTable} from "./DashboardTable";
import { Route } from 'react-router';
import { FlatRoutes } from '@backstage/core-app-api';
import {ImportantLinkComponent} from "../ImportantLinkComponent";

const useStyles = makeStyles({
  gridPadding: {
    padding: '10px',
  },
});

export const DashboardComponent = () => {
  const classes = useStyles();
  const [table, setTable] = useState('home');

  return (
    <Page themeId="tool">
      <Header title="DevOps Dashboard"></Header>
      <Content>
        <Grid container>
          <Grid
            container
            lg={2}
            item={true}
            direction="column"
            className={classes.gridPadding}
          >
            <LeftNavComponent tableProp={{ table, setTable }} />
          </Grid>
          <Grid
            container
            lg={10}
            item={true}
            direction="column"
            className={classes.gridPadding}
          >
            <Grid item>
              <FlatRoutes>
                <Route path="/" element={<DashboardTable />} />
                <Route path="/links" element={<ImportantLinkComponent />} />
              </FlatRoutes>
            </Grid>
          </Grid>
        </Grid>
      </Content>
    </Page>
  );
};
