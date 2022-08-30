import React from 'react';
import { Typography } from '@mui/material';
const Footer = () => {
  return (
    <Typography
      variant="body2"
      className="copyright"
      sx={{ p: 3, color: '#fff', display:'flex', justifyContent: 'space-between' }}
    >
      Copyright 2022 - Vertex Challenge
      <span>
        By:{' '}
        <a href="https://jmazer.net" target="_blank" rel="noreferrer" style={{color:'#F31503'}}>
          JMAzer
        </a>
      </span>
    </Typography>
  );
};

export default Footer;
