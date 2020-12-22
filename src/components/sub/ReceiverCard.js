import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';

import MobileMoneyForm from './MobileMoneyForm';
import BankTransferForm from './BankTransferForm';
import CashPickUpForm from './CashPickUpForm';

const useStyles = makeStyles({
  root: {
    minWidth: 260,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const buttons= [
  {
    id: 1,
    name: 'Mobile Money'
  },
  {
    id: 2,
    name: 'Bank Transfer'
  },
  {
    id: 3,
    name: 'Cash Pickup'
  }
]

const ReceiverCard = () => {
  const classes = useStyles();

  const [selectedButton, setSelectedButton ] = useState(0);

  return (
    <div>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Choose how receiver gets the money
        </Typography>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          {buttons.map((button)=>(
            <Button onClick={() => setSelectedButton(button.id)} >{button.name}</Button>
          ))}
        </ButtonGroup>
        {selectedButton === 0 || selectedButton === 1 ? (
          <MobileMoneyForm />
        ) : null }
        {selectedButton === 2 ? (
          <BankTransferForm />
        ) : null }
        {selectedButton === 3 ? (
          <CashPickUpForm />
        ) : null }
          <Button size="small">Start sending Money</Button>
    </div>
  );
}

export default ReceiverCard;
