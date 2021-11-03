import React, {ReactElement} from 'react';
import {Grid, Typography} from '@material-ui/core';
import {Header, Page, Content, Table, TableColumn} from '@backstage/core-components';
import {makeStyles} from "@material-ui/core/styles";
import {useLinks} from "../../hooks/useLinks";

const useStyles = makeStyles({
    gridPadding: {
      padding: '10px',
    },
  gridParent: {
    height: '100%',
  },
  heading: {
    marginTop: '0px',
  },
  linkParent: {
    width: '100%',
    textAlign: 'center',
  },
  link: {
    color: '#112e51',
    textDecoration: 'underline',
  },
  contact: {
    width: '100%',
    textAlign: 'left',
  },
  });

const columns: TableColumn[] = [
  { title: 'Product Name',
    field: 'productName'
  },
  {
    title: 'Github',
    field: 'github'
  },
  {
    title: 'Confluence',
    field: 'confluence'
  },
  {
    title: 'Jira',
    field: 'jira'
  },
  {
    title: 'Licensing',
    field: 'licensing'
  },
  {
    title: 'SSL Certs',
    field: 'sslCerts'
  }
];

export const ImportantLinkComponent = () => {
    const classes = useStyles();
    const links = useLinks();
    function renderLinks(linkStrings: string[]): ReactElement {
      return <Grid className={classes.linkParent}>
        {linkStrings.map((linkString, i) =>
          <Grid key={i}>
            <a href="#" className={classes.link}>{linkString}</a>
          </Grid>)}
      </Grid>
    }
    const tableData = React.useMemo(() => {
      return links.map(linkDataItem => {

        return {
          productName: <Typography variant="subtitle1">{linkDataItem.productName}</Typography>,
          github: renderLinks(linkDataItem.github),
          confluence: renderLinks(linkDataItem.confluence),
          jira: renderLinks(linkDataItem.jira),
          licensing: renderLinks(linkDataItem.licensing),
          sslCerts: renderLinks(linkDataItem.sslCerts)
        }
      });
    }, [links]);

    return (
        <Page themeId="tool">
            <Header title="Important Links" />
            <Content>
            <Grid container>
          <Grid
            container
            lg={2}
            item={true}
            direction="column"
            className={classes.gridPadding}
          >

          </Grid>
          <Grid
            container
            lg={10}
            item={true}
            direction="column"
            className={classes.gridPadding}
          >
            <Grid item>
              <Table title="Important Links"
              columns={columns}
              data={tableData}
              options={{ paging: false }}
              />
            </Grid>
          </Grid>
        </Grid>
            </Content>
        </Page>
    );
};
