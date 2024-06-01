import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import {
  FaPlay,
  FaPause,
  FaRegHeart,
  FaHeart,
  FaHashtag,
} from "react-icons/fa";
import { GoClock } from "react-icons/go";
import axios from "axios";

const HomeWrapp = styled.div`
  width: 66%;
`;

const Images = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 20px;
`;

const Container = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
`;

const LinearDiv = styled.div`
  background: linear-gradient(180deg, #def628 5.09%, #121212 43.28%);
`;
const AudioPlayer = ({ props, isPlayingIndex, onTrackSelect }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (isPlayingIndex !== null && props) {
      const trackUrl = props.tracks.items[isPlayingIndex]?.track.preview_url;
      if (trackUrl) {
        audio.src = trackUrl;
        audio.play();
      }
    } else {
      audio.pause();
    }
  }, [isPlayingIndex, props]);

  return <audio ref={audioRef} />;
};

const Music = () => {
  const params = useParams();
  const token = useSelector((state) => state.auth.token);
  const [playlist, setPlaylist] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isPlayingIndex, setIsPlayingIndex] = useState(null);

  useEffect(() => {
    if (params.id && token) {
      fetch(`${import.meta.env.VITE_API_MUSIC}playlists/${params.id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setPlaylist(data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [params.id, token]);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handlePlayPause = (index) => {
    if (index === isPlayingIndex) {
      setIsPlayingIndex(null);
    } else {
      setIsPlayingIndex(index);
    }
  };

  return (
    <HomeWrapp>
      <div className="bg-[#000000fa]">
        <Container className="flex-col">
          <Images>
            <img
              src="/Back.svg"
              alt="Back"
              width={40}
              height={40}
              className="cursor-pointer"
            />
            <img
              src="/Forward.svg"
              alt="Forward"
              width={40}
              height={40}
              className="cursor-pointer"
            />
          </Images>
        </Container>
        <div className="w-full backdrop-blur-2xl h-auto">
          <div className="p-[20px]">
            {playlist && (
              <div className="flex items-center mt-5 gap-7">
                <img
                  src={playlist.images[0]?.url}
                  alt="Playlist cover"
                  width={290}
                  height={290}
                />
                <div className="text-white flex flex-col">
                  <h4>PUBLIC PLAYLIST</h4>
                  <h1 className="font-bold text-[65px]">{playlist.name}</h1>
                  <h4>{playlist.description}</h4>
                </div>
              </div>
            )}
          </div>
        </div>
        <AudioPlayer
          props={playlist}
          isPlayingIndex={isPlayingIndex}
          onTrackSelect={(index) => handlePlayPause(index)}
        ></AudioPlayer>
        <div className="flex w-[880px] flex-col justify-center mb-[30px]">
          <div className="text-[#B3B3B3] ml-[25px] flex justify-center items-center w-[880px] px-[0px] border-b-2 pb-[20px] border-[#666666]">
            <FaHashtag />
            <p className="mr-[290px]">TITLE</p>
            <p className="mr-[190px]">ALBUM</p>
            <p className="mr-[100px]">DATE ADDED</p>
            <GoClock className="text-lg" />
          </div>

          <ul className="px-[30px] mt-6">
            {playlist &&
              playlist.tracks.items.map((item, index) => (
                <li key={index} className="mb-4">
                  <div className="img flex items-center text-white gap-5">
                    <span>{index + 1}</span>
                    <img
                      src={item.track.album.images[0]?.url}
                      alt="Album cover"
                      width={52}
                      height={52}
                    />
                    <div className="w-[200px]">
                      <p className="font-semibold">{item.track.name}</p>
                      <p className="text-[#B3B3B3]">
                        {item.track.artists[0].name}
                      </p>
                    </div>
                    <div className="ml-[50px] w-[274px]">
                      <p className="text-[#B3B3B3] text-sm">
                        {item.track.name}
                      </p>
                    </div>

                    <div className="">
                      <FaRegHeart
                        className="text-lg   cursor-pointer"
                        onClick={handleLike}
                      />
                    </div>

                    <button
                      className="bg-[#65d36e] text-black p-[4px] rounded-full font-bold flex items-center justify-center"
                      onClick={() => handlePlayPause(index)}
                    >
                      {isPlayingIndex === index ? "Pause" : "Play"}
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <Footer />
      </div>
    </HomeWrapp>
  );
};

export default Music;
