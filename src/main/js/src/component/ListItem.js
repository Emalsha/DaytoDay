import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import StyleIcon from '@material-ui/icons/Style';
import BallotIcon from '@material-ui/icons/Ballot';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/dashboard">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component={Link} to="/cards">
      <ListItemIcon>
        <StyleIcon />
      </ListItemIcon>
      <ListItemText primary="Cards" />
    </ListItem>
    <ListItem button component={Link} to="/goals">
      <ListItemIcon>
        <BallotIcon />
      </ListItemIcon>
      <ListItemText primary="Goals" />
    </ListItem>
    <ListItem button component={Link} to="/reports">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button component={Link} to="/motivations">
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Motivation" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>View Progress</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last Month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last Year" />
    </ListItem>
  </div>
);