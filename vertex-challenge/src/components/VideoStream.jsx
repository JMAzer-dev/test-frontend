import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import { fetchAPI } from "../utils/fetchAPI";
import ReactPlayer from "react-player";
import LoadState from "./LoadState";
import SearchComponent from "./SearchComponent";
import VideoCard from "./VideoCard";

const VideoStream = () => {
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const [videoDetails, setVideoDetails] = useState(null);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetails(data.items[0])
    );

    fetchAPI(
      `search?part=snippet&relatedToVideoId=${id}&type=video&maxResults=10`
    ).then((data) => setVideos(data.items));
  }, [id]);

  if (!videoDetails?.snippet || !videos?.length)
    return <LoadState loading={true} />;

  const {
    snippet: { title, channelId, channelTitle, description },
    statistics: { viewCount, likeCount },
  } = videoDetails;

  return (
    <section className="min-h-[91vh] p-2">
      <SearchComponent />
      <div className="flex flex-col md:flex-row mt-8">
        <div className="flex-1">
          <div className="w-full top-20">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <h6 className="text-white font-bold p-2">{title}</h6>
            <h6 className="text-white text-base font-semibold px-2">
              {show ? <>{description.substring(0, 400)}</> : ""}
            </h6>
            <button
              className="text-gray-300 p-2"
              onClick={() => setShow(!show)}
            >
              {show ? "MOSTRAR MENOS" : "MOSTRAR MAIS"}
            </button>
            <div className="flex justify-between text-white py-1 px-2">
              <div>
                <Link
                  to={`/channel/${channelId}`}
                  className="text-gray-400 text-sm"
                >
                  {channelTitle}
                </Link>
                <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "3px" }} />
              </div>
              <div className="flex flex-col flex-wrap md:flex-row gap-2 items-end md:items-center">
                <h6>
                  {parseInt(viewCount).toLocaleString("pt-BR") || 0}{" "}
                  visualizações
                </h6>
                <h6>
                  {parseInt(likeCount).toLocaleString("pt-BR") || 0} curtidas
                </h6>
              </div>
            </div>
            <div className="my-4 pl-2 font-bold text-3xl">
              <h6 className="text-[#f31503]">
                Videos <span className="text-white">Relacionados:</span>
              </h6>
            </div>
          </div>
          <aside className="px-2 py-5 md:py-1 justify-center">
            <div className="flex flex-wrap justify-start gap-2">
              {videos.map((item, idx) => (
                <div key={idx}>
                  {item.id.videoId ? <VideoCard video={item} /> : null}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default VideoStream;
