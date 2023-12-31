import { useState, useRef } from 'react'
import { tracks } from './tracks'


import DisplayTrack from './DisplayTrack'
import Controls from './Controls'
import ProgressBar from './ProgressBar'

const AudioPlayer = () => {
    const [trackIndex, setTrackIndex] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex])
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);


    const audioRef = useRef();
    const progressBarRef = useRef();


   
    
    return (
      <div className="audio-player">
        <div className="inner">
            <DisplayTrack 
                {...{ currentTrack, audioRef, setDuration, progressBarRef }}
            />
            <Controls {...{ 
                audioRef,
                progressBarRef,
                duration,
                setTimeProgress, 
                tracks,
                trackIndex,
                setTrackIndex,
                setCurrentTrack,
                }} />
            <ProgressBar 
                {...{ progressBarRef, audioRef, timeProgress, duration }}
            />
        </div>
      </div>
    );
  };
  export default AudioPlayer;