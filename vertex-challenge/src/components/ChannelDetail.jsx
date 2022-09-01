import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAPI } from '../utils/fetchAPI';
import ChannelCard from './ChannelCard';
import LoadState from './LoadState';
import VideoCard from './VideoCard';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const { id } = useParams();
  const [videos, setVideos] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchAPI(
      `search?channelId=${id}&part=snippet&order=date&maxResults=6`
    ).then((data) => setVideos(data?.items));
  }, [id]);

  if (videos === null) return <LoadState loading={true} />;

  return (
    <>
      <section className="min-h-[91vh]">
        <div className="z-10 h-[200px] bg-[#1e1e1e]" />
        <ChannelCard
          channelDetail={channelDetail}
          pointer={false}
          margin={true}
        />
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {videos.map((item, idx) => (
            <div key={idx}>{item.id.videoId && <VideoCard video={item} />}</div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ChannelDetail;
