import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';




export default function MaxWidthDialog(props) {
  
  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        maxWidth='sm'
        open={props.open}
        onClose={()=>{props.handleClose()}}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogContent style={{display:'flex', alignItems:'center', flexDirection:'column',alignContent:'flex-start'}}>
          <p style={{fontSize:'35px', fontWeight:'bold',margin:'0 0 15px 0'}}>Obrigado !!</p>
          <p style={{fontFamily: 'Georgia, serif',
                    fontSize: '22px',
                    letterSpacing: '1.4px',
                    wordSpacing: '5.2px',
                    color: '#000000',
                    fontWeight: '200',
                    textDecoration: 'none solid rgb(68, 68, 68)',
                    fontStyle: 'normal',
                    fontSariant: 'small-caps',
                    textTransform: 'lowercase',
                    margin:'0'}}>
                        Você ganhou de volta
        </p>
          <h5 style={{fontSize:'20px', fontWeight:'bold',margin:'0'}}>R$ {props.total}</h5>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{props.handleClose()}} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}