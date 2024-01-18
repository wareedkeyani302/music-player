import React, { useState, useRef, useEffect } from 'react';
import { IoPlayBackSharp, IoPlayForwardSharp, IoPauseSharp, IoPlaySharp, IoVolumeHighSharp, IoVolumeMuteSharp } from "react-icons/io5";

const AudioPlayer = ({ audioData }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef();

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleForward = () => {
    audioRef.current.currentTime += 10;
  };

  const handleBackward = () => {
    audioRef.current.currentTime -= 10;
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };
  const handleToggleMute = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    audioRef.current.muted = newMutedState;
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleSeekChange = (e) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
  };

  return (
    <div className="audio-player">
      <div className="audio-info">
        <img src={audioData.cover} alt="Album Cover" />
        <div className="track-info">
          <p>{audioData.title}</p>
          <p>{audioData.author}</p>
        </div>
      </div>
      <audio ref={audioRef} src={audioData.url} onTimeUpdate={handleTimeUpdate} />
      <div className="controls">
        <button onClick={handleBackward}><IoPlayBackSharp /></button>
        <button onClick={handlePlayPause}>{isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}</button>
        <button onClick={handleForward}><IoPlayForwardSharp /></button>
        <input
          type="range"
          min={0}
          max={audioRef.current ? audioRef.current.duration : 0}
          step={1}
          value={currentTime}
          onChange={handleSeekChange}
        />
        <button onClick={handleToggleMute}>
            {isMuted ? <IoVolumeMuteSharp /> : <IoVolumeHighSharp />}
          </button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
          />
      </div>
    </div>
  );
};

export default AudioPlayer;

