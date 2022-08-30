import { Stack, TextField } from '@mui/material';

import SearchBar from '../components/SearchBar';
import VideoFeed from '../components/VideoFeed';

const Home = () => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      sx={{
        p: { md: 2 },
        justifyContent: 'center',
        height: '87vh',
      }}
    >
      <SearchBar />
      <VideoFeed />
    </Stack>
  );
};

export default Home;
