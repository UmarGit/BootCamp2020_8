import React from "react";
import './css/Quiz.css'
import {Link} from 'react-router-dom'
import { motion } from "framer-motion";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { AppContext } from '../services/context'

const Quiz = () => {
  const { state } = React.useContext(AppContext);
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
    >
      <Grid container className='mainProfile'>
        <Grid item xs={10} sm={8}>
          <Paper className='rankingListquiz'>
            <Grid item xs={12} className='rankingProfile'>
              <Avatar alt='avatarimage' className={`questionNumber ${ !state.Profiles[0].attempted ? 'av' : 'nav' }`}>
                <h1>{ !state.Profiles[0].attempted ? 'AV' : 'NAV' }</h1>
              </Avatar>
            </Grid>
            <div>
              <Paper elevation={0} className='listItemQuestions'>
                <div className='listheader'>
                  Welcome To One Quiz, You can start the quiz by selecting any difficulty below
                </div>
              </Paper>
              {
                !state.Profiles[0].attempted ?

                <Paper elevation={0} className='listItemAnswers'>
                  <Button fullWidth variant="contained" color="primary" component={Link} to={`/quiz/${state.Profiles[0].id}/easy`}>
                    EASY
                  </Button>
                  <Button fullWidth variant="contained" color="primary" component={Link} to={`/quiz/${state.Profiles[0].id}/medium`}>
                    MEDIUM
                  </Button>
                  <Button fullWidth variant="contained" color="primary" component={Link} to={`/quiz/${state.Profiles[0].id}/hard`}>
                    HARD
                  </Button>
                  <small>Note: You can attempt quiz one time.</small>
                </Paper>

                :

                <Paper elevation={0} className='listItemAnswers'>
                  <Button fullWidth variant="contained" color="primary" disabled>
                    EASY
                  </Button>
                  <Button fullWidth variant="contained" color="primary" disabled>
                    MEDIUM
                  </Button>
                  <Button fullWidth variant="contained" color="primary" disabled>
                    HARD
                  </Button>
                  <small>Note: Sorry you have attempted the quiz one time.</small>
                </Paper>
              }
            </div>
          </Paper>
        </Grid>
      </Grid>
    </motion.div>
  );
};


export default Quiz;
