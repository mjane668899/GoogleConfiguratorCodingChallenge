import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 100,
  },

  button: {
    margin: theme.spacing(1),
  },

  paper: {
    height: 850,
    width: 400,
  },

  paperinner: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  papersetting: {
    height: 850,
    width: 790,
  },

  control: {
    padding: theme.spacing(2),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '20ch',
  },
}));

export default function Container({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Container.Grid = function ContainerGrid({ children, ...restProps }) {
  const classes = useStyles();
  return <Grid container className={classes.root} spacing={2} {...restProps}>{children}</Grid>;
};

Container.Gridcontainer = function ContainerGridcontainer({ children, ...restProps }) {
  const [spacing] = React.useState(2);
  return <Grid container spacing={1} {...restProps}>{children}</Grid>;
};

Container.Emptygrid = function ContainerEmptygrid({ children, ...restProps }) {
  return <Grid {...restProps}>{children}</Grid>;
}

Container.Button = function ContainerButton ({ children, ...restProps }) {
  const classes = useStyles();
  return <Button {...restProps} variant="contained" color="primary" size="small" className={classes.button}>{children}</Button>;
};

Container.BigButton = function ContainerBigButton ({ children, ...restProps }) {
  const classes = useStyles();
  return <Button item xs={12} variant="contained" color="primary" size="large" className={classes.button} {...restProps}>{children}</Button>;
};

Container.TextField = function ContainerTextField ({ children, ...restProps }) {
  return <TextField id="outlined-full-width" type="text" style={{ margin: 0 }} fullWidth margin="normal"
  InputLabelProps={{
      shrink: true,
    }}
    variant="outlined"
    {...restProps}
  >{children}</TextField>;
};

Container.Paper = function ContainerPaper ({children, ...restProps}) {
  const classes = useStyles();
  return <Paper className={classes.paper} {...restProps}>{children}</Paper>;
};

Container.PaperSetting = function ContainerPaperSetiing ({children, ...restProps}) {
  const classes = useStyles();
  return <Paper className={classes.papersetting} {...restProps}>{children}</Paper>;
};

Container.PaperInner = function ContainerPaperInner ({children, ...restProps}) {
  const classes = useStyles();
  return <Paper className={classes.paperinner} {...restProps}>{children}</Paper>;
};

Container.Title = function ContainerTitle({ children, ...restProps }) {
  const classes = useStyles();
  return <Typography variant="h4" gutterBottom {...restProps}>{children}</Typography>;
};

Container.Typography = function ContainerTypography({ children, ...restProps }) {
  const classes = useStyles();
  return <Typography {...restProps}>{children}</Typography>;
};
