import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { AppContext } from '../../services/context'
import { Types } from '../../types/types'

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

var flag = false

export default function Avatar({openAvatarMenu, name, email}: {openAvatarMenu: boolean, name: string, email: string}) {
    const [open, setOpen] = React.useState(false);
    const [avatar, setAvatar] = React.useState('');
    const { state, dispatch } = React.useContext(AppContext);

    const createprofile = ()=> {
        if(state.Profiles.length === 0 && state.Profiles.length <= 2){
          dispatch({
            type: Types.Create,
            payload: {
              id: Math.round(Math.random() * 10000),
              name,
              email,
              avatar,
              attempted: false,
              quiz: {
                  score: 0
              }
            }
          })
        }
      }

    if(openAvatarMenu && !flag){
      setOpen(true);
      flag = true
    }
    
    const handleClose = () => {
        setOpen(false);
        createprofile()
    };

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle id="alert-dialog-slide-title">{"Select Your Avatar"}</DialogTitle>
            <DialogContent className="avatarbox">
                <img alt='avatar' src='https://imgur.com/DRaIX1w.png' className={`${avatar==='https://imgur.com/DRaIX1w.png' ? 'selected' : ''}`} onClick={()=>{
                    setAvatar('https://imgur.com/DRaIX1w.png')
                }}/>

                <img alt='avatar' src='https://i.imgur.com/JO2m6s7.png' className={`${avatar==='https://imgur.com/JO2m6s7.png' ? 'selected' : ''}`} onClick={()=>{
                    setAvatar('https://imgur.com/JO2m6s7.png')
                }}/>

                <img alt='avatar' src='https://imgur.com/AOWtoth.png' className={`${avatar==='https://imgur.com/AOWtoth.png' ? 'selected' : ''}`} onClick={()=>{
                    setAvatar('https://imgur.com/AOWtoth.png')
                }}/>

                <img alt='avatar' src='https://imgur.com/uwM3KaX.png' className={`${avatar==='https://imgur.com/uwM3KaX.png' ? 'selected' : ''}`} onClick={()=>{
                    setAvatar('https://imgur.com/uwM3KaX.png')
                }}/>

                <img alt='avatar' src='https://imgur.com/z8PGMHJ.png' className={`${avatar==='https://imgur.com/z8PGMHJ.png' ? 'selected' : ''}`} onClick={()=>{
                    setAvatar('https://imgur.com/z8PGMHJ.png')
                }}/>
                
                <img alt='avatar' src='https://imgur.com/KwsypbH.png' className={`${avatar==='https://imgur.com/KwsypbH.png' ? 'selected' : ''}`} onClick={()=>{
                    setAvatar('https://imgur.com/KwsypbH.png')
                }}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Let's Go !
                </Button>
            </DialogActions>
        </Dialog>
    );
}
