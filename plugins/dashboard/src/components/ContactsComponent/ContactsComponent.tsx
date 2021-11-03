import React, { ReactElement } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Page, Content, Table, TableColumn } from '@backstage/core-components';
import { makeStyles } from '@material-ui/core/styles';
import { useContacts } from '../../hooks/useContacts';

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

export const ContactsComponent = () => {
  const classes = useStyles();
  const contacts = useContacts();
  function renderContacts(contactStrings: string[]): ReactElement {
    return (
      <Grid className={classes.linkParent}>
        {contactStrings.map((contactString, i) => (
          <Grid key={i}>
            <Typography className={classes.link}>{contactString}</Typography>
          </Grid>
        ))}
      </Grid>
    );
  }

  const tableData = React.useMemo(() => {
    return contacts.map(contactDataItem => {
      return {
        productName: (
          <Typography variant="subtitle1">
            {contactDataItem.productName}
          </Typography>
        ),
        productLine: (
          <Typography variant="subtitle1">
            {contactDataItem.productLine}
          </Typography>
        ),
        vaPm: renderContacts(contactDataItem.vaPm),
        bahPm: renderContacts(contactDataItem.bahPm),
        scrumMaster: renderContacts(contactDataItem.scrumMaster),
        techLead: renderContacts(contactDataItem.techLead),
      };
    });
  }, [contacts]);
  const columns: TableColumn[] = [
    {
      title: 'Product Name',
      field: 'prodName',
    },
    {
      title: 'Product Line',
      field: 'prodLine',
    },
    {
      title: 'VA PM',
      field: 'vapm',
    },
    {
      title: 'BAH PM',
      field: 'bahpm',
    },
    {
      title: 'Scrum Master',
      field: 'scrumMaster',
    },
    {
      title: 'Tech Lead',
      field: 'techLead',
    },
  ];

  return (
    <Page themeId="tool">
      <Content>
        <Grid
          container
          lg={12}
          item={true}
          direction="column"
          className={classes.gridPadding}
        >
          <Grid item>
            <Table
              title="Important Contacts"
              columns={columns}
              data={tableData}
              options={{ paging: false }}
            />
          </Grid>
        </Grid>
      </Content>
    </Page>
  );
};
