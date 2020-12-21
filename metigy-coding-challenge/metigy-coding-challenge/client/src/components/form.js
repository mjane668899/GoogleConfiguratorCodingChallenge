import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Checkbox } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 100,
  },

  button: {
    margin: theme.spacing(1),
  },

  papersetting: {
    height: 850,
    width: 790,
  },

  paperside: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  paperinner: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  control: {
    padding: theme.spacing(2),
  },

  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
    width: '10ch',
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
  },

  formControlText: {
    margin: theme.spacing(1),
    maxWidth: theme.spacing,
  },

  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 150,
    },
}));

export default function Form ({ children, ...restProps }) {
  const classes = useStyles();
  return <form className={classes.root} noValidate autoComplete="off" spacing={2} {...restProps}>{children}</form>;
}

Form.Group = function Formgroup ({ children, ...restProps }) {
  return <FormGroup row>{children}</FormGroup>;
};

Form.Control= function Formcontrol ({ children, ...restProps }) {
  const classes = useStyles();
  return <FormControl className={classes.formControl} {...restProps}>{children}</FormControl>;
};

Form.ControlLabel = function FormcontrolLabel ({ children, ...restProps }) {
  const [state, setState] = React.useState({
    checkedA: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return <FormControlLabel control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" value={state.checkedA} />}  {...restProps}></FormControlLabel>;
};

Form.ControlText= function FormcontrolText ({ children, ...restProps }) {
  const classes = useStyles();
  return <FormControl className={classes.formControlText} {...restProps}>{children}</FormControl>;
};

Form.InputLabel = function ForminputLabel ({ children, ...restProps }) {
  return <InputLabel shrink id="demo-simple-select-placeholder-label-label" {...restProps}>{children}</InputLabel>
};

Form.Select = function FormSelect ({ children, ...restProps }) {
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return <Select labelId="demo-simple-select-placeholder-label-label"
  id="demo-simple-select-placeholder-label" onChange={handleChange} displayEmpty className={classes.selectEmpty} inputProps={{ 'aria-label': 'Without label' }} displayEmpty className={classes.selectEmpty} inputProps={{ 'aria-label': 'Without label' }} {...restProps}>{children}</Select>
};

Form.Menu = function FormMenu ({ children, ...restProps }) {
  return <MenuItem value="" {...restProps}>{children}</MenuItem>
};

Form.DisableMenu = function FormDisableMenu ({ children, ...restProps }) {
  return <MenuItem value="" disabled {...restProps}>{children}</MenuItem>
};

Form.HelperText = function FormHelperText1 ({ children, ...restProps }) {
  return <FormHelperText {...restProps}>{children}</FormHelperText>
};
