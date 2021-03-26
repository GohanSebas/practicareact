import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import config from '../config.json'
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function Ejemplo() {
  const classes = useStyles();
  const [ventana, setVentana] = useState(0);

   function handleClickflecha(tecla){
     switch (tecla){
       case config.SUMA:
       break;

       case config.RESTA:
       break

       case config.DIVISION:
       break;

       case config.MULTIPLICACION:
       break;

       case config.IGUAL:
       break;

     }

   }



  return (
    
    <div className="calculator-body"> 
     
    <div className={classes.margin}>
        <Grid container spacing={3} alignItems="flex-end">
          <Grid item>
            <DragHandleIcon />
          </Grid>
          <Grid item >
            <TextField id="input-with-icon-grid" label="Resultado" />
          </Grid>
        </Grid>
      </div>
      
        <Grid container spacing={3}  >
          
          <Grid item xs={3}>
            <Button
              name="7"
              variant="contained"              
              size="small"
              className={classes.button}
              //startIcon={<SaveIcon />}
            >
              7
            </Button>
          </Grid>

          <Grid item xs={3}>
            <Button
              name="8"
              variant="contained"            
              size="small"
              className={classes.button}
              //startIcon={<SaveIcon />}
            >
              8
            </Button>
          </Grid>

          <Grid item xs={3}>
            <Button
              name="9"
              variant="contained"
              size="small"
              className={classes.button}
              //startIcon={<SaveIcon />}
            >
              9
            </Button>
          </Grid>

          <Grid item xs={3}>
            <Button
              name="/"
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              //startIcon={<SaveIcon />}
            >
              /
            </Button>
          </Grid>
          
          <Grid item xs={3}>
            <Button
              name="4"
              variant="contained"             
              size="small"
              className={classes.button}
            >
              4
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              name="5"
              variant="contained"
              size="small"
              className={classes.button}
            >
              5
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              name="6"
              variant="contained"
              size="small"
              className={classes.button}
            >
              6
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              name="-"
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
            >
              -
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              name="1"
              variant="contained"
                size="small"
              className={classes.button}
            >
              1
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              name="2"
              variant="contained"
              size="small"
              className={classes.button}
            >
              2
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              name="3"
              variant="contained"
              size="small"
              className={classes.button}
            >
              3
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              name="+"
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
            >
              +
            </Button>
          </Grid>
         

        </Grid>
              
    </div>
    
  );
}
export default Ejemplo;