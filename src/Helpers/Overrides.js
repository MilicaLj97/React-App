import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
    overrides: {
        MuiInputBase: {
        root: {
          width: '200px',
        },
      },
    },
  });

function OverridesCss() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Overrides CSS</Button>
    </ThemeProvider>
  );
}

export default OverridesCss;


