import React, {useState} from "react";
import {Link} from 'react-router-dom'
import { motion } from "framer-motion";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import {useParams} from "react-router-dom";
import writeUserData from '../../services/leaderboardData'
import quizList from '../../services/quizData'
import {Quiz,Types} from '../../types/types'
import { AppContext } from '../../services/context'

var answered = 0

const Question = () => {
  var [completed, setCompleted] = useState(true)
  var [score, setScore] = useState(0)
  var [index, setIndex] = useState(0)
  var { difficulty } = useParams();
  var singleQuiz: Quiz[] = quizList(difficulty)
  const total = singleQuiz.length
  const { state, dispatch } = React.useContext(AppContext);

  const evaluateQuiz = (option: string)=>{
    if (option === singleQuiz[index].correct) {
      answered = answered + 1 
      setScore( Math.round(((answered/total)*100)) )
    }
    if (index !== total-1) {
      setIndex(++index)
    }
    else{
      setCompleted(!completed)
    }
  }

  const updateprofile = ()=> {
      dispatch({
        type: Types.Update,
        payload: {
          id: state.Profiles[0].id,
          name: state.Profiles[0].name,
          email: state.Profiles[0].email,
          avatar: state.Profiles[0].avatar,
          attempted: true,
          quiz: {
              score
          }
        }
      })
      console.log(state)
  }

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
              <Avatar alt='avatarimage' className='questionNumber'>
                <h1>{score}</h1>
              </Avatar>
            </Grid>
            {completed ?
              <div>
                <Paper elevation={0} className='listItemQuestions'>
                  <div className='listheader'>
                    {singleQuiz[index].question}
                  </div>
                </Paper>
                <Paper elevation={0} className='listItemAnswers'>
                  {singleQuiz[index].option.map((options,ind)=>{
                    return(
                      <Button fullWidth color="secondary" key={ind} onClick={()=>{
                        evaluateQuiz(options)
                      }}>
                        {ind+1}. {options}
                      </Button>
                    )
                  })}
                </Paper>
              </div>
              :
              <div>
              <Paper elevation={0} className='listItemQuestions'>
                <div className='listheader'>
                  Thank you for answering the questions, Hope you like it !
                </div>
              </Paper>
              <Paper elevation={0} className='listItemAnswers'>
                  <Button fullWidth color="secondary" component={Link} to="/quiz" onClick={()=>{
                    writeUserData(state.Profiles[0].id, state.Profiles[0].name, state.Profiles[0].email, state.Profiles[0].avatar, true, score)
                    updateprofile()
                  }}>
                      Submit You Answers
                  </Button>
              </Paper>
            </div>
            }
          </Paper>
        </Grid>
      </Grid>
    </motion.div>
  );
};


export default Question;
