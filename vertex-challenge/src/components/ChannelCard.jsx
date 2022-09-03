import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';

const ChannelCard = ({
  channelDetail: {
    id: { channelId },
    snippet,
    statistics,
  },
  pointer,
  margin,
}) => {
  if (!snippet?.title && !snippet?.thumbnails) return;

  return (
    <section
      className={
        pointer
          ? 'flex flex-col w-[300px] sm:w-[320px] shadow-none rounded-none m-auto'
          : 'flex flex-col w-[300px] sm:w-[320px] shadow-none rounded-none m-auto pointer-events-none'
      }
    >
      <div className=" flex flex-col justify-center text-center items-center text-white">
        <Link to={channelId ? `/channel/${channelId}` : `/demo-video/`}>
          <img
            src={
              snippet?.thumbnails?.medium?.url ||
              snippet?.thumbnails?.small?.url
            }
            alt={snippet?.title}
            className={
              margin
                ? 'rounded-full w-[150px] md:w-[180px] -mt-24'
                : 'rounded-full w-[180px] mt-8'
            }
          />
        </Link>
        <div className="flex flex-row items-center mt-2">
          <h6> {snippet?.title}</h6>
          <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '3px' }} />
          {statistics?.subscriberCount && (
            <h6 className="text-sm font-semibold text-gray-700">
              {parseInt(statistics?.subscriberCount).toLocaleString('pt-BR')}{' '}
              Subscribers
            </h6>
          )}
        </div>
      </div>
    </section>
  );
};

export default ChannelCard;
