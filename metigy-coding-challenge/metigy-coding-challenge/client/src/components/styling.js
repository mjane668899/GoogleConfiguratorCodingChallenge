import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: theme.spacing(1),
    flexGrow: 100,
  },

  button: {
    margin: theme.spacing(1),
  },

  paper: {
    height: 850,
    width: 400,
  },

  papermargin: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  paperinner: {
    padding: theme.spacing(2),
    textAlign: 'space-around',
    color: theme.palette.text.secondary,
  },

  papersetting: {
    margin: theme.spacing(1),
    height: 855,
    width: 790,
  },

  typography: {
    marginTop: theme.spacing(2),
  },

  control: {
    padding: theme.spacing(2),
  },

  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '20ch',
  },

  demo: {
    backgroundColor: theme.palette.background.paper,
  },

  title: {
    margin: theme.spacing(4, 0, 2),
  },

}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export default function Styling({ children, ...restProps }) {
  return <Box component="span" m={1} {...restProps}>{children}</Box>;
}

Styling.Grid = function StylingGrid({ children, ...restProps }) {
  const classes = useStyles();
  return <Grid zeroMinWidth container className={classes.root} spacing={2} {...restProps}>{children}</Grid>;
};

Styling.Gridcontainer = function StylingGridcontainer({ children, ...restProps }) {
  const matches = useMediaQuery('(min-width:600px)');
  return <Grid container zeroMinWidth spacing={1} {...restProps}>{children}</Grid>;
};

Styling.Emptygrid = function StylingEmptygrid({ children, ...restProps }) {
  return <Grid zeroMinWidth {...restProps}>{children}</Grid>;
}

Styling.Button = function StylingButton ({ children, ...restProps }) {
  const classes = useStyles();
  return <Button {...restProps} variant="contained" color="primary" size="small" className={classes.button}>{children}</Button>;
};

Styling.BigButton = function StylingBigButton ({ children, ...restProps }) {
  const classes = useStyles();
  return <Button item xs={12} variant="contained" color="primary" size="large" className={classes.button} {...restProps}>{children}</Button>;
};

Styling.TextField = function StylingTextField ({ children, ...restProps }) {
  return <TextField id="outlined-full-width" type="text" style={{ margin: 0 }} fullWidth margin="normal"
  InputLabelProps={{
      shrink: true,
    }}
    variant="outlined"
    {...restProps}
  >{children}</TextField>;
};

Styling.Paper = function StylingPaper ({children, ...restProps}) {
  const classes = useStyles();
  return <Paper className={classes.paper} {...restProps}>{children}</Paper>;
};

Styling.PaperSetting = function StylingPaperSetiing ({children, ...restProps}) {
  const classes = useStyles();
  return <Paper className={classes.papersetting} {...restProps}>{children}</Paper>;
};

Styling.PaperInner = function StylingPaperInner ({children, ...restProps}) {
  const classes = useStyles();
  return <Paper className={classes.paperinner} display="inline" style={{ width: '100%' }} {...restProps}>{children}</Paper>;
};

Styling.PaperMargin = function StylingPaperMargin ({children, ...restProps}) {
  const classes = useStyles();
  return <Paper className={classes.papermargin} display="inline" style={{ width: '100%' }} {...restProps}>{children}</Paper>;
};

Styling.Title = function StylingTitle({ children, ...restProps }) {
  return <Typography variant="h4" gutterBottom {...restProps}>{children}</Typography>;
};

Styling.Typography = function StylingTypography({ children, ...restProps }) {
  const classes = useStyles();
  return <Typography className={classes.typography} component="div" {...restProps}>{children}</Typography>;
};

Styling.Box = function StylingBox({ children, ...restProps }) {
  return <Box component="span" display="block" p={1} m={1} bgcolor="background.paper" {...restProps}>{children}</Box>;
};

Styling.Form = function StylingForm({ children, ...restProps }) {
  const classes = useStyles();
  return <FormControl className={classes.formControl} component="span" display="block" p={1} m={1} bgcolor="background.paper" {...restProps}>{children}</FormControl>;
};

Styling.List = function StylingList({ children, ...restProps }) {
  const [dense, setDense] = React.useState(false);
  return <List dense={dense} {...restProps}>{children}</List>;
};

Styling.ListItem = function StylingListItem ({ children, ...restProps }) {
  return <ListItem {...restProps}>{children}</ListItem>;
};

Styling.ListItemtext = function StylingListItemtext ({ children, ...restProps }) {
  const [secondary, setSecondary] = React.useState(false);
  return <ListItemText secondary={secondary ? 'Secondary text' : null} {...restProps}>{children}</ListItemText>
};

Styling.ListItemSecondaryAction = function StylingListItemSecondaryAction ({ children, ...restProps }) {
  return <ListItemSecondaryAction {...restProps}>{children}</ListItemSecondaryAction>
};

Styling.DeleteButton = function StylingDeleteButton ({ children, ...restProps }) {
  return <IconButton {...restProps}>{children} <DeleteIcon /> </IconButton>
};
