import React from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { AppContext } from '../../services/context'

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderRadius: '20px 20px 0px 0px',
    left: 0
  },
});

export default function Navigation() {
  const [value, setValue] = React.useState(0);
  const { state } = React.useContext(AppContext);
  const classes = useStyles();

  return (
    <div>
      {state.Profiles.length === 0 ? 
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction label="Home" icon={<LocationOnIcon /> } component={Link} to="/"/>
          <BottomNavigationAction label="Leader" icon={<FavoriteIcon />} component={Link} to="/leaderboard"/>
        </BottomNavigation>
        :
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction label="Home" icon={<LocationOnIcon /> } component={Link} to="/"/>
          <BottomNavigationAction label="Leader" icon={<FavoriteIcon />} component={Link} to="/leaderboard"/>
          <BottomNavigationAction label="Quiz" icon={<RestoreIcon />} component={Link} to="/quiz"/>
          <BottomNavigationAction label="Points" icon={<FavoriteIcon />} component={Link} to={`/points/${state.Profiles[0].id}`}/>
          <BottomNavigationAction label="Profile" icon={<LocationOnIcon />} component={Link} to={`/profile/${state.Profiles[0].id}`}/>
        </BottomNavigation> 
      }
    </div>
  );
}
