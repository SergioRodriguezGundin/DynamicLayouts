import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';

const dashboardViewStyles = makeStyles((theme: Theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  appBarSpacer: theme.mixins.toolbar,
}));

const DashboardView = () => {
  const classes = dashboardViewStyles();

  return (
    <main className={classes.content}>
        <div className={classes.appBarSpacer}/>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <div>primera columna</div>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <div>segunda columna</div>
            </Grid>
            <Grid item xs={12}>
              <div>tercera columna</div>
            </Grid>
          </Grid>
        </Container>
      </main>
  )
}

export default DashboardView;