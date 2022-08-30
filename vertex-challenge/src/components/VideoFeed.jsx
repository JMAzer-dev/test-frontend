import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Videos from './Videos';
const VideoFeed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box p={2} sx={{ oveflowY: 'auto', flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: 'white' }}
        >
          New
          <span style={{ color: '#f31503' }}> Videos</span>
        </Typography>
        <Videos videos={[]} />
      </Box>
    </Stack>
  );
};

export default VideoFeed;
