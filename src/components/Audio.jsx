import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FaPlay, FaPause, FaRegHeart, FaHeart } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";

function AudioPlayer(props) {
  const [audioUrl, setAudioUrl] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const fetchAudio = async () => {
      try {
        const response = await axios.get(
          `${props.props.tracks.items[1].track.preview_url}`,
          { responseType: "blob" }
        );
        const audioBlob = new Blob([response.data], { type: "audio/mp3" });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioUrl(audioUrl);
      } catch (error) {
        console.error("Error fetching the audio:", error);
      }
    };

    fetchAudio();
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="text-white p-[20px] mb-[90px]">
      <div className="flex items-center gap-10">
        <button
          onClick={handlePlayPause}
          className="bg-[#65d36e] text-black p-[24px] rounded-full font-bold flex items-center justify-center"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        <div className="flex items-center gap-10 justify-between">
          {isLiked ? (
            <FaHeart className="text-4xl cursor-pointer" onClick={handleLike} />
          ) : (
            <FaRegHeart
              className="text-4xl cursor-pointer"
              onClick={handleLike}
            />
          )}
          <IoMdDownload className="text-4xl"></IoMdDownload>
          <HiOutlineDotsHorizontal className="text-4xl"></HiOutlineDotsHorizontal>
        </div>
      </div>
      {audioUrl && (
        <audio ref={audioRef} src={audioUrl} controls>
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
}

export default AudioPlayer;
