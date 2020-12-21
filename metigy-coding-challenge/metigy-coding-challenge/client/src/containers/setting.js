import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Styling } from '../components';
import { Form } from '../components';
import settingData from "../pre-populate/setting.json";


export function SettingBoard({children}) {
  const [chrome, setChrome] = useState("");
  const [firefox, setFirefox] = useState("");
  const [explorer, setExplorer] = useState("");
  const [safari, setSafari] = useState("");
  const [opera, setOpera] = useState("");
  const [incognito, setIncognito] = useState("");
  const [minuteTargetSite, setMinuteTargetSite] = useState("");
  const [secondTargetSite, setSecondTargetSite] = useState("");
  const [visitPageWithinSite, setVisitPageWithinSite] = useState("");
  const [pages, setPages] = useState("");
  const [visitMinute, setVisitMinute] = useState("");
  const [visitSecond, setVisitSecond] = useState("");
  const [minuteAfterComplete, setMinuteAfterComplete] = useState("");
  const [secondAfterComplete, setSecondAfterComplete] = useState("");
  const [targetSite, setTargetSite] = useState("");
  const [minuteTargetNotFound, setMinuteTargetNotFound] = useState("");
  const [autoreset, setAutoreset] = useState("");
  const [devicereset, setDeviceReset] = useState("");
  const [vinnReset, setVinnReset] = useState("");
  const [phoneReset, setPhoneReset] = useState("");
  const [mobileData, setMobileData] = useState("");
  const [flymode, setFlymode] = useState("");
  const [removeCookies, setRemoveCookies] = useState("");
  const [changeResolution, setChangeResolution] = useState("");
  const [mousetrack, setMouseTrack] = useState("");
  const [dataSavingMode, setDataSavingMode] = useState("");
  const [randomGenerate, setRandomGenerate] = useState("");
  const [analyticsProtection, setAnalyticsProtection] = useState("");
  const [removeHistory, setRemoveHistory] = useState("");

  const [settingList, setSettingList] = useState([]);
  const saveSetting = () => {
    axios.post('http://localhost:8000/createsetting', {
      chrome: chrome,
      firefox: firefox,
      explorer: explorer,
      safari: safari,
      opera: opera,
      incognito: incognito,
      minuteTargetSite: minuteTargetSite,
      secondTargetSite: secondTargetSite,
      visitPageWithinSite: visitPageWithinSite,
      pages: pages,
      visitMinute: visitMinute,
      visitSecond: visitSecond,
      minuteAfterComplete: minuteAfterComplete,
      secondAfterComplete: secondAfterComplete,
      targetSite: targetSite,
      minuteTargetNotFound: minuteTargetNotFound,
      autoreset: autoreset,
      devicereset: devicereset,
      vinnReset: vinnReset,
      phoneReset: phoneReset,
      mobileData: mobileData,
      flymode: flymode,
      removeCookies: removeCookies,
      changeResolution: changeResolution,
      mousetrack: mousetrack,
      dataSavingMode: dataSavingMode,
      randomGenerate: randomGenerate,
      analyticsProtection: analyticsProtection,
      removeHistory: removeHistory,

    }).then(() => {
      setSettingList([
        ...settingList,
        {
          chrome: chrome,
          firefox: firefox,
          explorer: explorer,
          safari: safari,
          opera: opera,
          incognito: incognito,
          minuteTargetSite: minuteTargetSite,
          secondTargetSite: secondTargetSite,
          visitPageWithinSite: visitPageWithinSite,
          pages: pages,
          visitMinute: visitMinute,
          visitSecond: visitSecond,
          minuteAfterComplete: minuteAfterComplete,
          secondAfterComplete: secondAfterComplete,
          targetSite: targetSite,
          minuteTargetNotFound: minuteTargetNotFound,
          autoreset: autoreset,
          devicereset: devicereset,
          vinnReset: vinnReset,
          phoneReset: phoneReset,
          mobileData: mobileData,
          flymode: flymode,
          removeCookies: removeCookies,
          changeResolution: changeResolution,
          mousetrack: mousetrack,
          dataSavingMode: dataSavingMode,
          randomGenerate: randomGenerate,
          analyticsProtection: analyticsProtection,
          removeHistory: removeHistory,
        },
      ]);
    });
  };

  const getSetting = () => {
    axios.get('http://localhost:8000/showsetting').then((response) =>
    {
      setSettingList(response.data);
    });
  };

  const deleteSetting = (id) => {
    axios.delete(`http://localhost:8000/deletesetting/${id}`).then((response) => {
      setSettingList(
        settingList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };


  return (
    <>
    <Styling>
      <Styling.Title>Setting</Styling.Title>
      {settingData.map(item =>
        <Styling.PaperSetting key={item.id}>
          <Styling.Gridcontainer justify="center">
            <Styling.Emptygrid item xs={8}>
              <Styling.PaperMargin>
                <Form.Group row>
                  <Form.ControlLabel onClick={(event) => {
                    setChrome(event.target.value);
                  }} label="Chrome" ></Form.ControlLabel>
                  <Form.ControlLabel onClick={(event) => {
                    setFirefox(event.target.value);
                  }}  label="Firefox"></Form.ControlLabel>
                  <Form.ControlLabel onClick={(event) => {
                    setExplorer(event.target.value);
                  }} label="Explorer"></Form.ControlLabel>
                  <Form.ControlLabel onClick={(event) => {
                    setSafari(event.target.value);
                  }}  label="Safari"></Form.ControlLabel>
                  <Form.ControlLabel onClick={(event) => {
                    setOpera(event.target.value);
                  }} label="Opera"></Form.ControlLabel>
                </Form.Group>
              </Styling.PaperMargin>
            </Styling.Emptygrid>
            <Styling.Emptygrid item xs={2}>
              <Styling.PaperMargin>
                <Form.Group row>
                  <Form.ControlLabel onClick={(event) => {
                    setIncognito(event.target.value);
                  }} label="Incognito"></Form.ControlLabel>
                </Form.Group>
              </Styling.PaperMargin>
            </Styling.Emptygrid>
            <Styling.Emptygrid item xs={10} >
              <Styling.PaperInner>
                <div>
                  <Form display="inline">
                    <Form.ControlText marginLeft="0">
                      <Styling.Typography>Wait</Styling.Typography>
                    </Form.ControlText>
                    <Form.Control>
                      <Form.InputLabel>minutes</Form.InputLabel>
                      <Form.Select onClick={(event) => {
                          setMinuteTargetSite(event.target.value);
                        }}>
                        <Form.DisableMenu>{item.minuteTargetSite}</Form.DisableMenu>
                        <Form.Menu value={10}>10</Form.Menu>
                        <Form.Menu value={20}>20</Form.Menu>
                        <Form.Menu value={30}>30</Form.Menu>
                      </Form.Select>
                    </Form.Control>
                    <Form.Control>
                      <Form.InputLabel>seconds</Form.InputLabel>
                      <Form.Select onClick={(event) => {
                          setSecondTargetSite(event.target.value);
                        }}>
                        <Form.DisableMenu>{item.secondTargetSite}</Form.DisableMenu>
                        <Form.Menu value={10}>10</Form.Menu>
                        <Form.Menu value={20}>20</Form.Menu>
                        <Form.Menu value={30}>30</Form.Menu>
                      </Form.Select>
                    </Form.Control>
                    <Form.Control>
                      <Styling.Typography >seconds on the targeted websites.</Styling.Typography>
                    </Form.Control>
                  </Form>
                </div>
                <Styling.Emptygrid item xs={8}>
                  <Form.Group row>
                    <Form.ControlLabel onClick={(event) => {
                      setVisitPageWithinSite(event.target.value);
                    }} label="Visit the page within the Site"></Form.ControlLabel>
                  </Form.Group>
                </Styling.Emptygrid>
                <Form>
                  <Form.Control>
                    <Form.InputLabel>pages</Form.InputLabel>
                    <Form.Select onClick={(event) => {
                      setPages(event.target.value);
                    }}>
                      <Form.DisableMenu>{item.pages}</Form.DisableMenu>
                      <Form.Menu value={10}>10</Form.Menu>
                      <Form.Menu value={20}>20</Form.Menu>
                      <Form.Menu value={30}>30</Form.Menu>
                    </Form.Select>
                  </Form.Control>
                  <Form.Control>
                    <Form.InputLabel>minutes</Form.InputLabel>
                    <Form.Select onClick={(event) => {
                      setVisitMinute(event.target.value);
                    }}>
                      <Form.DisableMenu>{item.visitMinute}</Form.DisableMenu>
                      <Form.Menu value={10}>10</Form.Menu>
                      <Form.Menu value={20}>20</Form.Menu>
                      <Form.Menu value={30}>30</Form.Menu>
                    </Form.Select>
                  </Form.Control>
                  <Form.Control>
                    <Form.InputLabel>seconds</Form.InputLabel>
                    <Form.Select onClick={(event) => {
                      setVisitSecond(event.target.value);
                    }}>
                      <Form.DisableMenu>{item.visitSecond}</Form.DisableMenu>
                      <Form.Menu value={10}>10</Form.Menu>
                      <Form.Menu value={20}>20</Form.Menu>
                      <Form.Menu value={30}>30</Form.Menu>
                    </Form.Select>
                  </Form.Control>
                  <Form.ControlText>
                    <Styling.Typography>visit from to second</Styling.Typography>
                  </Form.ControlText>
                </Form>
                <Form>
                  <Form.Control>
                    <Styling.Typography>After the operation is complete</Styling.Typography>
                  </Form.Control>
                  <Form.Control>
                    <Form.InputLabel>minutes</Form.InputLabel>
                    <Form.Select onClick={(event) => {
                      setMinuteAfterComplete(event.target.value);
                    }}>
                      <Form.DisableMenu>{item.minuteAfterComplete}</Form.DisableMenu>
                      <Form.Menu value={10}>10</Form.Menu>
                      <Form.Menu value={20}>20</Form.Menu>
                      <Form.Menu value={30}>30</Form.Menu>
                    </Form.Select>
                  </Form.Control>
                  <Form.Control>
                    <Form.InputLabel>seconds</Form.InputLabel>
                    <Form.Select onClick={(event) => {
                      setSecondAfterComplete(event.target.value);
                    }}>
                      <Form.DisableMenu>{item.secondAfterComplete}</Form.DisableMenu>
                      <Form.Menu value={10}>10</Form.Menu>
                      <Form.Menu value={20}>20</Form.Menu>
                      <Form.Menu value={30}>30</Form.Menu>
                    </Form.Select>
                  </Form.Control>
                  <Form.Control>
                    <Styling.Typography>minutes wait</Styling.Typography>
                  </Form.Control>
                </Form>
                <Form>
                  <Form.ControlText>
                    <Styling.Typography>Target Sites</Styling.Typography>
                  </Form.ControlText>
                  <Form.Control>
                    <Form.InputLabel>pages</Form.InputLabel>
                    <Form.Select onClick={(event) => {
                      setTargetSite(event.target.value);
                    }}>
                      <Form.DisableMenu>{item.targetSite}</Form.DisableMenu>
                      <Form.Menu value={10}>10</Form.Menu>
                      <Form.Menu value={20}>20</Form.Menu>
                      <Form.Menu value={30}>30</Form.Menu>
                    </Form.Select>
                  </Form.Control>
                  <Form.ControlText>
                    <Styling.Typography>if not found</Styling.Typography>
                  </Form.ControlText>
                  <Form.Control>
                    <Form.InputLabel>minutes</Form.InputLabel>
                    <Form.Select onClick={(event) => {
                      setMinuteTargetNotFound(event.target.value);
                    }}>
                      <Form.DisableMenu>{item.minuteTargetNotFound}</Form.DisableMenu>
                      <Form.Menu value={10}>10</Form.Menu>
                      <Form.Menu value={20}>20</Form.Menu>
                      <Form.Menu value={30}>30</Form.Menu>
                    </Form.Select>
                  </Form.Control>
                </Form>
                <Form>
                  <Form.Control>
                    <Form.InputLabel>minutes</Form.InputLabel>
                    <Form.Select onClick={(event) => {
                      setAutoreset(event.target.value);
                    }}>
                      <Form.DisableMenu>{item.autoreset}</Form.DisableMenu>
                      <Form.Menu value={10}>10</Form.Menu>
                      <Form.Menu value={20}>20</Form.Menu>
                      <Form.Menu value={30}>30</Form.Menu>
                    </Form.Select>
                  </Form.Control>
                  <Form.Control>
                    <Styling.Typography>automatic reset after operation.</Styling.Typography>
                  </Form.Control>

                </Form>
              </Styling.PaperInner>
            </Styling.Emptygrid>
            <Styling.Emptygrid item xs={10}>
              <Styling.PaperInner>
                <Form.Group row>
                  <Form.ControlLabel onClick={(event) => {
                    setDeviceReset(event.target.value);
                  }} label="Device Reset"></Form.ControlLabel>
                  <Form.ControlLabel onClick={(event) => {
                    setVinnReset(event.target.value);
                  }} label="Vinn Reset"></Form.ControlLabel>
                  <Form.ControlLabel onClick={(event) => {
                    setPhoneReset(event.target.value);
                  }} label="Phone Data"></Form.ControlLabel>
                  <Form.ControlLabel onClick={(event) => {
                    setMobileData(event.target.value);
                  }} label="Mobile Data"></Form.ControlLabel>
                  <Form.ControlLabel onClick={(event) => {
                    setFlymode(event.target.value);
                  }} label="Fly Mode"></Form.ControlLabel>
                </Form.Group>
              </Styling.PaperInner>
            </Styling.Emptygrid>
            <Styling.Emptygrid item xs={10}>
              <Styling.PaperInner>
                <Form.Group row>
                  <Form.ControlLabel onClick={(event) => {
                    setRemoveCookies(event.target.value);
                  }} label="Remove Cookies"></Form.ControlLabel>
                  <Form.ControlLabel onClick={(event) => {
                    setChangeResolution(event.target.value);
                  }} label="Change Resolution"></Form.ControlLabel>
                  <Form.ControlLabel onClick={(event) => {
                    setMouseTrack(event.target.value);
                  }} label="Mouse Tracks"></Form.ControlLabel>
                  <Form.ControlLabel onClick={(event) => {
                    setDataSavingMode(event.target.value);
                  }} label="Data Saving Mode"></Form.ControlLabel>
                  <Form.ControlLabel onClick={(event) => {
                    setRandomGenerate(event.target.value);
                  }} label="Random Generate"></Form.ControlLabel>
                  <Form.ControlLabel onClick={(event) => {
                    setAnalyticsProtection(event.target.value);
                  }} label="Analytics Protection"></Form.ControlLabel>
                  <Form.ControlLabel onClick={(event) => {
                    setRemoveHistory(event.target.value);
                  }} label="Remove History"></Form.ControlLabel>
                </Form.Group>
              </Styling.PaperInner>
              <Styling.BigButton onClick={getSetting}>EXPORT DATA</Styling.BigButton>
              <Styling.BigButton onClick={saveSetting}>START</Styling.BigButton>
              <Styling.BigButton>STOP</Styling.BigButton>
                {settingList.map((val, key) => {
                    return (
                      <div>
                        <div>{val.chrome}</div>
                        <div>
                           <Styling.Button
                           onClick={() => { deleteSetting(val.id);}}>
                           Clear
                         </Styling.Button>
                        </div>
                      </div>
                    );
                  })}
            </Styling.Emptygrid>
          </Styling.Gridcontainer>
        </Styling.PaperSetting>
      )}
    </Styling>
    </>
  );
}
