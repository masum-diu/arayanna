import React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import { style } from '@mui/system'
import Typography from '@mui/material/Typography'
import { Stack, TextField } from '@mui/material'

const LoginModal = ({open,setOpen}) => {
  return (
    <>
        <Dialog open={open} onClose={()=>setOpen(false)} PaperProps={{ sx: { width: "30%",height:"fit-content" } }}>
          <DialogTitle>
            <Typography variant="header1" color="initial" sx={{display:"flex",justifyContent:"center"}}>Login</Typography> 
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Stack direction={"column"} spacing={2} mt={2} mb={2}>
                <Typography variant="cardHeader2" color="initial">USERNAME OR EMAIL ADDRESS</Typography>
                <TextField
                  id=""
                  label=""
                  // value={}
                  // onChange={}
                  size='small'
                  placeholder='Username or Email Address '
                />
                 <Typography variant="cardHeader2" color="initial">PASSWORD</Typography>
                <TextField
                  id=""
                  label=""
                  // value={}
                  // onChange={}
                  size='small'
                  placeholder='Password'
                />
              
                <Button variant="contained" color='secondary' >
                  Login
                </Button>
              </Stack>
            </DialogContentText>
          </DialogContent>
        </Dialog>
    </>
  )
}

export default LoginModal
