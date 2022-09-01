import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';

const ChannelCard = ({ channelDetail, pointer, margin }) => {
  return (
    <section
      className={
        pointer
          ? 'flex flex-col w-[300px] sm:w-[320px] shadow-none rounded-none m-auto'
          : 'flex flex-col w-[300px] sm:w-[320px] shadow-none rounded-none m-auto pointer-events-none'
      }
    >
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
            className={
              margin
                ? 'rounded-full w-[150px] md:w-[180px] -mt-24'
                : 'rounded-full w-[180px] mt-8'
            }
          />
        </Link>
        <div className="flex flex-row items-center mt-2">
          <h6> {channelDetail?.snippet?.title}</h6>
          <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '3px' }} />
          {channelDetail?.statistics?.subscriberCount && (
            <h6 className="text-sm font-semibold text-gray-700">
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString('en-US')}{' '}
              Subscribers
            </h6>
          )}
        </div>
      </div>
    </section>
  );
};

export default ChannelCard;
