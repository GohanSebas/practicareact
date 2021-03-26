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
    
    <div className="button">
    <button name="(" >(</button>
    <button name="CE" >CE</button>
    <button name=")" >)</button>
    <button name="C" >C</button><br/>


    <button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
    <button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
    <button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
    <button name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>


    <button name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
    <button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
    <button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
    <button name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>

    <button name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
    <button name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
    <button name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
    <button name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>


    <button name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
    <button name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
    <button name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
    <button name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>
</div>
    
  );
}
export default Ejemplo;