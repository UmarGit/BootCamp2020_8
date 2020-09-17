import React from 'react';
import './css/Points.css'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { motion } from "framer-motion";
import { AppContext } from '../services/context'

function Points() {
  const { state } = React.useContext(AppContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
    >
      {state.Profiles.length === 0 ? 
        <Grid container className='mainPoints'>
          <Grid item xs={10} sm={8}>
            <Paper className='rankingListpoi'>
              <Grid item xs={12} className='rankingPoints'>
                <AvatarGroup>
                  <Badge
                    overlap="circle"
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    showZero
                    color="primary" badgeContent="0"
                  >
                    <Avatar alt="Remy Sharp" className='Position1'>
                      EMT
                    </Avatar>
                  </Badge>
                </AvatarGroup>
              </Grid>
              <div>
                <Paper elevation={0} className='listItem'>
                  <div className='listheader'>
                    You are not registered yet !
                  </div>
                </Paper>
              </div>
            </Paper>
          </Grid>
        </Grid>
      :
        <Grid container className='mainPoints'>
          <Grid item xs={10} sm={8}>
            <Paper className='rankingListpoi'>
              <Grid item xs={12} className='rankingPoints'>
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
                    <Avatar alt="Remy Sharp" src={`${state.Profiles[0].avatar}`} className='Position1'/>
                  </Badge>
                </AvatarGroup>
              </Grid>
              <div>
                <Paper elevation={0} className='listItem'>
                  <div className='listheader'>
                    All Times Best
                  </div>
                </Paper>
                <Paper elevation={0} className='listItem'>
                  <div className='listimgpoi'>
                    <img alt='avatarimage' src={`${state.Profiles[0].avatar}`} />
                  </div>
                  <div className='listnamepoi'>
                    {state.Profiles[0].name}
                  </div>
                  <div className='listpoints'>
                    <b>{state.Profiles[0].quiz.score}</b> <span className='listpointslistpoi'>points</span>
                  </div>
                </Paper>
              </div>
            </Paper>
          </Grid>
        </Grid>
      }

    </motion.div>
  );
}

export default Points
