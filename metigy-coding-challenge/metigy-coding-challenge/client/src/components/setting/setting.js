import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { FormGroup } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 100,
  },

  button: {
    margin: theme.spacing(1),
  },

  paper: {
    height: 900,
    width: 400,
  },

  papersetting: {
    height: 900,
    width: 790,
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
    marginRight: theme.spacing(1),
    width: '20ch',
  },
}));

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export function Testing ({children}) {
  const [spacing, setSpacing] = React.useState(2);
  const [value, setValue] = React.useState('Controlled');
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const [keyword, setKeyword] = useState("");
  const [sites, setSites] = useState("");
  const [newKeyword, setNewKeyword] = useState("")
  const [keywordList, setKeywordList] = useState([]);
  const [sitesList, setSitesList] = useState([]);
  const classes = useStyles();

  const saveKeyword = () => {
    Axios.post('http://localhost:3001/createkeyword', {
      keyword: keyword,
    }).then(() => {
      setKeywordList([
        ...keywordList,
        {
          keyword: keyword,
        },
      ]);
    });
  };

  const saveSites = () => {
    Axios.post('http://localhost:3001/createsites', {
      sites: sites,
    }).then(() => {
      setSitesList([
        ...sitesList,
        {
          sites: sites,
        },
      ]);
    });
  };

  const displayInfo = () => {
    console.log(keyword)
  }

  const getKeyword = () => {
    Axios.get('http://localhost:3001/showkeyword').then((response) => {
      setKeywordList(response.data);
    });
  };

  const getSites = () => {
    Axios.get('http://localhost:3001/showsites').then((response) => {
      setSitesList(response.data);
    });
  };

  const updateKeyword = (id) => {
    Axios.put('http://localhost:3001/updatekeyword', { keyword: keyword, id: id}).then(
      (response) => {
        setKeywordList(
          keywordList.map((val) => {
            return val.id == id
            ? {
              id: val.id,
              keyword :newKeyword,
            }
            : val;
          })
        );
      }
    );
  };

  const deleteKeyword = (id) => {
    Axios.delete(`http://localhost:3001/deletekeyword/${id}`).then((response) => {
      setKeywordList(
        keywordList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };

  const deleteSites = (id) => {
    Axios.delete(`http://localhost:3001/deletesites/${id}`).then((response) => {
      setSitesList(
        sitesList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };


  return (
    <>
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Keywords
            </Typography>
            <Paper className={classes.paper} >
              <TextField
                id="outlined-full-width"
                type="text"
                onChange={(event) => {
                  setKeyword(event.target.value);
                }}
                style={{ margin: 0 }}
                placeholder="Enter your keywords here"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <Button
                 onClick={saveKeyword}
                 variant="contained"
                 color="primary"
                 size="small"
                 className={classes.button}
              >
                Add
              </Button>
              <Button
                 onClick={getKeyword}
                 variant="contained"
                 color="primary"
                 size="small"
                 className={classes.button}
              >
                Show
              </Button>
              {keywordList.map((val, key) => {
                return (
                  <div className="keyword">
                    <div> {val.keyword} </div>
                    <div>
                      <input
                        type="text"
                        placeholder="2000..."
                        onChange={(event) => {
                          setNewKeyword(event.target.value);
                        }}
                      />
                      <Button
                        onClick={() => {
                          updateKeyword(val.id);
                        }}
                        variant="contained"
                        color="primary"
                        size="small"
                        className={classes.button}
                        >
                        {" "}
                        Update
                      </Button>

                      <Button
                        onClick={() => {
                          deleteKeyword(val.id);
                        }}
                        variant="contained"
                        color="primary"
                        size="small"
                        className={classes.button}>
                        CLEAR
                      </Button>
                    </div>
                </div>
                );
              })}
            </Paper>
          </Grid>
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Sites
            </Typography>
            <Paper className={classes.paper} >

              <TextField
                onChange={(event) => {
                  setSites(event.target.value);
                }}
                id="outlined-full-width"
                style={{ margin: 0 }}
                placeholder="Enter your site here"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <Button
                 onClick={saveSites}
                 variant="contained"
                 color="primary"
                 size="small"
                 className={classes.button}
              >
                Add
              </Button>
              <Button
                 onClick={getSites}
                 variant="contained"
                 color="primary"
                 size="small"
                 className={classes.button}
              >
                Show
              </Button>
                {sitesList.map((val, key) => {
                    return (
                      <div className="keyword">
                        <h5>{val.sites} <Button
                          onClick={() => {
                          deleteSites(val.id);
                        }}
                        variant="contained"
                        color="primary"
                        size="small"
                        className={classes.button}> Clear
                      </Button>
                    </h5>
                      </div>
                   );
                })}
            </Paper>
          </Grid>
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Setting
            </Typography>
            <Paper className={classes.papersetting} >
              <Grid container spacing={1}>
                <Grid item xs={8}>
                  <Paper className={classes.paperinner}>
                    <FormGroup row>
                    <FormControlLabel
                      control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                      label="Chrome"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedB}
                          onChange={handleChange}
                          name="checkedB"
                          color="primary"
                        />
                      }
                      label="Firefox"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedB}
                          onChange={handleChange}
                          name="checkedB"
                          color="primary"
                        />
                      }
                      label="Explorer"
                    />
                  <FormControlLabel control={<Checkbox name="checkedC" />} label="Safari" />
                    <FormControlLabel control={<Checkbox name="checkedD" />} label="Opera" />
                  </FormGroup>
                </Paper>
                </Grid>
                <Grid item xs={2}>
                  <Paper className={classes.paperinner}>
                    <FormControlLabel
                    control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                    label="Incognito"
                  /></Paper>
                </Grid>
                <Grid item xs={10}>
                  <Paper className={classes.paperinner}>
                    <form className={classes.root} noValidate autoComplete="off" spacing={2}>
                      <Typography>Wait</Typography>
                      <TextField id="outlined-basic" label="minute" variant="outlined" />
                      <TextField id="outlined-basic" label="second" variant="outlined" />
                      <Typography>seconds on the targeted websites.</Typography>
                    </form>
                    <FormControlLabel
                    control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                    label="Visit the page within the Site"
                    />
                    <form className={classes.root} noValidate autoComplete="off" spacing={2}>
                      <TextField id="outlined-basic" label="pages" variant="outlined" /> Pages
                      <TextField id="outlined-basic" label="minute" variant="outlined" />
                      <TextField id="outlined-basic" label="second" variant="outlined" /> visit from second.
                    </form>
                    <form className={classes.root} noValidate autoComplete="off" spacing={2}>
                      After the operation is complete
                      <TextField id="outlined-basic" label="minute" variant="outlined" />
                      <TextField id="outlined-basic" label="second" variant="outlined" /> second wait.
                    </form>
                    <form className={classes.root} noValidate autoComplete="off" spacing={2}>
                      Target site
                      <TextField id="outlined-basic" label="pages" variant="outlined" />
                      <TextField id="outlined-basic" label="minutes" variant="outlined" /> minutes wait.
                    </form>
                    <form className={classes.root} noValidate autoComplete="off" spacing={2}>
                      <TextField id="outlined-basic" label="minutes" variant="outlined" /> automatic reset after operation.
                    </form>
                  </Paper>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={10}>
                  <Paper className={classes.paperinner}>
                    <FormGroup row>
                      <FormControlLabel control={<Checkbox name="checkedC" />} label="Device Reset" />
                      <FormControlLabel control={<Checkbox name="checkedD" />} label="Vinn Reset" />
                      <FormControlLabel control={<Checkbox name="checkedC" />} label="Phone Data" />
                      <FormControlLabel control={<Checkbox name="checkedC" />} label="Mobile Data" />
                      <FormControlLabel control={<Checkbox name="checkedD" />} label="Fly Mode" />
                    </FormGroup>
                  </Paper>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={10}>
                  <Paper className={classes.paperinner}>
                    <FormGroup row>
                      <FormControlLabel control={<Checkbox name="checkedC" />} label="Remove Cookies" />
                      <FormControlLabel control={<Checkbox name="checkedD" />} label="Change Resolution" />
                      <FormControlLabel control={<Checkbox name="checkedC" />} label="Mouse Tracks" />
                      <FormControlLabel control={<Checkbox name="checkedC" />} label="Data Saving Mode" />
                      <FormControlLabel control={<Checkbox name="checkedD" />} label="Random Generate" />
                      <FormControlLabel control={<Checkbox name="checkedD" />} label="Analytics Protection" />
                      <FormControlLabel control={<Checkbox name="checkedD" />} label="Remove History" />
                    </FormGroup>
                  </Paper>
                </Grid>
              </Grid>
               <Button
                 variant="contained"
                 color="primary"
                 size="large"
                 className={classes.button}
              >
                Export Data
              </Button>
              <Button
                 variant="contained"
                 color="primary"
                 size="large"
                 className={classes.button}
              >
                Start
              </Button>
              <Button
                 variant="contained"
                 color="primary"
                 size="large"
                 className={classes.button}
              >
                Stop
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </>
  );
}
