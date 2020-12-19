import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Container } from '../components';

export function SitesBoard ({children}) {
  const [sites, setSites] = useState("");
  const [sitesList, setSitesList] = useState([]);

  const saveSites = () => {
    axios.post('http://localhost:3001/createsites', {
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
    axios.get('http://localhost:3001/showsites').then((response) => {
      setSitesList(response.data);
    });
  };

  const deleteSites = (id) => {
    axios.delete(`http://localhost:3001/deletesites/${id}`).then((response) => {
      setSitesList(
        sitesList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };


  return (
    <>
          <Container.Emptygrid item>
           <Container.Title>Sites</Container.Title>
            <Container.Paper>
              <Container.TextField onChange={(event) => {
                setSites(event.target.value);
              }} placeholder="Enter your sites here"></Container.TextField>
              <Container.Button onClick={saveSites}>ADD</Container.Button>
              <Container.Button onClick={getSites}>SHOW</Container.Button>
              {sitesList.map((val, key) => {
                  return (
                    <div>
                      <div>{val.sites}</div>
                      <div>
                         <Container.Button
                         onClick={() => { deleteSites(val.id);}}>
                         Clear
                        </Container.Button>
                      </div>
                    </div>
                  );
                })}
            </Container.Paper>
          </Container.Emptygrid>
    </>
  );
}
