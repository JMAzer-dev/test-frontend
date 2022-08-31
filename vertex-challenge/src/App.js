import { useQuery } from './hooks/useQuery';
import SearchBar from './components/SearchBar';
import VideoFeed from './components/VideoFeed';
import { useEffect, useState } from 'react';
function App() {
  const query = useQuery();
  const search = query.get('q');
  const [move, setMove] = useState(false);
  useEffect(() => {
    if (search === '' || search === null) {
      setMove(false);
    } else {
      setMove(true);
    }
  }, [search]);
  return (
    <Box sx={{ backgroundColor: '#000' }}>
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </Box>
  );
}

export default App;
