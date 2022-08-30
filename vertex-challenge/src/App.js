import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
function App() {
  return (
    <Box sx={{ backgroundColor: '#000' }}>
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </Box>
  );
}

export default App;
