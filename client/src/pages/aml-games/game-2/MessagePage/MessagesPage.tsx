import Box from '@mui/joy/Box';
import CssBaseline from '@mui/joy/CssBaseline';
import { CssVarsProvider } from '@mui/joy/styles';
import * as React from 'react';
import MyMessages from './components/MyMessages.tsx';

export default function JoyMessagesTemplate() {
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: 'flex', border:"0.5px solid gray", borderRadius:"8px", overflow:"hidden"}}>
        <Box component="main" className="MainContent" sx={{ flex: 1 }}>
          <MyMessages />
        </Box>
      </Box>
    </CssVarsProvider>
  );
}