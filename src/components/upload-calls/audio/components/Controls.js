import { useState, useEffect, useRef, useCallback } from "react";

// icons
import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
  IoPauseSharp,
} from "react-icons/io5";

import { IoMdVolumeHigh, IoMdVolumeOff, IoMdVolumeLow } from "react-icons/io";
import { getBasicIcon } from "@/utils/AssetsHelper";
import Image from "next/image";

const Controls = ({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
  tracks,
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
  handleNext,
  timeProgress,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(60);
  const [muteVolume, setMuteVolume] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      setTimeProgress(currentTime);
      progressBarRef.current.value = currentTime;
      progressBarRef.current.style.setProperty(
        "--range-progress",
        `${(progressBarRef.current.value / duration) * 100}%`
      );

      playAnimationRef.current = requestAnimationFrame(repeat);
    }
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  const skipForward = () => {
    audioRef.current.currentTime += 15;
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 15;
  };

  const handlePrevious = () => {
    if (trackIndex === 0) {
      let lastTrackIndex = tracks.length - 1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(tracks[lastTrackIndex]);
    } else {
      setTrackIndex((prev) => prev - 1);
      setCurrentTrack(tracks[trackIndex - 1]);
    }
  };

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume;
    }
  }, [volume, audioRef, muteVolume]);

  function convertMinutesToTime(secs) {
    let minutes = Math.floor(secs / 60);
    let seconds = Math.floor(secs % 60);

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    return minutes + ":" + seconds;
  }

  return (
    <>
      <div className="w-[100%] mt-[15px] flex justify-center items-center">
        <Image
          src={getBasicIcon("playRev")}
          style={{
            zIndex: 10,
          }}
          onClick={skipBackward}
          alt=""
          width={13}
          height={13}
          className="mr-[9px] cursor-pointer"
        />
        <Image
          src={isPlaying ? getBasicIcon("pause1") : getBasicIcon("playBtn")}
          style={{
            zIndex: 10,
          }}
          onClick={togglePlayPause}
          className="translate-y-[1px] cursor-pointer"
          alt=""
          width={40}
          height={40}
        />
        <Image
          src={getBasicIcon("playFor")}
          style={{
            zIndex: 10,
          }}
          onClick={skipForward}
          className="ml-[8px] cursor-pointer"
          alt=""
          width={13}
          height={13}
        />
      </div>
      <div className="volume w-[100px] absolute bottom-[13px]  left-[40px]">
        <button onClick={() => setMuteVolume((prev) => !prev)}>
          <Image
            src={getBasicIcon("volume")}
            style={{
              zIndex: 10,
            }}
            alt=""
            width={13}
            height={13}
            className="mr-[9px] cursor-pointer"
          />
        </button>
        <input
          type="range"
          className="diff bg-renal-blue "
          min={0}
          max={100}
          value={volume}
          style={{
            background: `linear-gradient(to right, #304ffd  ${volume}%, #ccc ${volume}%)`,
          }}
          onChange={(e) => setVolume(e.target.value)}
        />
      </div>
      <div className="absolute text-[#8A9099] bottom-[30px] right-[40px] text-[11px] tracking-wide font-medium ">
        {convertMinutesToTime(timeProgress.toFixed(2))}/
        {convertMinutesToTime(duration)}
      </div>
    </>
  );
};

export default Controls;
