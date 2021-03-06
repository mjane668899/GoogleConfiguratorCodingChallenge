import React from 'react';
import { KeywordBoard } from '../containers/keyword';
import { SitesBoard } from '../containers/sites';
import { SettingBoard } from '../containers/setting';
import { Styling } from '../components';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function Home() {
  const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ff4400',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});
 return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
        <Styling.Grid>
          <Styling.Grid>
          <Styling.Emptygrid item xs={12}>
            <Styling.Gridcontainer justify="center">
              <KeywordBoard />
              <SitesBoard />
              <SettingBoard />
            </Styling.Gridcontainer>
          </Styling.Emptygrid>
          </Styling.Grid>
        </Styling.Grid>
    </ThemeProvider>
    </>
  );
}
