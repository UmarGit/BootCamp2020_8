import React from 'react';
import firebase from 'firebase'
import './css/Leader.css'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { motion } from "framer-motion";
import {Profile} from '../types/types'
import CircularProgress from '@material-ui/core/CircularProgress';


function Leader() {
  var [topfive, settopfive] = React.useState<Profile[]>([])

  React.useEffect(() => {

    var database = firebase.database();

    const fetchdata = () => {
      var starCountRef = database.ref('leaderboard/');
      starCountRef.on('value', function(snapshot) {
          var data: any[] = Object.entries(snapshot.val()).map(val=>{return(val[1])}).slice(0,5)
          settopfive(data.sort((a: Profile,b: Profile)=>{ return( b.quiz.score - a.quiz.score ) }))
      });
    }

    fetchdata()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
    >
      <Grid container className='mainLeader'>
        <Grid item xs={10} sm={8}>

          {topfive.length <= 0 ?
          <Paper className='rankingListlead'>
            <Grid item xs={12} className='rankingLeader'>
            <AvatarGroup max={4}>
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                color="primary" badgeContent="2nd"
              >
                <Avatar alt="Remy Sharp" className='Position2'>
                  <h1>NAV</h1>
                </Avatar>
              </Badge>
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                color="primary" badgeContent="1st"
              >
                <Avatar alt="Remy Sharp" className='Position1'>
                  <h1>NAV</h1>
                </Avatar>
              </Badge>
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                color="primary" badgeContent="3rd"
              >
                <Avatar alt="Remy Sharp" className='Position3'>
                  <h1>NAV</h1>
                </Avatar>
              </Badge>
            </AvatarGroup>
            </Grid>
            <div className='rankingLeaderList'>
              <Paper elevation={0} className='listItem2'>
                <div>
                  There is no data or the internet connection is not working
                </div>
                <div>
                  <CircularProgress color="secondary" />
                </div>
              </Paper>
            </div>
          </Paper>
          :
          <Paper className='rankingListlead'>
            <Grid item xs={12} className='rankingLeader'>
            <AvatarGroup max={4}>
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                color="primary" badgeContent="2nd"
              >
                <Avatar alt="Remy Sharp" src={`${topfive[1].avatar}`} className='Position2'>R</Avatar>
              </Badge>
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                color="primary" badgeContent="1st"
              >
                <Avatar alt="Remy Sharp" src={`${topfive[0].avatar}`} className='Position1'>R</Avatar>
              </Badge>
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                color="primary" badgeContent="3rd"
              >
                <Avatar alt="Remy Sharp" src={`${topfive[2].avatar}`} className='Position3'>R</Avatar>
              </Badge>
            </AvatarGroup>
            </Grid>
            <div className='rankingLeaderList'>
              {topfive.map( ({name, avatar, quiz})=>{
                return(
                  <Paper elevation={0} className='listItem' key={name}>
                    <div className='listimg'>
                      <img alt='avatar' src={`${avatar}`} />
                    </div>
                    <div className='listname'>
                      {name}
                    </div>
                    <div className='listpoints'>
                      <b>{quiz.score}</b> <span className='listpointslist'>points</span>
                    </div>
                  </Paper>
                )
              } )}
            </div>
          </Paper>
          }
        
        </Grid>
      </Grid>
    </motion.div>
  );
}

export default Leader
