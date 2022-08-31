import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';

const ChannelCard = ({ channelDetail }) => {
  return (
    <section className="flex flex-col w-[300px] sm:w-[320px] shadow-none rounded-none">
      <div className=" flex flex-col justify-center text-center items-center text-white">
        <Link
          to={
            channelDetail
              ? `/channel/${channelDetail?.id?.channelId}`
              : `/demo-video/`
          }
        >
          <img
            src={channelDetail?.snippet?.thumbnails?.medium?.url}
            alt={channelDetail?.snippet?.title}
            className="rounded-full w-[180px]  "
          />
        </Link>
        <div className="flex flex-row items-center mt-2">
          <h6> {channelDetail?.snippet?.title}</h6>
          <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '3px' }} />
        </div>
      </div>
    </section>
  );
};

export default ChannelCard;
