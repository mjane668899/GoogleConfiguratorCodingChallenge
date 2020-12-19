import React from 'react';
import { KeywordBoard } from '../containers/keyword';
import { SitesBoard } from '../containers/sites';
import { SettingBoard } from '../containers/setting';
import { Testing } from '../containers/testing';
import { Container } from '../components';

export default function Home() {
  return (
    <>
      <Container.Grid>
        <Container.Emptygrid item xs={12}>
          <Container.Gridcontainer justify="space-between">
            <KeywordBoard />
            <SitesBoard />
            <SettingBoard />
          </Container.Gridcontainer>
        </Container.Emptygrid>
      </Container.Grid>
    </>
  );
}
