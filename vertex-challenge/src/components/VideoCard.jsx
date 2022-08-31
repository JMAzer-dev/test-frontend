import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <section className="flex flex-col w-[300px] sm:w-[320px] shadow-none rounded-none">
      <div className="">
        <Link to={videoId ? `/video/${videoId}` : `/demo-video/`}>
          <img src={snippet?.thumbnails?.medium?.url} alt={snippet?.title} />
        </Link>
      </div>
      <div className="bg-[#1e1e1e] flex flex-col h-[106px]">
        <Link
          to={videoId ? `/video/${videoId}` : `/demo-video/`}
          className="text-md font-bold text-white"
        >
          {snippet?.title.substring(0, 60) || 'Este vídeo não possui título'}
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : `/demo-video/`
          }
          className="text-sm font-bold text-gray-700"
        >
          {snippet?.channelTitle.substring(0, 40) ||
            'Este canal não possui nome'}
          <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '3px' }} />
        </Link>
      </div>
    </section>
  );
};

export default VideoCard;
