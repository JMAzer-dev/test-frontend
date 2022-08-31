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
    <main className="bg-black overflow-y-auto">
      <section className="flex flex-col items-center p-3 md:p-10 lg:p-16 justify-center min-h-[91vh]">
        <div
          className={
            move
              ? '-translate-y-20 transition ease-in duration-300 mt-24 md:mt-16 lg:mt-12'
              : 'translate-y-0 transition ease-in duration-300'
          }
        >
          <SearchBar />
        </div>
        <VideoFeed />
      </section>
    </main>
  );
}

export default App;
