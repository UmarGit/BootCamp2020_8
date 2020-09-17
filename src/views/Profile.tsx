import React from 'react';
import './css/Profile.css'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { motion } from "framer-motion";
import { AppContext } from '../services/context'

function Profile() {
  const { state } = React.useContext(AppContext);

  console.log(state)
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
    >
      <Grid container className='mainProfile'>
        <Grid item xs={10} sm={8}>
          {state.Profiles.length === 0 ?
            <Paper className='rankingListpro'>
            <Grid item xs={12} className='rankingProfile'>
              <AvatarGroup>
                <Badge
                  overlap="circle"
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  color="primary" badgeContent="0"
                >
                  <Avatar alt='avatarimage' className='Position1'>
                    <h1>EMT</h1>
                  </Avatar>
                </Badge>
              </AvatarGroup>
            </Grid>
            <div>
              <Paper elevation={0} className='listItem'>
                <div className='listheader'>
                  Please Register To View Your Profile
                </div>
              </Paper>
            </div>
          </Paper>
          :
          <Paper className='rankingListpro'>
          <Grid item xs={12} className='rankingProfile'>
            <AvatarGroup>
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                showZero
                color="primary" badgeContent={state.Profiles[0].quiz.score}
              >
                <Avatar alt='avatarimage' src={`${state.Profiles[0].avatar}`} className='Position1'/>
              </Badge>
            </AvatarGroup>
          </Grid>
          <div>
            <Paper elevation={0} className='listItem'>
              <div className='listheader'>
                {state.Profiles[0].name}
              </div>
            </Paper>
            <Paper elevation={0} className='listItem'>
              <div className='listimgpro'>
                <img alt='avatarimage' src={`${state.Profiles[0].avatar}`} />
              </div>
              <div className='listnamepro'>
                {state.Profiles[0].email}
              </div>
            </Paper>
            <Paper elevation={0} className='listItem'>
              <div className='listheader'>
                {state.Profiles[0].attempted ? 'Quiz Attempted Successfully !' : 'Quiz Not Attempted Yet !'}
              </div>
            </Paper>
          </div>
          </Paper>  
          }

        </Grid>
      </Grid>
    </motion.div>
  );
}

export default Profile
