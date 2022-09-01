import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';
import { fetchAPI } from '../utils/fetchAPI';
import ReactPlayer from 'react-player';
import LoadState from './LoadState';

const VideoStream = () => {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetails(data.items[0])
    );
    setLoading(false);
  }, [id]);

  if (!videoDetails?.snippet) return <LoadState loading={true} />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetails;

  return (
    <section className="min-h-[91vh]">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <div className="w-full sticky top-20">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <h6 className="text-white font-bold p-2">{title}</h6>
            <div className="flex justify-between text-white py-1 px-2">
              <Link to={`/channel/${channelId}`}>{channelTitle}</Link>
              <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '3px' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoStream;
