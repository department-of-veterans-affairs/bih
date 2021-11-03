import React from 'react';
import { Table, TableColumn } from '@backstage/core-components';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles({
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

  const mapDashBoardData = (devOpsdata: any) => {
    const linkData = (
      <Grid>
        <h3 className={classes.heading}>Important Links</h3>
        {devOpsdata.data.links.map((link: any, i: number) => {
          return (
            <Grid className={classes.linkParent} key={i}>
              <a href="#" className={classes.link}>
                {link}
              </a>
            </Grid>
          );
        })}
      </Grid>
    );
    const contactData = (
      <Grid>
        <h3 className={classes.heading}>Product Contact List</h3>
        {devOpsdata.data.contactList.map((contact: any, i: number) => {
          return (
            <Grid className={classes.contact} key={i}>
              <Typography>
                {contact.name}: {contact.email}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    );
    const healthData =
      `${Math.ceil(devOpsdata.data.health)}` + ' of 3 servers are on';

    const updatedTestData = [
      {
        prodInfo: linkData,
        cicd: null,
        security: null,
        other: healthData,
      },
      {
        prodInfo: contactData,
        cicd: null,
        security: null,
        other: null,
      },
      {
        prodInfo: null,
        cicd: null,
        security: null,
        other: null,
      },
    ];
    setTestData(updatedTestData);
  };
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
    <Table
      title="Contact List"
      columns={columns}
      data={testData || null}
      options={{ paging: false }}
    />
  );
};
