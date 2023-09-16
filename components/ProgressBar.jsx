const ProgressBar = ({ 
    progressBarRef, 
    audioRef,
    timeProgress,
    duration, 
}) => {
    const handelProgressChange = () => {
        audioRef.current.currentTime = progressBarRef.current.value;
    }
    return (
      <div className="progress">
        <span className="time current">{timeProgress}</span>
        <input 
            type="range" 
            ref={progressBarRef} 
            defaultValue="0"
            onChange={handelProgressChange}    
        />
        <span className="time">{duration}</span>
      </div>
    );
  };
  
  export default ProgressBar;