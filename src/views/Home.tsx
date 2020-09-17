import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { motion } from "framer-motion";
import Avatar from '../components/Avatar/Avatar'
import { AppContext } from '../services/context'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    form: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      position: 'relative',
      top: '-14vh',
      width: '100%'
    },
    display: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    One: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      padding: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: '20vh',
      position: 'relative',
      top: '-20vh',
      maxHeight: '300px',
      borderRadius: '20px',
    },
    Two: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: '46vh',
      maxHeight: '300px',
      borderRadius: '20px'
    },
    Three: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      padding: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: '20vh',
      maxHeight: '300px',
      borderRadius: '20px',
    },
  }),
);

function Home() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const { state } = React.useContext(AppContext);
  const classes = useStyles();

  return (
    <motion.div className={classes.root}
      initial={{ opacity: 0, y: 100, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
    >
      <Grid container className={classes.display}>
        <Grid item xs={10}>
          { state.Profiles.length === 0 ?
            <Paper className={classes.Two}>
            <Grid item xs={12}>
              <Paper className={classes.One} elevation={4}>
                <h1>
                  Welcome To One Quiz App
                </h1>
                <small>
                  Please register below to attempt the quiz
                </small>
              </Paper>
            </Grid>
            <div>
              <form className={classes.form} noValidate autoComplete="off">
                <TextField
                  id="outlined-full-width"
                  label="Name"
                  style={{ margin: 8 }}
                  placeholder="Enter Your Name"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  value={name}
                  onChange={(event)=>{
                    setName(event.target.value)
                  }}
                />
                <TextField
                  id="outlined-full-width"
                  label="Email"
                  style={{ margin: 8 }}
                  placeholder="Enter Your Email"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  value={email}
                  onChange={(event)=>{
                    setEmail(event.target.value)
                  }}
                />
                <Button fullWidth variant="contained" color="secondary" onClick={()=>{
                  setOpen(true)
                }}>
                  Register
                </Button>
              </form>
            </div>
          </Paper>
          :
          <Grid item xs={12}>
            <Paper className={classes.Three} elevation={4}>
              <h1>
                Welcome {state.Profiles[0].name} To our One Quiz App
              </h1>
              <small>
                You can go to Quiz section to attempt the quiz
              </small>
            </Paper>
          </Grid>
        }
        </Grid>
      </Grid>
      <Avatar openAvatarMenu={open} name={name} email={email}/>
    </motion.div>
  );
}

export default Home