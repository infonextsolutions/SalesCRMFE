import { useRef, useState } from "react";
import { tracks } from "./tracks";

// import components
import DisplayTrack from "./DisplayTrack";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import TopBar from "./TopBar";

const AudioPlayer = ({ src, check }) => {
  // states
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // reference
  const audioRef = useRef();
  const progressBarRef = useRef();

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };

  return (
    <>
      <div
        style={{
          backgroundColor: check ? "" : "#fff",
        }}
        className=" relative w-[100%] mt-[20px] min-h-[100px] flex flex-col justify-center"
      >
        <div className="inner w-[100%]">
          <p className="text-[14px] pt-[10px] mb-[15px] font-medium tracking-wide text-[#000]">
            Call Player
          </p>
          <ProgressBar
            {...{ progressBarRef, audioRef, timeProgress, duration }}
          />
          <Controls
            {...{
              audioRef,
              progressBarRef,
              duration,
              setTimeProgress,
              tracks,
              trackIndex,
              timeProgress,
              setTrackIndex,
              setCurrentTrack,
              handleNext,
            }}
          />
          <DisplayTrack
            {...{
              src,
              currentTrack,
              audioRef,
              setDuration,
              progressBarRef,
              handleNext,
            }}
          />
        </div>
      </div>
    </>
  );
};
export default AudioPlayer;
