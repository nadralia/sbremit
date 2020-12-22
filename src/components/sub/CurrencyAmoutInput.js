import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';

import RightAlignedTimeline from './Timeline';


const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

const currencySign = [
    {
        id: 1,
        name : 'GBP',
        rate : 4400,
    },
    {
        id: 2,
        name : 'USD',
        rate : 3700,
    },

]
  

const CurrencyAmountInput = () => {
    const classes = useStyles();
    const [amountInForeignCurrency, setAmountInForeignCurrency] = React.useState('');
    const handleChange = (event) => {
       setAmountInForeignCurrency(event.target.value);
    };
    return (
        <div>
                <BootstrapInput id="demo-customized-textbox" />
                <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={amountInForeignCurrency}
                    onChange={handleChange}
                    input={<BootstrapInput />}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    { currencySign.map((sign)=>(
                        <MenuItem value={sign.id}>{sign.name}</MenuItem>
                    ))}
                </Select>

                <RightAlignedTimeline />

        </div>
    );
}

export default CurrencyAmountInput;
