import { useEffect } from 'react'

const DisplayTrack = ({ 
    currentTrack, 
    audioRef, 
    setDuration,
    progressBarRef,
}) => {

    const onLoadedMetadata = () => {
        const seconds = audioRef.current.duration
        console.log(seconds)
        setDuration(seconds)
        progressBarRef.current.max = seconds
    };
    
    return (
        <div>
            <audio 
                src={currentTrack.src} 
                ref={audioRef}
                onLoadedMetadata={onLoadedMetadata}
            />
            <div className="text">
                <p className="title">{currentTrack.title}</p>
                <p>{currentTrack.author}</p>
            </div>
        
        
        
        </div>
    );
  };
  export default DisplayTrack;