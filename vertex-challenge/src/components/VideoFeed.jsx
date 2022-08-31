import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { fetchAPI } from '../utils/fetchAPI';
import { useQuery } from '../hooks/useQuery';
import { useNavigate } from 'react-router-dom';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const VideoFeed = () => {
  const query = useQuery();
  const search = query.get('q');
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    if (search !== null) {
      fetchAPI(search).then((data) => setVideos(data.items));
    }
  }, [search]);
  const handleClean = () => {
    setVideos([]);
    navigate('/');
  };
  return (
    <section className="flex flex-col md:flex-row">
      <div className="p-2 overflow-y-auto flex-1">
        <div className='mb-8'>
          <h4 className="text-2xl font-bold mb-2 text-white">
            Buscar
            <span className="text-[#f31503]"> Videos: </span>
            {search}
          </h4>
          <div className={videos.length > 0 ? 'block' : 'hidden'}>
            <Button variant="contained" color="error" onClick={handleClean}>
              Limpar Busca
            </Button>
          </div>
        </div>
        <section className="flex flex-wrap justify-start gap-4">
          {videos.map((item, idx) => (
            <div key={idx}>
              {item.id.videoId ? <VideoCard video={item} /> : null}
              {item.id.channelId ? <ChannelCard channelDetail={item} /> : null}
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default VideoFeed;
