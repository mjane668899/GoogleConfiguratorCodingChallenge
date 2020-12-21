import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Styling } from '../components';
import sitesData from "../pre-populate/sites.json";

export function SitesBoard ({children}) {
  const [sites, setSites] = useState("");
  const [sitesList, setSitesList] = useState([]);

  const saveSites = () => {
    axios.post('http://localhost:8000/createsites', {
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

  const getSites = () => {
    axios.get('http://localhost:8000/showsites').then((response) => {
      setSitesList(response.data);
    });
  };

  const deleteSites = (id) => {
    axios.delete(`http://localhost:8000/deletesites/${id}`).then((response) => {
      setSitesList(
        sitesList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };


  return (
    <>
    <Styling.Emptygrid item>
      <Styling.Title>Sites</Styling.Title>
      <Styling.Paper>
        <Styling.TextField onChange={(event) => {
            setSites(event.target.value);
          }} placeholder="Enter your sites here"></Styling.TextField>
          <Styling.Button onClick={saveSites}>ADD</Styling.Button>
          <Styling.Button onClick={getSites}>SHOW</Styling.Button>
          <Styling.Box>
            {sitesData.map(item =>
              <Styling.List>
                <Styling.ListItemtext>
                  <div key={item.id}>
                    <div>{item.sites}</div>
                    <Styling.ListItemSecondaryAction>
                      <Styling.DeleteButton/>
                    </Styling.ListItemSecondaryAction>
                  </div>
                </Styling.ListItemtext>
              </Styling.List>
            )}
            {sitesList.map((val, key) => {
              return (
                <Styling.List>
                  <Styling.ListItemtext>
                    <div>
                      <div>{val.sites}</div>
                      <Styling.ListItemSecondaryAction>
                        <Styling.DeleteButton onClick={() => {
                            deleteSites(val.id);
                          }}/>
                        </Styling.ListItemSecondaryAction>
                      </div>
                    </Styling.ListItemtext>
                  </Styling.List>
                );
              })}
            </Styling.Box>
          </Styling.Paper>
        </Styling.Emptygrid>
        </>
    );
  }
